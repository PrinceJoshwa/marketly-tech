import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  withCredentials: true,
});

export async function login(email, password) {
  const r = await api.post("/auth/login", { email, password });
  return r.data;
}

export async function getMe() {
  const r = await api.get("/auth/me");
  return r.data;
}

export async function logout() {
  await api.post("/auth/logout");
}

// Clients
export const listClients = () => api.get("/clients").then((r) => r.data);
export const createClient = (payload) => api.post("/clients", payload).then((r) => r.data);
export const getClient = (id) => api.get(`/clients/${id}`).then((r) => r.data);
export const updateClient = (id, payload) => api.put(`/clients/${id}`, payload).then((r) => r.data);
export const deleteClient = (id) => api.delete(`/clients/${id}`).then((r) => r.data);

// Blogs
export const listBlogs = (cid) => api.get(`/clients/${cid}/blogs`).then((r) => r.data);
export const createBlog = (cid, url) => api.post(`/clients/${cid}/blogs`, { url }).then((r) => r.data);
export const updateBlog = (cid, bid, payload) =>
  api.patch(`/clients/${cid}/blogs/${bid}`, payload).then((r) => r.data);
export const deleteBlog = (cid, bid) => api.delete(`/clients/${cid}/blogs/${bid}`).then((r) => r.data);

// Backlinks
export const getBacklinks = (cid) => api.get(`/clients/${cid}/backlinks`).then((r) => r.data);
export const setBacklinksManual = (cid, count) =>
  api.post(`/clients/${cid}/backlinks/manual`, { count }).then((r) => r.data);
export const syncBacklinksSheet = (cid) =>
  api.post(`/clients/${cid}/backlinks/sync-sheet`).then((r) => r.data);

// Vault
export const listVault = (cid) => api.get(`/clients/${cid}/vault`).then((r) => r.data);
export const uploadVault = (cid, file, label, category) => {
  const fd = new FormData();
  fd.append("file", file);
  if (label) fd.append("label", label);
  fd.append("category", category || "screenshot");
  return api
    .post(`/clients/${cid}/vault`, fd, { headers: { "Content-Type": "multipart/form-data" } })
    .then((r) => r.data);
};
export const deleteVault = (cid, fid) => api.delete(`/clients/${cid}/vault/${fid}`).then((r) => r.data);
export const vaultFileUrl = (fid) => `${API}/vault/files/${fid}`;

// GSC
export const gscConnect = (cid) => api.post(`/clients/${cid}/gsc/connect`).then((r) => r.data);
export const gscData = (cid, days = 28) =>
  api.get(`/clients/${cid}/gsc/data`, { params: { days } }).then((r) => r.data);

// Phase 7 — Multi-source performance
export const ga4Connect = (cid) => api.post(`/clients/${cid}/ga4/connect`).then((r) => r.data);
export const ga4Data = (cid, days = 28) => api.get(`/clients/${cid}/ga4/data`, { params: { days } }).then((r) => r.data);
export const adsConnect = (cid) => api.post(`/clients/${cid}/ads/connect`).then((r) => r.data);
export const adsData = (cid, days = 28) => api.get(`/clients/${cid}/ads/data`, { params: { days } }).then((r) => r.data);
export const metaConnect = (cid) => api.post(`/clients/${cid}/meta/connect`).then((r) => r.data);
export const metaData = (cid, days = 28) => api.get(`/clients/${cid}/meta/data`, { params: { days } }).then((r) => r.data);

// Google OAuth (GSC + GA4)
export const googleStatus = (cid) => api.get(`/clients/${cid}/google/status`).then((r) => r.data);
export const googleStart = (cid) => api.post(`/oauth/google/start`, null, { params: { client_id: cid } }).then((r) => r.data);
export const googleDisconnect = (cid) => api.delete(`/clients/${cid}/google/disconnect`).then((r) => r.data);
export const gscSites = (cid) => api.get(`/clients/${cid}/gsc/sites`).then((r) => r.data);
export const adsCustomers = (cid) => api.get(`/clients/${cid}/ads/customers`).then((r) => r.data);
export const googleSelect = (cid, payload) => api.post(`/clients/${cid}/google/select`, payload).then((r) => r.data);

// Meta (Facebook + Instagram) OAuth
export const metaStatus = (cid) => api.get(`/clients/${cid}/meta/status`).then((r) => r.data);
export const metaStart = (cid) => api.post(`/oauth/meta/start`, null, { params: { client_id: cid } }).then((r) => r.data);
export const metaDisconnect = (cid) => api.delete(`/clients/${cid}/meta/disconnect`).then((r) => r.data);

