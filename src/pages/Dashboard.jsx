import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "@/components/TopNav";
import ClientForm from "@/components/ClientForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { listClients, createClient, getMe } from "@/lib/api";
import { Plus, ArrowRight, Globe, FileText, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [u, c] = await Promise.all([getMe(), listClients()]);
        setUser(u);
        setClients(c);
      } catch (e) {
        toast.error("Failed to load workspace");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleCreate = async (payload) => {
    setSubmitting(true);
    try {
      const c = await createClient(payload);
      setClients((p) => [c, ...p]);
      setOpen(false);
      toast.success(`Client ${c.client_id} created`);
      navigate(`/admin/clients/${c.client_id}`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Failed to create client");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="dashboard-page">
      <TopNav user={user} />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-zinc-200 pb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Marketly · {user?.email}
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-black tracking-tighter text-zinc-950 leading-none">
              Clients
            </h1>
            <p className="mt-3 text-sm text-zinc-600 max-w-xl leading-relaxed">
              Every Marketly client. Performance, work logs and verification proof — in one place.
            </p>
          </div>
          {user?.role === "admin" && (
            <Button
              onClick={() => setOpen(true)}
              data-testid="new-client-button"
              className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-11 px-6 self-start sm:self-auto"
            >
              <Plus className="h-4 w-4 mr-2" /> New client
            </Button>
          )}
        </div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-sm" />
            ))}

          {!loading && clients.length === 0 && (
            <Card className="md:col-span-2 lg:col-span-3 rounded-sm border-zinc-200 bg-white p-12 text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                No clients yet
              </div>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-zinc-950">
                {user?.role === "admin" ? "Provision your first client." : "No clients to show yet."}
              </h2>
              <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">
                {user?.role === "admin"
                  ? "Add a client with their domain, Google Sheet links and monthly targets to start logging work."
                  : "Ask an admin to add a client. Once they do, you'll see them here."}
              </p>
              {user?.role === "admin" && (
                <Button
                  onClick={() => setOpen(true)}
                  data-testid="empty-new-client-button"
                  className="mt-6 rounded-sm bg-zinc-950 hover:bg-cobalt text-white"
                >
                  <Plus className="h-4 w-4 mr-2" /> New client
                </Button>
              )}
            </Card>
          )}

          {!loading &&
            clients.map((c, i) => (
              <Card
                key={c.client_id}
                data-testid={`client-card-${c.client_id}`}
                className="fade-up rounded-sm border-zinc-200 bg-white p-6 shadow-none hover:border-zinc-300 hover:shadow-sm transition-all cursor-pointer"
                style={{ animationDelay: `${i * 40}ms` }}
                onClick={() => navigate(`/admin/clients/${c.client_id}`)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      {c.client_id}
                    </div>
                    <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-zinc-950">
                      {c.name}
                    </h3>
                    {c.domain && (
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                        <Globe className="h-3 w-3" /> {c.domain}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-400" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-4">
                  <Stat icon={FileText} label="Blog target" value={`${c.blog_target}/mo`} />
                  <Stat icon={LinkIcon} label="Backlink target" value={`${c.backlink_target}/mo`} />
                </div>
              </Card>
            ))}
        </div>
      </main>

      <ClientForm open={open} onOpenChange={setOpen} onSubmit={handleCreate} submitting={submitting} />
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <div className="mt-1 font-heading font-bold text-lg text-zinc-950">{value}</div>
    </div>
  );
}
