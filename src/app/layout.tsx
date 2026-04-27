import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import { site } from "@/data/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Logopeda: acompañamiento en lenguaje, habla y comunicación. Consulta en español.",
  openGraph: { locale: "es_ES" },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${cormorant.variable} min-h-dvh overflow-x-clip antialiased`}
      >
        <SiteHeader />
        {children}
        <footer className="border-t border-border bg-canvas px-4 py-8 text-center text-sm text-ink-muted sm:px-6">
          <p className="font-medium text-ink">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="mt-1 text-xs">{site.title}</p>
        </footer>
      </body>
    </html>
  );
}
