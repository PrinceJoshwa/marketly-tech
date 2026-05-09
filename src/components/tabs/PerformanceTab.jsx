import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
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
import { ga4Data, ga4Connect, adsData, adsConnect, metaData, metaConnect, getMe } from "@/lib/api";
import GoogleConnectCard from "@/components/GoogleConnectCard";
import MetaConnectCard from "@/components/MetaConnectCard";
import { BarChart3, Plug, Megaphone, Activity, Info, Users, Eye, MousePointerClick, Heart, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const RANGES = [
  { v: 7, label: "7d" },
  { v: 28, label: "28d" },
  { v: 90, label: "90d" },
];

export default function PerformanceTab({ client }) {
  const [days, setDays] = useState(28);
  const [user, setUser] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => { getMe().then(setUser).catch(() => {}); }, []);
  const bump = () => setRefreshKey((k) => k + 1);
  return (
    <div className="space-y-6" data-testid="performance-tab">
      <GoogleConnectCard client={client} isAdmin={user?.role === "admin"} onChange={bump} />
      <MetaConnectCard client={client} isAdmin={user?.role === "admin"} onChange={bump} />

      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Multi-source performance · {client.client_id}
        </div>
        <Select value={String(days)} onValueChange={(v) => setDays(Number(v))}>
          <SelectTrigger className="w-32 rounded-sm border-zinc-200" data-testid="perf-range">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {RANGES.map((r) => <SelectItem key={r.v} value={String(r.v)}>Last {r.label}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <GA4Card client={client} days={days} refreshKey={refreshKey} />
      <AdsCard client={client} days={days} />
      <MetaCard client={client} days={days} />
    </div>
  );
}

function MockedBanner({ source, onConnect, connecting, customMessage }) {
  return (
    <div className="border border-amber-200 bg-amber-50 rounded-sm px-4 py-3 flex items-start gap-3">
      <Info className="h-4 w-4 text-amber-700 mt-0.5 shrink-0" />
      <div className="flex-1 min-w-0 text-sm text-amber-900">
        <span className="font-semibold">Sample {source} data shown.</span> {customMessage || "Connect OAuth above to pull live metrics."}
      </div>
      {onConnect && (
        <Button
          variant="outline"
          size="sm"
          onClick={onConnect}
          disabled={connecting}
          data-testid={`${source.toLowerCase()}-connect-button`}
          className="rounded-sm border-amber-300 bg-white hover:bg-amber-100"
        >
          <Plug className="h-3.5 w-3.5 mr-1.5" /> {connecting ? "…" : "Why?"}
        </Button>
      )}
    </div>
  );
}

function StatGrid({ items, loading }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((it) => (
        <Card key={it.label} className="rounded-sm border-zinc-200 bg-white p-4 shadow-none">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 flex items-center gap-1.5">
            {it.icon && <it.icon className="h-3 w-3" />} {it.label}
          </div>
          <div className="mt-2 font-heading font-black text-2xl tracking-tighter text-zinc-950">
            {loading ? "—" : it.value}
          </div>
          {it.sub && <div className="mt-0.5 text-[10px] text-zinc-400 font-mono">{it.sub}</div>}
        </Card>
      ))}
    </div>
  );
}

function GA4Card({ client, days, refreshKey }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    setLoading(true);
    ga4Data(client.client_id, days).then(setData).finally(() => setLoading(false));
  }, [client.client_id, days, refreshKey]);

  const handleConnect = async () => {
    setConnecting(true);
    try {
      const r = await ga4Connect(client.client_id);
      toast.message(r.ready_for_oauth ? "OAuth ready" : "OAuth not configured", { description: r.message, duration: 6500 });
    } finally {
      setConnecting(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="ga4-card">
      <SectionHeader icon={BarChart3} title="Google Analytics 4" subtitle="Sessions · users · top pages" />
      {data && !data.is_mocked && (
        <div className="mt-4 border border-emerald-200 bg-emerald-50 rounded-sm px-4 py-2 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-700" />
          <span className="text-sm text-emerald-900">Live from <span className="font-mono text-xs">{data.property}</span></span>
        </div>
      )}
      {data?.is_mocked && <div className="mt-4"><MockedBanner source="GA4" onConnect={handleConnect} connecting={connecting} /></div>}
      <div className="mt-5">
        <StatGrid loading={loading} items={[
          { label: "Sessions", value: fmt(data?.sessions), icon: Activity },
          { label: "Users", value: fmt(data?.users), icon: Users },
          { label: "Page views", value: fmt(data?.page_views), icon: Eye },
          { label: "Bounce rate", value: data ? `${data.bounce_rate}%` : "—" },
        ]} />
      </div>
      {!loading && data && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SmallTable
            title="Top sources"
            head={["Source", "Sessions"]}
            rows={data.top_sources.map((s) => [s.name, fmt(s.sessions)])}
            testid="ga4-top-sources"
          />
          <SmallTable
            title="Top pages"
            head={["Path", "Sessions", "Users"]}
            rows={data.top_pages.map((p) => [p.path, fmt(p.sessions), fmt(p.users)])}
            testid="ga4-top-pages"
          />
        </div>
      )}
      {loading && <Skeleton className="mt-4 h-32 rounded-sm" />}
    </Card>
  );
}

