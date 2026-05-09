import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getMe } from "@/lib/api";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const [state, setState] = useState({ loading: true, authed: false, user: null });

  useEffect(() => {
    if (location.state?.user) {
      setState({ loading: false, authed: true, user: location.state.user });
      return;
    }
    let active = true;
    (async () => {
      try {
        const u = await getMe();
        if (active) setState({ loading: false, authed: true, user: u });
      } catch {
        if (active) setState({ loading: false, authed: false, user: null });
      }
    })();
    return () => {
      active = false;
    };
  }, [location.state]);

  if (state.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-testid="auth-loading">
        <div className="font-heading text-sm tracking-widest uppercase text-zinc-400">Loading workspace…</div>
      </div>
    );
  }
  if (!state.authed) return <Navigate to="/" replace />;
  return typeof children === "function" ? children(state.user) : children;
}
