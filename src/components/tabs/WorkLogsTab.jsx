import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
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
import { listBlogs, createBlog, updateBlog, deleteBlog, getBacklinks, setBacklinksManual, syncBacklinksSheet } from "@/lib/api";
import { Plus, ExternalLink, Trash2, RefreshCw, FileText, Link as LinkIcon, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const STATUSES = ["draft", "submitted", "published", "indexed"];
const STATUS_TONES = {
  draft: "bg-zinc-100 text-zinc-700 border-zinc-200",
  submitted: "bg-amber-50 text-amber-800 border-amber-200",
  published: "bg-emerald-50 text-emerald-800 border-emerald-200",
  indexed: "bg-blue-50 text-blue-800 border-blue-200",
};

export default function WorkLogsTab({ client }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-testid="worklogs-tab">
      <BlogsPanel client={client} />
      <BacklinksPanel client={client} />
    </div>
  );
}

function BlogsPanel({ client }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setBlogs(await listBlogs(client.client_id));
      } finally {
        setLoading(false);
      }
    })();
  }, [client.client_id]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Enter a blog URL");
      return;
    }
    setSubmitting(true);
    try {
      const b = await createBlog(client.client_id, url.trim());
      setBlogs((p) => [b, ...p]);
      setUrl("");
      if (b.fetch_error) {
        toast.warning(`Logged, but title fetch failed: ${b.fetch_error}`);
      } else {
        toast.success(`Logged: ${b.title || b.url}`);
      }
    } catch (e) {
      const detail = e?.response?.data?.detail || "Failed to log blog";
      if (e?.response?.status === 409) {
        toast.error("Duplicate URL — already logged for this client");
      } else {
        toast.error(detail);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleStatus = async (b, s) => {
    try {
      const upd = await updateBlog(client.client_id, b.blog_id, { status: s });
      setBlogs((p) => p.map((x) => (x.blog_id === b.blog_id ? upd : x)));
    } catch {
      toast.error("Update failed");
    }
  };

  const handleDelete = async (b) => {
    try {
      await deleteBlog(client.client_id, b.blog_id);
      setBlogs((p) => p.filter((x) => x.blog_id !== b.blog_id));
    } catch {
      toast.error("Delete failed");
    }
  };

  const pct = client.blog_target ? Math.min(100, (blogs.length / client.blog_target) * 100) : 0;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="blogs-panel">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <FileText className="h-3.5 w-3.5" /> Blogs
        </div>
        <span className="font-heading font-bold text-sm text-zinc-900">
          {blogs.length} / {client.blog_target}
        </span>
      </div>
      <Progress value={pct} className="mt-3 h-1 rounded-none bg-zinc-100" />

      <form onSubmit={handleAdd} className="mt-6 flex gap-2">
        <Input
          data-testid="blog-url-input"
          placeholder="https://example.com/blog/post"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
        />
        <Button
          type="submit"
          disabled={submitting}
          data-testid="add-blog-button"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white"
        >
          <Plus className="h-4 w-4 mr-1" /> {submitting ? "…" : "Log"}
        </Button>
      </form>

      <div className="mt-6 max-h-[480px] overflow-auto scrollbar-thin">
        {loading ? (
          <Skeleton className="h-32 rounded-sm" />
        ) : blogs.length === 0 ? (
          <div className="py-12 text-center text-sm text-zinc-500">
            No blogs logged yet. Paste a URL above to start.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-200">
                <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Title / URL</TableHead>
                <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 w-36">Status</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((b) => (
                <TableRow key={b.blog_id} className="border-zinc-100 hover:bg-zinc-50" data-testid={`blog-row-${b.blog_id}`}>
                  <TableCell className="py-3">
                    <div className="font-medium text-sm text-zinc-900 truncate max-w-[260px]">
                      {b.title || <span className="text-zinc-400 italic">Untitled</span>}
                    </div>
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 flex items-center gap-1 text-[11px] text-zinc-500 hover:text-cobalt truncate max-w-[260px]"
                    >
                      <ExternalLink className="h-3 w-3 shrink-0" />
                      <span className="truncate">{b.url}</span>
                    </a>
                    {b.fetch_error && (
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-700">
                        <AlertCircle className="h-3 w-3" /> {b.fetch_error}
                      </div>
                    )}
                    {(b.logged_by_name || b.created_at) && (
                      <div className="mt-1 text-[10px] text-zinc-400 font-mono">
                        {b.logged_by_name && <>by {b.logged_by_name} · </>}
                        {b.created_at && new Date(b.created_at).toLocaleDateString()}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Select value={b.status} onValueChange={(s) => handleStatus(b, s)}>
                      <SelectTrigger
                        data-testid={`blog-status-${b.blog_id}`}
                        className={`h-8 rounded-sm text-xs border ${STATUS_TONES[b.status] || ""}`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUSES.map((s) => (
                          <SelectItem key={s} value={s} className="text-xs capitalize">
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(b)}
                      data-testid={`blog-delete-${b.blog_id}`}
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
      </div>
    </Card>
  );
}

function BacklinksPanel({ client }) {
  const [data, setData] = useState({ count: 0, source: "manual", sample_rows: [], updated_at: null });
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const d = await getBacklinks(client.client_id);
        setData(d);
        setCount(d.count || 0);
      } finally {
        setLoading(false);
      }
    })();
  }, [client.client_id]);

  const saveManual = async () => {
    setBusy(true);
    try {
      const d = await setBacklinksManual(client.client_id, Number(count) || 0);
      setData(d);
      toast.success("Backlinks updated");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Update failed");
    } finally {
      setBusy(false);
    }
  };

  const syncSheet = async () => {
    if (!client.backlinks_sheet_url) {
      toast.error("No backlinks sheet URL configured. Edit client first.");
      return;
    }
    setBusy(true);
    try {
      const d = await syncBacklinksSheet(client.client_id);
      setData(d);
      setCount(d.count);
      toast.success(`Synced ${d.count} rows from sheet`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Sync failed");
    } finally {
      setBusy(false);
    }
  };

  const pct = client.backlink_target ? Math.min(100, (data.count / client.backlink_target) * 100) : 0;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="backlinks-panel">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <LinkIcon className="h-3.5 w-3.5" /> Backlinks
        </div>
        <span className="font-heading font-bold text-sm text-zinc-900">
          {data.count} / {client.backlink_target}
        </span>
      </div>
      <Progress value={pct} className="mt-3 h-1 rounded-none bg-zinc-100" />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-2 items-end">
        <div>
          <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Manual count
          </Label>
          <Input
            type="number"
            min={0}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            data-testid="backlinks-count-input"
            className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
          />
        </div>
        <Button
          onClick={saveManual}
          disabled={busy}
          data-testid="backlinks-save-button"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-10"
        >
          Save
        </Button>
        <Button
          onClick={syncSheet}
          disabled={busy || !client.backlinks_sheet_url}
          data-testid="backlinks-sync-button"
          variant="outline"
          className="rounded-sm border-zinc-200 h-10"
        >
          <RefreshCw className={`h-4 w-4 mr-1.5 ${busy ? "animate-spin" : ""}`} /> Sync sheet
        </Button>
      </div>

      <div className="mt-3 text-[11px] text-zinc-500">
        Source:{" "}
        <Badge
          variant="outline"
          className="border-zinc-200 rounded-sm text-[10px] uppercase tracking-wider font-mono"
          data-testid="backlinks-source"
        >
          {data.source}
        </Badge>
        {data.updated_by_name && <span className="ml-2">by {data.updated_by_name}</span>}
        {data.updated_at && <span className="ml-2 font-mono">{new Date(data.updated_at).toLocaleString()}</span>}
      </div>

      {data.sample_rows?.length > 0 && (
        <div className="mt-6">
          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold mb-2">
            Sheet preview · first 5 rows
          </div>
          <div className="border border-zinc-200 rounded-sm overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-200">
                  {Object.keys(data.sample_rows[0]).slice(0, 4).map((k) => (
                    <TableHead key={k} className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {k}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.sample_rows.map((row, i) => (
                  <TableRow key={i} className="border-zinc-100">
                    {Object.keys(data.sample_rows[0]).slice(0, 4).map((k) => (
                      <TableCell key={k} className="py-2 text-xs text-zinc-700 truncate max-w-[180px]">
                        {row[k]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {loading && <Skeleton className="h-20 mt-4 rounded-sm" />}
    </Card>
  );
}
