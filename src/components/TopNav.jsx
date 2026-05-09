import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User as UserIcon, ChevronRight } from "lucide-react";
import { logout } from "@/lib/api";
import { toast } from "sonner";

export default function TopNav({ user, breadcrumbs = [] }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Signed out");
      navigate("/admin", { replace: true });
    } catch {
      toast.error("Logout failed");
    }
  };

  const initials = (user?.name || user?.email || "?")
    .split(/[\s.@]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  return (
    <header
      className="bg-white border-b border-zinc-200 h-16 px-6 flex items-center justify-between sticky top-0 z-40"
      data-testid="top-nav"
    >
      <div className="flex items-center gap-3">
        <Link to="/admin/dashboard" className="flex items-center gap-2" data-testid="nav-logo">
          <div className="h-7 w-7 bg-zinc-950 grid place-items-center">
            <span className="text-white font-heading font-black text-sm">M</span>
          </div>
          <span className="font-heading font-bold tracking-tight text-zinc-900">Marketly</span>
        </Link>
        {breadcrumbs.length > 0 && (
          <div className="hidden md:flex items-center gap-2 ml-6 text-sm text-zinc-500">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-zinc-300" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-zinc-900 transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-zinc-900 font-medium">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {user?.role === "admin" && (
          <Link
            to="/admin/team"
            data-testid="nav-team-link"
            className="hidden sm:inline text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 hover:text-cobalt transition-colors"
          >
            Team
          </Link>
        )}
        {user?.role && (
          <span
            data-testid="role-badge"
            className={`hidden md:inline rounded-sm border px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest ${
              user.role === "admin" ? "border-cobalt text-cobalt bg-blue-50" : "border-zinc-200 text-zinc-600"
            }`}
          >
            {user.role}
          </span>
        )}
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
          {user?.name || user?.email}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild data-testid="user-menu-trigger">
            <button className="rounded-sm focus:outline-none focus:ring-2 focus:ring-zinc-950">
              <Avatar className="h-9 w-9 rounded-sm">
                <AvatarImage src={user?.picture} alt={user?.name} />
                <AvatarFallback className="rounded-sm bg-zinc-950 text-white text-xs font-bold font-heading">
                  {initials || "U"}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-sm w-56">
            <DropdownMenuLabel className="text-xs uppercase tracking-wider text-zinc-500">
              Signed in
            </DropdownMenuLabel>
            <DropdownMenuItem disabled className="text-sm text-zinc-700">
              <UserIcon className="h-4 w-4 mr-2" /> {user?.email}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              data-testid="logout-button"
              onClick={handleLogout}
              className="text-sm text-zinc-700 cursor-pointer"
            >
              <LogOut className="h-4 w-4 mr-2" /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