function AdsCard({ client, days }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    setLoading(true);
    adsData(client.client_id, days).then(setData).finally(() => setLoading(false));
  }, [client.client_id, days]);

  const handleConnect = async () => {
    setConnecting(true);
    try {
      const r = await adsConnect(client.client_id);
      toast.message(r.ready_for_oauth ? "OAuth ready" : "OAuth not configured", { description: r.message, duration: 8500 });
    } finally {
      setConnecting(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="ads-card">
      <SectionHeader icon={MousePointerClick} title="Google Ads" subtitle="Spend · clicks · conversions" />
      {data && !data.is_mocked && (
        <div className="mt-4 border border-emerald-200 bg-emerald-50 rounded-sm px-4 py-2 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-700" />
          <span className="text-sm text-emerald-900">Live from customer <span className="font-mono text-xs">{data.customer_id}</span></span>
        </div>
      )}
      {data?.is_mocked && (
        <div className="mt-4">
          <MockedBanner
            source="Ads"
            onConnect={handleConnect}
            connecting={connecting}
            customMessage="Pick a Google Ads customer in the Google card above. If you've already linked one, your developer token may still be Test-tier — apply for Basic Access at ads.google.com/aw/apicenter."
          />
        </div>
      )}
      <div className="mt-5">
        <StatGrid loading={loading} items={[
          { label: "Impressions", value: fmt(data?.impressions) },
          { label: "Clicks", value: fmt(data?.clicks) },
          { label: "Cost", value: data ? `${data.currency} ${fmt(Math.round(data.cost))}` : "—" },
          { label: "Conversions", value: fmt(data?.conversions), sub: data ? `CPA ${data.currency} ${fmt(Math.round(data.cost_per_conversion))}` : "" },
        ]} />
      </div>
      {!loading && data && (
        <div className="mt-6">
          <SmallTable
            title="Top campaigns"
            head={["Campaign", "Impr", "Clicks", "Conv"]}
            rows={data.top_campaigns.map((c) => [c.name, fmt(c.impressions), fmt(c.clicks), fmt(c.conversions)])}
            testid="ads-campaigns"
          />
        </div>
      )}
      {loading && <Skeleton className="mt-4 h-32 rounded-sm" />}
    </Card>
  );
}

function MetaCard({ client, days }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    setLoading(true);
    metaData(client.client_id, days).then(setData).finally(() => setLoading(false));
  }, [client.client_id, days]);

  const handleConnect = async () => {
    setConnecting(true);
    try {
      const r = await metaConnect(client.client_id);
      toast.message(r.ready_for_oauth ? "OAuth ready" : "OAuth not configured", { description: r.message, duration: 6500 });
    } finally {
      setConnecting(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="meta-card">
      <SectionHeader icon={Megaphone} title="Meta · Facebook & Instagram" subtitle="Reach · engagement · top posts" />
      {data && !data.is_mocked && (
        <div className="mt-4 border border-emerald-200 bg-emerald-50 rounded-sm px-4 py-2 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-700" />
          <span className="text-sm text-emerald-900">Live from page <span className="font-mono text-xs">{data.page_name || data.page_id}</span>{data.ig_username ? <> · IG @<span className="font-mono text-xs">{data.ig_username}</span></> : null}</span>
        </div>
      )}
      {data?.is_mocked && (
        <div className="mt-4">
          <MockedBanner
            source="Meta"
            onConnect={handleConnect}
            connecting={connecting}
            customMessage="Click 'Connect Meta' on the card above to authorize Facebook and pick a Page."
          />
        </div>
      )}
      <div className="mt-5">
        <StatGrid loading={loading} items={[
          { label: "Reach", value: fmt(data?.reach) },
          { label: "Engagement", value: fmt(data?.engagement), icon: Heart, sub: data ? `${data.engagement_rate}% rate` : "" },
          { label: "Followers", value: fmt(data?.followers) },
          { label: "Growth", value: data ? (data.follower_growth >= 0 ? `+${fmt(data.follower_growth)}` : fmt(data.follower_growth)) : "—" },
        ]} />
      </div>
      {!loading && data && (
        <div className="mt-6">
          <SmallTable
            title="Top posts"
            head={["Caption", "Type", "Reach", "Eng"]}
            rows={data.top_posts.map((p) => [p.caption, p.type, fmt(p.reach), fmt(p.engagement)])}
            testid="meta-posts"
          />
        </div>
      )}
      {loading && <Skeleton className="mt-4 h-32 rounded-sm" />}
    </Card>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <Icon className="h-3.5 w-3.5" /> {title}
        </div>
        {subtitle && <div className="mt-1 text-[11px] text-zinc-500">{subtitle}</div>}
      </div>
    </div>
  );
}

function SmallTable({ title, head, rows, testid }) {
  return (
    <div className="border border-zinc-200 rounded-sm overflow-hidden" data-testid={testid}>
      <div className="px-3 py-2 border-b border-zinc-100 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 bg-zinc-50">
        {title}
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-zinc-200 hover:bg-transparent">
            {head.map((h, i) => (
              <TableHead key={h} className={`text-[10px] uppercase tracking-widest text-zinc-500 ${i > 0 ? "text-right" : ""}`}>{h}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i} className="border-zinc-100 hover:bg-zinc-50">
              {r.map((c, j) => (
                <TableCell key={j} className={`py-2 text-xs ${j === 0 ? "font-medium text-zinc-900 truncate max-w-[260px]" : "text-right font-mono text-zinc-700"}`}>{c}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function fmt(n) {
  if (n == null) return "—";
  return Number(n).toLocaleString();
}
