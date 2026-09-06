import axios from "axios";

const configuredBackend = process.env.REACT_APP_BACKEND_URL || "";
const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT;

const isBrowser = typeof window !== "undefined";
const isLocalPage =
  isBrowser && ["localhost", "127.0.0.1"].includes(window.location.hostname);
const isLocalBackend = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(
  configuredBackend
);
const backend =
  configuredBackend && (isLocalPage || !isLocalBackend) ? configuredBackend : "";

const api = axios.create({ baseURL: `${backend}/api` });

const submitToFormspree = (payload) => {
  if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
    throw new Error("Formspree endpoint missing. Set REACT_APP_FORMSPREE_ENDPOINT in .env");
  }

  return axios
    .post(FORMSPREE_ENDPOINT, payload, {
      headers: { Accept: "application/json" },
    })
    .then((r) => r.data);
};

// Public landing-page endpoints (no auth)
export const publicAudit = (payload) => api.post("/public/audit", payload).then((r) => r.data);
export const publicRoi = (payload) => api.post("/public/roi", payload).then((r) => r.data);
export const publicGmb = (payload) => api.post("/public/gmb", payload).then((r) => r.data);
export const publicContact = (payload) => submitToFormspree(payload);
export const publicSubscribe = (payload) => api.post("/public/subscribe", payload).then((r) => r.data);
