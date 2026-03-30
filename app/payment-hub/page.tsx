import type { Metadata } from "next";

import { PaymentsGetStartedSection } from "@/components/payment-hub/payments-get-started-section";
import { PaymentsSuiteQuickLinksSection } from "@/components/payment-hub/payments-suite-quick-links-section";
import { PaymentsWelcomeSection } from "@/components/payment-hub/payments-welcome-section";

export const metadata: Metadata = {
  title: "Dashboard | Payment Hub",
  description: "Payment Hub dashboard",
};

export default function PaymentHubDashboardPage() {
  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden overscroll-y-contain rounded-[12px] border border-white bg-white px-4 py-4 shadow-[0_12px_16px_-4px_rgba(16,24,40,0.08),0_4px_6px_-2px_rgba(16,24,40,0.03)]">
      <div className="mx-auto flex w-full min-w-0 max-w-[1160px] flex-col gap-[32px]">
        <PaymentsWelcomeSection />
        <PaymentsGetStartedSection />
        <PaymentsSuiteQuickLinksSection />
      </div>
    </div>
  );
}
