import { PaymentHubShell } from "@/components/payment-hub/payment-hub-shell";

export default function PaymentHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PaymentHubShell>{children}</PaymentHubShell>;
}
