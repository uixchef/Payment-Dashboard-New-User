import Image from "next/image";
import { CirclePlay, Play, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const demoImageSrc =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=380&fit=crop&q=80";

const demoCtaClass =
  "h-auto gap-2 rounded border-[#d0d5dd] bg-white px-2.5 py-1.5 text-base font-semibold leading-6 text-[#475467] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-slate-50";

/** Figma node 502:13532 — Read documentation (share-04 + Text md/Semibold) */
const readDocsLinkClass =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] border border-solid border-[#d0d5dd] bg-white px-[10px] py-[6px] text-base font-semibold leading-6 text-[#475467] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004eeb]/40 focus-visible:ring-offset-2";

/** Figma: Payments-Landing-Page — node 502:13522 (Welcome to payments) */
export function PaymentsWelcomeSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "flex w-full flex-col overflow-hidden rounded bg-[#f2f4f7] lg:flex-row lg:items-stretch lg:justify-between",
        className
      )}
      aria-labelledby="payments-welcome-heading"
    >
      <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-6 p-6">
        <div className="flex flex-col gap-3">
          <h2
            id="payments-welcome-heading"
            className="text-[30px] font-semibold leading-[38px] tracking-normal text-[#101828]"
          >
            Welcome to payments
          </h2>
          <p className="text-sm font-normal leading-5 text-[#475467]">
            Set up once and go. We&apos;ll show you how to configure payments,
            route approvals, and launch faster so you can focus on revenue, not
            admin.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className={demoCtaClass}
            asChild
          >
            <a href="#" className="inline-flex items-center gap-2">
              <CirclePlay className="size-4 shrink-0" strokeWidth={2} aria-hidden />
              Watch the 3-minute demo
            </a>
          </Button>
          <a href="#" className={readDocsLinkClass}>
            <Share2 className="size-4 shrink-0" strokeWidth={2} aria-hidden />
            Read documentation
          </a>
        </div>
      </div>

      <div className="relative h-[190px] w-full shrink-0 overflow-hidden lg:w-[349px]">
        <Image
          src={demoImageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 349px"
          priority
        />
        <div
          className="absolute inset-0 bg-[rgba(18,18,18,0.5)]"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="outline-none transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Play demo video"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-white/95 shadow-md">
              <Play
                className="size-7 translate-x-0.5 fill-[#101828] text-[#101828]"
                strokeWidth={0}
                aria-hidden
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
