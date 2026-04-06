import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Samrat Security",
    template: "%s | Samrat Security",
  },
  description: "Professional security solutions with 24/7 support.",
  icons: {
    icon: "/Logos/logo.png.svg",
    shortcut: "/Logos/logo.png.svg",
    apple: "/Logos/logo.png.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-site text-slate-100">
        <div className="site-grid min-h-screen">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
