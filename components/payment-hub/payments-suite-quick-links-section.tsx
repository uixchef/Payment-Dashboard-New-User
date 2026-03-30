import { cn } from "@/lib/utils";

const cardShell =
  "flex min-h-0 min-w-0 w-full flex-col overflow-hidden rounded border border-[#d0d5dd] bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]";

/** Figma node 502:13096 — quick-link card illustration (thumb area) */
const thumbArea =
  "flex h-[100px] items-center justify-center bg-[#f2f4f7] px-4 py-0";

const thumbImageClass =
  "h-full w-full max-w-full object-contain object-center";

/** Public paths for 100px thumb art (indices align with `cards` order) */
const SUITE_THUMB_SRC: readonly string[] = [
  "/payment-hub/4.png",
  "/payment-hub/5.png",
  "/payment-hub/suite-thumb-2.png",
  "/payment-hub/suite-thumb-3.png",
  "/payment-hub/suite-thumb-4.png",
  "/payment-hub/suite-thumb-5.png",
  "/payment-hub/suite-thumb-6.png",
  "/payment-hub/suite-thumb-7.png",
];

/** Figma node 502:13154 — card “Header” (title + body) */
const cardHeaderClass =
  "flex w-full flex-col gap-0.5 px-4 py-3";
const cardHeaderBorderClass = "border-b border-[#eaecf0]";

/** Cards whose header block has no bottom divider (matches Figma / preview). */
const cardHeaderNoBottomBorder = new Set([
  "Transactions",
  "Payment integrations",
]);

const cards: { title: string; description: string }[] = [
  {
    title: "Invoices & estimates",
    description:
      "Smart invoicing with automated reminders and payment tracking.",
  },
  {
    title: "Payment links",
    description:
      "Instant payment collection for products, services, or donations.",
  },
  {
    title: "Orders",
    description: "End-to-end order processing and management.",
  },
  {
    title: "Subscriptions",
    description:
      "Automated billing with creation & management of subscriptions.",
  },
  {
    title: "Payment integrations",
    description:
      "Choose from a wide range of global payment providers",
  },
  {
    title: "Transactions",
    description:
      "Complete payment processing with a detailed view of all transactions.",
  },
  {
    title: "Payment settings",
    description:
      "Configure taxes, receipts, subscriptions, shipping and other payment settings.",
  },
  {
    title: "Products",
    description:
      "Product catalog, importing and inventory management",
  },
];

/** Figma: Payments-Landing-Page — node 502:13090 (Quick Links) */
export function PaymentsSuiteQuickLinksSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn("flex w-full flex-col gap-4", className)}
      aria-labelledby="payments-suite-quick-links-heading"
    >
      <h2
        id="payments-suite-quick-links-heading"
        className="text-base font-semibold leading-6 tracking-normal text-[#101828]"
      >
        A unified end-to-end payments suite
      </h2>

      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ title, description }, index) => (
          <article key={title} className={cardShell}>
            <div className={thumbArea} aria-hidden>
              <img
                src={SUITE_THUMB_SRC[index]}
                alt=""
                className={thumbImageClass}
              />
            </div>
            <div
              className={cn(
                cardHeaderClass,
                !cardHeaderNoBottomBorder.has(title) && cardHeaderBorderClass,
              )}
            >
              <h3 className="text-base font-medium leading-6 tracking-normal text-[#101828]">
                {title}
              </h3>
              <p className="text-sm font-normal leading-5 tracking-normal text-[#475467]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
