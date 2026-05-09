import { useEffect, useRef, useState } from "react";
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
import { listVault, uploadVault, deleteVault, vaultFileUrl } from "@/lib/api";
import { Upload, Image as ImageIcon, Trash2, FileImage, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function VaultTab({ client }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState("screenshot");
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        setFiles(await listVault(client.client_id));
      } finally {
        setLoading(false);
      }
    })();
  }, [client.client_id]);

  const upload = async (file) => {
    setBusy(true);
    try {
      const f = await uploadVault(client.client_id, file, label || null, category);
      setFiles((p) => [f, ...p]);
      setLabel("");
      toast.success("Uploaded to vault");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Upload failed");
    } finally {
      setBusy(false);
    }
  };

  const onPick = (e) => {
    const f = e.target.files?.[0];
    if (f) upload(f);
    e.target.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f) upload(f);
  };

  const handleDelete = async (file) => {
    try {
      await deleteVault(client.client_id, file.file_id);
      setFiles((p) => p.filter((x) => x.file_id !== file.file_id));
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-testid="vault-tab">
      <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none lg:col-span-1 h-fit">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <ShieldCheck className="h-3.5 w-3.5" /> Upload proof
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
              Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="mt-2 rounded-sm border-zinc-200" data-testid="vault-category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="screenshot">Ranking Screenshot</SelectItem>
                <SelectItem value="poster">Poster / Creative</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
              Label (optional)
            </Label>
            <Input
              data-testid="vault-label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder='e.g. "Keyword X · position 3"'
              className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
            />
          </div>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragLeave={() => setDrag(false)}
            onDrop={onDrop}
            className={`border border-dashed border-zinc-300 p-8 text-center rounded-sm cursor-pointer transition-colors ${
              drag ? "dropzone-active" : "hover:border-zinc-500 hover:bg-zinc-50"
            }`}
            onClick={() => inputRef.current?.click()}
            data-testid="vault-dropzone"
          >
            <Upload className="h-5 w-5 mx-auto text-zinc-400" />
            <div className="mt-3 text-sm text-zinc-700 font-medium">Drop a file or click to browse</div>
            <div className="mt-1 text-[11px] text-zinc-500">PNG, JPG, PDF — anything verifiable</div>
            <input ref={inputRef} onChange={onPick} type="file" className="hidden" data-testid="vault-input" />
          </div>
          {busy && <div className="text-xs text-zinc-500">Uploading…</div>}
        </div>
      </Card>

      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Vault · {files.length} item{files.length === 1 ? "" : "s"}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-zinc-100 rounded-sm" />
            ))}
          </div>
        ) : files.length === 0 ? (
          <Card className="rounded-sm border-zinc-200 bg-white p-12 shadow-none text-center">
            <FileImage className="h-8 w-8 mx-auto text-zinc-300" />
            <div className="mt-4 font-heading text-xl font-bold tracking-tight text-zinc-950">
              Vault is empty
            </div>
            <div className="mt-2 text-sm text-zinc-500 max-w-sm mx-auto">
              Upload screenshots and posters here. Each file is tagged with{" "}
              <span className="font-mono">{client.client_id}</span> and the upload date.
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" data-testid="vault-grid">
            {files.map((f) => (
              <VaultCard key={f.file_id} file={f} onDelete={() => handleDelete(f)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function VaultCard({ file, onDelete }) {
  const isImage = (file.content_type || "").startsWith("image/");
  return (
    <Card
      className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden group fade-up"
      data-testid={`vault-card-${file.file_id}`}
    >
      <div className="aspect-[4/3] bg-zinc-50 grid place-items-center overflow-hidden">
        {isImage ? (
          <img
            src={vaultFileUrl(file.file_id)}
            alt={file.label || file.original_name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <ImageIcon className="h-8 w-8 text-zinc-300" />
        )}
      </div>
      <div className="p-3 border-t border-zinc-100">
        <div className="flex items-center justify-between gap-2">
          <Badge
            variant="outline"
            className="rounded-sm text-[9px] uppercase tracking-widest font-mono border-zinc-200"
          >
            {file.category}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            data-testid={`vault-delete-${file.file_id}`}
            className="h-7 w-7 text-zinc-400 hover:text-red-600"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="mt-2 text-xs font-medium text-zinc-900 truncate">
          {file.label || file.original_name}
        </div>
        <div className="mt-0.5 text-[10px] text-zinc-400 font-mono">
          {file.uploaded_by_name && <>{file.uploaded_by_name} · </>}
          {new Date(file.created_at).toLocaleDateString()} · {(file.size / 1024).toFixed(1)} KB
        </div>
      </div>
    </Card>
  );
}
