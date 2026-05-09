import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopNav from "@/components/TopNav";
import ClientForm from "@/components/ClientForm";
import OverviewTab from "@/components/tabs/OverviewTab";
import WorkLogsTab from "@/components/tabs/WorkLogsTab";
import VaultTab from "@/components/tabs/VaultTab";
import GSCTab from "@/components/tabs/GSCTab";
import PerformanceTab from "@/components/tabs/PerformanceTab";
import IntelligenceTab from "@/components/tabs/IntelligenceTab";
import ReportsTab from "@/components/tabs/ReportsTab";
import StrategyTab from "@/components/tabs/StrategyTab";
import AuditTab from "@/components/tabs/AuditTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { getClient, getMe, updateClient, deleteClient } from "@/lib/api";
import { toast } from "sonner";
import { Pencil, Trash2, Globe } from "lucide-react";

export default function ClientDetail() {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [tab, setTab] = useState("overview");

  // Cross-tab signal: clicking "Outrank" on Spy Glass → switch to Audit tab + prefill URL
  useEffect(() => {
    const onGotoAudit = (e) => {
      setTab("audit");
      // re-dispatch a downstream event AuditTab listens to, once the tab has mounted
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("marketly-prefill-competitor", { detail: e.detail }));
      }, 200);
    };
    window.addEventListener("marketly-goto-audit", onGotoAudit);
    return () => window.removeEventListener("marketly-goto-audit", onGotoAudit);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const [u, c] = await Promise.all([getMe(), getClient(clientId)]);
        setUser(u);
        setClient(c);
      } catch (e) {
        toast.error("Client not found");
        navigate("/admin/dashboard", { replace: true });
      } finally {
        setLoading(false);
      }
    })();
  }, [clientId, navigate]);

  const handleEdit = async (payload) => {
    setSubmitting(true);
    try {
      const c = await updateClient(clientId, payload);
      setClient(c);
      setEditOpen(false);
      toast.success("Client updated");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Update failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteClient(clientId);
      toast.success("Client deleted");
      navigate("/admin/dashboard", { replace: true });
    } catch {
      toast.error("Delete failed");
    }
  };

  if (loading || !client) {
    return (
      <div>
        <TopNav user={user} />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <Skeleton className="h-12 w-1/2 rounded-sm" />
          <Skeleton className="mt-4 h-6 w-1/3 rounded-sm" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-sm" />
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div data-testid={`client-detail-${client.client_id}`}>
      <TopNav user={user} breadcrumbs={[{ label: "Clients", to: "/admin/dashboard" }, { label: client.name }]} />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-b border-zinc-200 pb-8">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              {client.client_id}
            </div>
            <h1 className="mt-2 text-4xl sm:text-5xl font-heading font-black tracking-tighter text-zinc-950 leading-none">
              {client.name}
            </h1>
            {client.domain && (
              <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                <Globe className="h-4 w-4" />
                <a
                  href={`https://${client.domain.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cobalt"
                  data-testid="client-domain-link"
                >
                  {client.domain}
                </a>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            {user?.role === "admin" && (
              <>
                <Button
                  variant="outline"
                  onClick={() => setEditOpen(true)}
                  data-testid="edit-client-button"
                  className="rounded-sm border-zinc-200"
                >
                  <Pencil className="h-4 w-4 mr-2" /> Edit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setConfirmDelete(true)}
                  data-testid="delete-client-button"
                  className="rounded-sm border-zinc-200 text-red-600 hover:text-red-700 hover:border-red-300"
                >
                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                </Button>
              </>
            )}
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="mt-8">
          <TabsList className="bg-transparent p-0 h-auto border-b border-zinc-200 rounded-none w-full justify-start gap-6 flex-wrap">
            {[
              ["overview", "Overview"],
              ["work", "Work Logs"],
              ["vault", "Vault"],
              ["gsc", "Search Console"],
              ["performance", "Performance"],
              ["intelligence", "Intelligence"],
              ["reports", "Reports"],
              ["strategy", "Strategy"],
              ["audit", "Audit"],
            ].map(([v, label]) => (
              <TabsTrigger
                key={v}
                value={v}
                data-testid={`tab-${v}`}
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-cobalt data-[state=active]:text-cobalt rounded-none pb-4 -mb-px text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <OverviewTab client={client} />
          </TabsContent>
          <TabsContent value="work" className="mt-8">
            <WorkLogsTab client={client} />
          </TabsContent>
          <TabsContent value="vault" className="mt-8">
            <VaultTab client={client} />
          </TabsContent>
          <TabsContent value="gsc" className="mt-8">
            <GSCTab client={client} />
          </TabsContent>
          <TabsContent value="performance" className="mt-8">
            <PerformanceTab client={client} />
          </TabsContent>
          <TabsContent value="intelligence" className="mt-8">
            <IntelligenceTab client={client} />
          </TabsContent>
          <TabsContent value="reports" className="mt-8">
            <ReportsTab client={client} />
          </TabsContent>
          <TabsContent value="strategy" className="mt-8">
            <StrategyTab client={client} />
          </TabsContent>
          <TabsContent value="audit" className="mt-8">
            <AuditTab client={client} />
          </TabsContent>
        </Tabs>
      </main>

      <ClientForm
        open={editOpen}
        onOpenChange={setEditOpen}
        initial={client}
        onSubmit={handleEdit}
        submitting={submitting}
      />

      <AlertDialog open={confirmDelete} onOpenChange={setConfirmDelete}>
        <AlertDialogContent className="rounded-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading">Delete this client?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove <span className="font-semibold">{client.name}</span> and all their
              blogs, backlinks and vault files. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-sm">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              data-testid="confirm-delete-client"
              className="rounded-sm bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
