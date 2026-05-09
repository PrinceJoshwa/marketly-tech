import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { listBlogs, getBacklinks } from "@/lib/api";
import { ExternalLink, FileText, Link as LinkIcon, Sheet, Calendar } from "lucide-react";

export default function OverviewTab({ client }) {
  const [blogs, setBlogs] = useState([]);
  const [backlinks, setBacklinks] = useState({ count: 0, source: "manual" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [b, bl] = await Promise.all([listBlogs(client.client_id), getBacklinks(client.client_id)]);
        setBlogs(b);
        setBacklinks(bl);
      } finally {
        setLoading(false);
      }
    })();
  }, [client.client_id]);

  const blogCount = blogs.length;
  const blogPct = client.blog_target ? Math.min(100, (blogCount / client.blog_target) * 100) : 0;
  const backlinkPct = client.backlink_target
    ? Math.min(100, (backlinks.count / client.backlink_target) * 100)
    : 0;

  const links = [
    { label: "Backlinks Sheet", url: client.backlinks_sheet_url, icon: Sheet },
    { label: "Content Sheet", url: client.content_sheet_url, icon: Sheet },
    { label: "Competitors Sheet", url: client.competitors_sheet_url, icon: Sheet },
    { label: "Social Calendar", url: client.social_calendar_url, icon: Calendar },
  ].filter((l) => l.url);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="overview-tab">
      <ProgressCard
        title="Blogs this month"
        target={client.blog_target}
        current={blogCount}
        pct={blogPct}
        icon={FileText}
        suffix="published / drafted"
        loading={loading}
      />
      <ProgressCard
        title="Backlinks acquired"
        target={client.backlink_target}
        current={backlinks.count}
        pct={backlinkPct}
        icon={LinkIcon}
        suffix={backlinks.source === "sheet" ? "synced from sheet" : "manual count"}
        loading={loading}
      />

      <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none md:col-span-2">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Workspace links</div>
        {links.length === 0 ? (
          <div className="mt-4 text-sm text-zinc-500">No sheet links configured. Edit client to add.</div>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`overview-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between border border-zinc-200 p-4 hover:border-zinc-950 transition-colors rounded-sm"
              >
                <span className="flex items-center gap-3">
                  <l.icon className="h-4 w-4 text-zinc-500 group-hover:text-cobalt" />
                  <span className="text-sm font-medium text-zinc-900">{l.label}</span>
                </span>
                <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-cobalt" />
              </a>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function ProgressCard({ title, target, current, pct, icon: Icon, suffix, loading }) {
  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            <Icon className="h-3.5 w-3.5" /> {title}
          </div>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-heading font-black text-5xl tracking-tighter text-zinc-950" data-testid={`progress-current-${title}`}>
              {loading ? "—" : current}
            </span>
            <span className="text-zinc-400 font-heading font-bold text-2xl tracking-tight pb-1">
              / {target}
            </span>
          </div>
          <div className="mt-2 text-xs text-zinc-500">{suffix}</div>
        </div>
      </div>
      <Progress value={pct} className="mt-6 h-1 rounded-none bg-zinc-100" />
      <div className="mt-2 text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
        {Math.round(pct)}% of target
      </div>
    </Card>
  );
}
