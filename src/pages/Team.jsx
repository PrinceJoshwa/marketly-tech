import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "@/components/TopNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { listTeam, inviteTeam, revokeInvite, removeMember, getMe } from "@/lib/api";
import { Mail, Trash2, ShieldCheck, UserPlus } from "lucide-react";
import { toast } from "sonner";

export default function Team() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [data, setData] = useState({ members: [], invites: [] });
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("team_member");
  const [busy, setBusy] = useState(false);
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        setUser(me);
        if (me.role !== "admin") {
          toast.error("Admin access required");
          navigate("/admin/dashboard", { replace: true });
          return;
        }
        const t = await listTeam();
        setData(t);
      } catch {
        toast.error("Failed to load team");
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleInvite = async (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }
    setBusy(true);
    try {
      const r = await inviteTeam(email.trim().toLowerCase(), role);
      setData((p) => ({ ...p, invites: [r.invite, ...p.invites] }));
      setEmail("");
      toast.success(`Invited ${r.invite.email}`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Invite failed");
    } finally {
      setBusy(false);
    }
  };

  const handleRevoke = async (em) => {
    try {
      await revokeInvite(em);
      setData((p) => ({ ...p, invites: p.invites.filter((i) => i.email !== em) }));
      toast.success("Invite revoked");
    } catch {
      toast.error("Failed to revoke");
    }
  };

  const handleRemove = async () => {
    if (!confirm) return;
    try {
      await removeMember(confirm.user_id);
      setData((p) => ({ ...p, members: p.members.filter((m) => m.user_id !== confirm.user_id) }));
      toast.success(`${confirm.name} removed`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Remove failed");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div data-testid="team-page">
      <TopNav user={user} breadcrumbs={[{ label: "Team" }]} />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="border-b border-zinc-200 pb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Workspace · Marketly
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-black tracking-tighter text-zinc-950 leading-none">
            Team
          </h1>
          <p className="mt-3 text-sm text-zinc-600 max-w-xl leading-relaxed">
            Invite Marketly team members. Admins can create, edit and delete clients.
            Team members can log work and upload to the vault.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none lg:col-span-1 h-fit">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              <UserPlus className="h-3.5 w-3.5" /> Invite member
            </div>
            <form onSubmit={handleInvite} className="mt-5 space-y-4">
              <div>
                <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                  Email
                </Label>
                <Input
                  type="email"
                  data-testid="invite-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="teammate@marketly.tech"
                  className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
                />
              </div>
              <div>
                <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                  Role
                </Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger data-testid="invite-role" className="mt-2 rounded-sm border-zinc-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="team_member">Team member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                disabled={busy}
                data-testid="invite-submit"
                className="w-full rounded-sm bg-zinc-950 hover:bg-cobalt text-white"
              >
                Send invite
              </Button>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Invitee will be granted access once they sign in with this Google email.
              </p>
            </form>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Members · {data.members.length}
              </div>
              {loading ? (
                <Skeleton className="h-32 m-6 rounded-sm" />
              ) : data.members.length === 0 ? (
                <div className="p-8 text-sm text-zinc-500">No members yet.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow className="bg-zinc-50 border-zinc-200 hover:bg-zinc-50">
                      <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Name</TableHead>
                      <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Role</TableHead>
                      <TableHead className="w-12" />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.members.map((m) => (
                      <TableRow key={m.user_id} className="border-zinc-100 hover:bg-zinc-50" data-testid={`member-${m.user_id}`}>
                        <TableCell className="py-3">
                          <div className="font-medium text-sm text-zinc-900">{m.name}</div>
                          <div className="text-[11px] text-zinc-500 font-mono">{m.email}</div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`rounded-sm text-[10px] uppercase tracking-wider font-mono ${
                              m.role === "admin"
                                ? "border-cobalt text-cobalt bg-blue-50"
                                : "border-zinc-200 text-zinc-700"
                            }`}
                          >
                            {m.role === "admin" && <ShieldCheck className="h-3 w-3 mr-1" />}
                            {m.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {m.user_id !== user?.user_id && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setConfirm(m)}
                              data-testid={`remove-${m.user_id}`}
                              className="h-8 w-8 text-zinc-400 hover:text-red-600"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Card>

            <Card className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Pending invites · {data.invites.length}
              </div>
              {data.invites.length === 0 ? (
                <div className="p-8 text-sm text-zinc-500">No pending invites.</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow className="bg-zinc-50 border-zinc-200 hover:bg-zinc-50">
                      <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Email</TableHead>
                      <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Role</TableHead>
                      <TableHead className="w-12" />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.invites.map((i) => (
                      <TableRow key={i.email} className="border-zinc-100 hover:bg-zinc-50" data-testid={`invite-${i.email}`}>
                        <TableCell className="py-3">
                          <div className="flex items-center gap-2 text-sm text-zinc-900 font-mono">
                            <Mail className="h-3.5 w-3.5 text-zinc-400" /> {i.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="rounded-sm text-[10px] uppercase tracking-wider font-mono border-zinc-200">
                            {i.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRevoke(i.email)}
                            data-testid={`revoke-${i.email}`}
                            className="h-8 w-8 text-zinc-400 hover:text-red-600"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Card>
          </div>
        </div>
      </main>

      <AlertDialog open={!!confirm} onOpenChange={(o) => !o && setConfirm(null)}>
        <AlertDialogContent className="rounded-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading">Remove team member?</AlertDialogTitle>
            <AlertDialogDescription>
              Remove <span className="font-semibold">{confirm?.name}</span> from the workspace.
              They will lose access immediately.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-sm">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleRemove}
              data-testid="confirm-remove-member"
              className="rounded-sm bg-red-600 hover:bg-red-700"
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
