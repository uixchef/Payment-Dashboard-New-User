import Image from "next/image";
import {
  ArrowRight,
  CreditCard,
  Package,
  ShoppingCart,
} from "lucide-react";

import { cn } from "@/lib/utils";

const cardClass =
  "flex min-h-[200px] flex-row overflow-hidden rounded border border-[#d0d5dd] bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]";

const primaryCtaClass =
  "inline-flex w-fit shrink-0 self-start items-center gap-2 whitespace-nowrap rounded border border-[#84adff] bg-white px-2.5 py-1.5 text-base font-semibold leading-6 text-[#004eeb] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-colors hover:bg-blue-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004eeb]/30 focus-visible:ring-offset-2";

const disabledCtaClass =
  "inline-flex w-fit shrink-0 self-start cursor-not-allowed items-center gap-2 whitespace-nowrap rounded border border-[#b2ccff] bg-white px-2.5 py-1.5 text-base font-semibold leading-6 text-[#b2ccff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b2ccff]/40 focus-visible:ring-offset-2";

/** Default illustration gutter — right padding for cards 1 & 3; art sits on bottom edge */
const illustrationWrapClass =
  "relative flex min-h-[120px] flex-1 items-end justify-center overflow-hidden pl-4 pr-4 pt-4 pb-0 lg:min-h-0";

/** Card 2 (Create product): no right padding — Figma / browser tweak */
const illustrationWrapClassNoRightPadding =
  "relative flex min-h-[120px] flex-1 items-end justify-center overflow-hidden pl-4 pr-0 pt-4 pb-0 lg:min-h-0";

/** Figma: Payments-Landing-Page — node 264:28851 (Get Started) */
export function PaymentsGetStartedSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn(
        "flex w-full flex-col gap-4 pb-4 pt-8",
        className
      )}
      aria-labelledby="payments-get-started-heading"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h2
          id="payments-get-started-heading"
          className="text-base font-semibold leading-6 tracking-normal text-[#101828]"
        >
          Get started in 8 minutes or less
        </h2>
        <div
          className="flex h-5 min-w-[140px] max-w-[160px] flex-1 items-center justify-center rounded-full bg-[#eaecf0] px-1 sm:flex-initial"
          role="status"
          aria-label="Setup progress: 0 of 3 steps completed"
        >
          <span className="text-sm font-medium leading-5 text-[#101828]">
            0/3 completed
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Card 1 — Connect payment providers */}
        <article className={cardClass}>
          <div className="flex min-w-0 w-[200px] shrink-0 flex-col justify-between gap-4 p-4">
            <div className="flex flex-col gap-1">
              <span className="flex size-6 items-center justify-center text-[#101828]">
                <CreditCard className="size-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="text-base font-medium leading-6 text-[#101828]">
                Connect payment providers
              </h3>
              <p className="text-sm font-normal leading-5 text-[#475467]">
                Connect providers from diverse options.
              </p>
            </div>
            <a href="#" className={primaryCtaClass}>
              Connect provider
              <ArrowRight className="size-4 shrink-0" strokeWidth={2} aria-hidden />
            </a>
          </div>
          <div className={illustrationWrapClass}>
            <GetStartedIllustration
              src="/icons/get-started/1.svg"
              width={155}
              height={200}
              alt=""
            />
          </div>
        </article>

        {/* Card 2 — Create your first product */}
        <article className={cardClass}>
          <div className="flex min-w-0 w-[200px] shrink-0 flex-col justify-between gap-4 p-4">
            <div className="flex flex-col gap-1">
              <span className="flex size-6 items-center justify-center text-[#101828]">
                <Package className="size-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="text-base font-medium leading-6 text-[#101828]">
                Create your first product
              </h3>
              <p className="text-sm font-normal leading-5 text-[#475467]">
                Add a one-time or recurring product to start selling.
              </p>
            </div>
            <a href="#" className={primaryCtaClass}>
              Add product
              <ArrowRight className="size-4 shrink-0" strokeWidth={2} aria-hidden />
            </a>
          </div>
          <div className={illustrationWrapClassNoRightPadding}>
            <GetStartedIllustration
              src="/icons/get-started/2.svg"
              width={154}
              height={200}
              alt=""
            />
          </div>
        </article>

        {/* Card 3 — Configure sales channel */}
        <article className={cardClass}>
          <div className="flex min-w-0 w-[200px] shrink-0 flex-col justify-between gap-4 p-4">
            <div className="flex flex-col gap-1">
              <span className="flex size-6 items-center justify-center text-[#101828]">
                <ShoppingCart className="size-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="text-base font-medium leading-6 text-[#101828]">
                Configure sales channel
              </h3>
              <p className="text-sm font-normal leading-5 text-[#475467]">
                Set up &amp; share a checkout to start selling.
              </p>
            </div>
            <button type="button" disabled className={disabledCtaClass}>
              Start selling
              <ArrowRight className="size-4 shrink-0 opacity-80" strokeWidth={2} aria-hidden />
            </button>
          </div>
          <div className={illustrationWrapClass}>
            <GetStartedIllustration
              src="/icons/get-started/3.svg"
              width={155}
              height={200}
              alt=""
            />
          </div>
        </article>
      </div>
    </section>
  );
}

function GetStartedIllustration({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-auto max-h-[200px] w-full max-w-[min(100%,155px)] object-contain object-bottom"
      unoptimized
    />
  );
}
