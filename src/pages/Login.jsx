import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getMe } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, BarChart3, Database, ShieldCheck, Sparkles, KeyRound } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const u = await getMe();
        if (u) navigate("/admin/dashboard", { replace: true, state: { user: u } });
      } catch {
        // not authed
      } finally {
        setChecking(false);
      }
    })();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }
    setSubmitting(true);
    try {
      const user = await login(email.trim(), password);
      toast.success(`Signed in as ${user.name}`);
      navigate("/admin/dashboard", { replace: true, state: { user } });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = typeof detail === "string" ? detail : "Sign-in failed";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="font-heading text-sm tracking-widest uppercase text-zinc-400">Loading…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white" data-testid="login-page">
      {/* LEFT — pitch panel */}
      <div className="lg:col-span-7 relative border-r border-zinc-200 grid-bg overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 py-10 flex flex-col h-full">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 bg-zinc-950 grid place-items-center">
              <span className="text-white font-heading font-black text-sm">M</span>
            </div>
            <span className="font-heading font-bold tracking-tight text-zinc-900">Marketly</span>
            <span className="ml-1 text-xs uppercase tracking-widest text-zinc-400 font-semibold">/ Agency OS</span>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-2xl mt-16 lg:mt-0">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6">
              Phases 0 — 3 · Internal · Test mode
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tighter leading-[0.95] text-zinc-950">
              The internal <br />
              control room <br />
              <span className="text-cobalt">for Marketly.</span>
            </h1>
            <p className="mt-8 text-base text-zinc-600 max-w-xl leading-relaxed">
              One workspace for the team to track client work, monitor performance and ship monthly reports.
              Blogs, backlinks, ranking proof and Search Console — all tied to the right client, on time.
            </p>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {[
                { icon: Database, label: "Client Command Center" },
                { icon: BarChart3, label: "Live Search Console" },
                { icon: ShieldCheck, label: "Verification Vault" },
                { icon: Sparkles, label: "Sheet-synced Backlinks" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-zinc-700">
                  <span className="h-8 w-8 grid place-items-center bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs text-zinc-400 font-mono mt-10">
            v0.2 · single workspace · phases 0–3
          </div>
        </div>
      </div>

      {/* RIGHT — sign in panel */}
      <div className="lg:col-span-5 px-8 sm:px-12 lg:px-16 py-10 flex flex-col">
        <div className="flex justify-end">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Sign in</span>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-zinc-950">
            Welcome back.
          </h2>
          <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
            Sign in to the Marketly workspace.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4" data-testid="login-form">
            <div>
              <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                Email
              </Label>
              <Input
                data-testid="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@marketly.tech"
                autoComplete="email"
                className="mt-2 h-11 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
              />
            </div>
            <div>
              <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                Password
              </Label>
              <Input
                data-testid="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="mt-2 h-11 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
              />
            </div>

            {error && (
              <div data-testid="login-error" className="text-sm text-red-600 border border-red-200 bg-red-50 px-3 py-2 rounded-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={submitting}
              data-testid="login-submit"
              className="h-12 w-full bg-zinc-950 hover:bg-cobalt hover:text-white text-white font-semibold text-sm rounded-sm justify-between px-5 group"
            >
              <span className="flex items-center gap-3">
                <KeyRound className="h-4 w-4" />
                {submitting ? "Signing in…" : "Sign in"}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>

        <div className="text-xs text-zinc-400 font-mono mt-8">
          test login · session cookies · 7-day expiry
        </div>
      </div>
    </div>
  );
}
