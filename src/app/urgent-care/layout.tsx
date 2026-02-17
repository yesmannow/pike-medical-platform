import { UrgentStatusBar } from "@/components/shared/UrgentStatusBar";

export default function UrgentCareLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <UrgentStatusBar />
      {children}
    </>
  );
}
