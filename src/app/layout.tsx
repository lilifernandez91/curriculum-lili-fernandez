import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Link from "next/link";
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
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    url: site.siteUrl,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: `${site.name} ${site.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.description,
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    description: site.description,
    url: site.siteUrl,
    email: site.email,
    image: `${site.siteUrl}/logo.png`,
    sameAs: [`https://instagram.com/${site.instagram}`],
    areaServed: "España",
    inLanguage: "es",
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${cormorant.variable} grid min-h-dvh grid-rows-[auto_1fr_auto] overflow-x-clip antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SiteHeader />
        {children}
        <footer className="border-t border-[#E9D8CE] bg-[#FBF7F1] px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#174F43]">
                  {site.name}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#D07450]">
                  {site.title}
                </p>
                <p className="mt-4 max-w-md leading-relaxed text-[#5F5651]">
                  Logopeda especializada en habla, lenguaje y comunicación.
                  Acompañamiento cercano y personalizado para niños, adultos y
                  familias.
                </p>
              </div>

              <nav aria-label="Navegación del sitio">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174F43]">
                  Navegación
                </h3>
                <ul className="mt-4 space-y-2 text-[#5F5651]">
                  <li>
                    <Link href="/#inicio" className="hover:text-[#D07450]">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/#sobre-mi" className="hover:text-[#D07450]">
                      Sobre mí
                    </Link>
                  </li>
                  <li>
                    <Link href="/#educacion" className="hover:text-[#D07450]">
                      Educación
                    </Link>
                  </li>
                  <li>
                    <Link href="/#experiencia" className="hover:text-[#D07450]">
                      Experiencia
                    </Link>
                  </li>
                  <li>
                    <Link href="/#areas" className="hover:text-[#D07450]">
                      Áreas
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[#D07450]">
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#174F43]">
                  Contacto
                </h3>
                <ul className="mt-4 space-y-2 text-[#5F5651]">
                  <li>
                    <Link href="/#contacto" className="hover:text-[#D07450]">
                      Pedir información
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="group block hover:text-[#D07450]"
                    >
                      <span>Email</span>
                      <span className="block text-sm text-[#8A7D76] transition group-hover:text-[#D07450]/80">
                        {site.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://instagram.com/${site.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group block hover:text-[#D07450]"
                    >
                      <span>Instagram</span>
                      <span className="block text-sm text-[#8A7D76] transition group-hover:text-[#D07450]/80">
                        @{site.instagram}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-[#E9D8CE] pt-6 text-sm text-[#6D625C] md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} {site.name} · {site.title}
              </p>
              <div className="flex gap-4">
                <Link href="/aviso-legal" className="hover:text-[#D07450]">
                  Aviso legal
                </Link>
                <Link href="/privacidad" className="hover:text-[#D07450]">
                  Privacidad
                </Link>
                <Link href="/cookies" className="hover:text-[#D07450]">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
