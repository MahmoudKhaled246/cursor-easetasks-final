import { cn } from "@/lib/utils";

type MockupType = "website" | "webapp" | "custom" | "design";

interface ServiceMockupProps {
  type: MockupType;
  className?: string;
}

/** Abstract visual mockup panels matching the design screenshots */
export function ServiceMockup({ type, className }: ServiceMockupProps) {
  return (
    <div
      className={cn(
        "card-surface flex aspect-[4/3] items-center justify-center overflow-hidden p-6",
        className
      )}
    >
      {type === "website" && <WebsiteMockup />}
      {type === "webapp" && <WebAppMockup />}
      {type === "custom" && <CustomMockup />}
      {type === "design" && <DesignMockup />}
    </div>
  );
}

function WebsiteMockup() {
  return (
    <div className="flex h-full w-full gap-3">
      <div className="flex-1 rounded-lg bg-[#3a4a2a]/60" />
      <div className="w-1/4 space-y-2">
        <div className="h-full rounded-lg bg-white/5" />
      </div>
    </div>
  );
}

function WebAppMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex gap-2">
        <div className="h-8 flex-1 rounded bg-white/5" />
        <div className="h-8 w-16 rounded bg-accent/20" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        <div className="rounded bg-blue-900/30" />
        <div className="rounded bg-blue-900/20" />
        <div className="rounded bg-blue-900/30" />
      </div>
      <div className="h-12 rounded bg-white/5" />
    </div>
  );
}

function CustomMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-accent/40" />
        <div className="h-2 flex-1 rounded bg-white/10" />
      </div>
      <div className="flex flex-1 gap-3">
        <div className="w-1/3 space-y-2">
          <div className="h-6 rounded bg-white/5" />
          <div className="h-6 rounded bg-white/5" />
          <div className="h-6 rounded bg-accent/10" />
          <div className="h-6 rounded bg-white/5" />
        </div>
        <div className="flex-1 rounded-lg bg-purple-900/20 p-4">
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-3 h-16 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function DesignMockup() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-3">
      <div className="space-y-2">
        <div className="h-8 rounded bg-accent/20" />
        <div className="h-4 rounded bg-white/10" />
        <div className="h-4 w-2/3 rounded bg-white/10" />
        <div className="mt-4 h-20 rounded bg-pink-900/20" />
      </div>
      <div className="space-y-2">
        <div className="h-4 rounded bg-white/10" />
        <div className="h-4 w-3/4 rounded bg-white/10" />
        <div className="mt-2 grid grid-cols-3 gap-1">
          <div className="aspect-square rounded bg-accent/30" />
          <div className="aspect-square rounded bg-blue-400/30" />
          <div className="aspect-square rounded bg-purple-400/30" />
        </div>
        <div className="h-12 rounded bg-white/5" />
      </div>
    </div>
  );
}
