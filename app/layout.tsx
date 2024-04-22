import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import localFont from "next/font/local";
import { Metadata } from "next/types";
import "./globals.css";
const myFont = localFont({
  src: "../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "FoxDesign - Furniture for comfort living",
  description: "Next.js + Tailwind CSS + TypeScript + ESLint + Prettier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body data-barba="wrapper">
        <div className="content_container">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