// Phase 9 — Automation + AI Storyline
export const getStoryline = (cid, opts = {}) => api.get(`/clients/${cid}/storyline`, { params: opts }).then((r) => r.data);
export const automationStatus = () => api.get(`/automation/status`).then((r) => r.data);
export const automationRuns = (limit = 20) => api.get(`/automation/runs`, { params: { limit } }).then((r) => r.data);
export const runSnapshotsNow = () => api.post(`/automation/run/snapshots`).then((r) => r.data);
export const runStorylineNow = () => api.post(`/automation/run/storyline`).then((r) => r.data);

// Phase 10 — Monthly sheets, Backlink analyser, MoM Strategy
export const listMonthlySheets = (cid) => api.get(`/clients/${cid}/monthly-sheets`).then((r) => r.data);
export const upsertMonthlySheet = (cid, month, payload) => api.put(`/clients/${cid}/monthly-sheets/${month}`, payload).then((r) => r.data);
export const deleteMonthlySheet = (cid, month) => api.delete(`/clients/${cid}/monthly-sheets/${month}`).then((r) => r.data);
export const syncMonthlySheet = (cid, month) => api.post(`/clients/${cid}/monthly-sheets/${month}/sync`).then((r) => r.data);
export const listBacklinksLog = (cid, opts = {}) => api.get(`/clients/${cid}/backlinks-log`, { params: opts }).then((r) => r.data);
export const analyseBacklinks = (cid, month) => api.post(`/clients/${cid}/backlinks-log/analyse`, null, { params: month ? { month } : {} }).then((r) => r.data);
export const getStrategy = (cid, opts = {}) => api.get(`/clients/${cid}/strategy`, { params: opts }).then((r) => r.data);
export const toggleStrategyAction = (cid, month, actionId) => api.post(`/clients/${cid}/strategy/${month}/actions/${actionId}/toggle`).then((r) => r.data);

// Phase 11 — On-Page Audit + Competitor Strategy
export const auditPage = (cid, url) => api.post(`/clients/${cid}/audit/page`, { url }).then((r) => r.data);
export const auditSite = (cid, payload = {}) => api.post(`/clients/${cid}/audit/site`, payload).then((r) => r.data);
export const auditHistory = (cid, opts = {}) => api.get(`/clients/${cid}/audit/history`, { params: opts }).then((r) => r.data);
export const getSiteAudit = (cid, auditId) => api.get(`/clients/${cid}/audit/site/${auditId}`).then((r) => r.data);
export const runCompetitorStrategy = (cid, competitorUrl) => api.post(`/clients/${cid}/competitor-strategy`, { competitor_url: competitorUrl }).then((r) => r.data);
export const listCompetitorStrategies = (cid, limit = 10) => api.get(`/clients/${cid}/competitor-strategy`, { params: { limit } }).then((r) => r.data);
export const getCompetitorStrategy = (cid, sid) => api.get(`/clients/${cid}/competitor-strategy/${sid}`).then((r) => r.data);

// Phase 8 — Spy Glass + AI Editor
export const runSpyglass = (cid, payload = {}) => api.post(`/clients/${cid}/spyglass/run`, payload).then((r) => r.data);
export const getSpyglass = (cid) => api.get(`/clients/${cid}/spyglass`).then((r) => r.data);
export const aiEditor = (cid, payload) => api.post(`/clients/${cid}/ai-editor`, payload).then((r) => r.data);
export const listAiReports = (cid) => api.get(`/clients/${cid}/ai-editor`).then((r) => r.data);

// Rank Guard
export const takeSnapshot = (cid) => api.post(`/clients/${cid}/snapshots`).then((r) => r.data);
export const listSnapshots = (cid) => api.get(`/clients/${cid}/snapshots`).then((r) => r.data);
export const rankGuard = (cid) => api.get(`/clients/${cid}/rank-guard`).then((r) => r.data);

// Correlation
export const correlation = (cid) => api.get(`/clients/${cid}/correlation`).then((r) => r.data);

// Invoices
export const listInvoices = (cid) => api.get(`/clients/${cid}/invoices`).then((r) => r.data);
export const createInvoice = (cid, payload) =>
  api.post(`/clients/${cid}/invoices`, payload).then((r) => r.data);
export const deleteInvoice = (cid, iid) =>
  api.delete(`/clients/${cid}/invoices/${iid}`).then((r) => r.data);
export const invoicePdfUrl = (iid) => `${API}/invoices/${iid}/pdf`;
export const monthlyReportUrl = (cid, month, invoiceId) => {
  const params = new URLSearchParams();
  if (month) params.set("month", month);
  if (invoiceId) params.set("invoice_id", invoiceId);
  return `${API}/clients/${cid}/reports/monthly?${params.toString()}`;
};

// Team
export const listTeam = () => api.get("/team").then((r) => r.data);
export const inviteTeam = (email, role) => api.post("/team/invites", { email, role }).then((r) => r.data);
export const revokeInvite = (email) => api.delete(`/team/invites/${encodeURIComponent(email)}`).then((r) => r.data);
export const removeMember = (userId) => api.delete(`/team/${userId}`).then((r) => r.data);
