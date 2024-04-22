import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "FoxDesign - David Fox",
  description: "Next.js and Sanity.io portfolio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="z-20 relative">
      <div>{children}</div>
    </main>
  );
}
