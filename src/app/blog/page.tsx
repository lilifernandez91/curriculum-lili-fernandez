import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guías y materiales descargables en PDF para familias.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog · Lili Fernández",
    description: "Guías y materiales descargables en PDF para familias.",
    url: "/blog",
    type: "article",
    images: [
      {
        url: "/images/materiales/guia-bebe-0-12.png",
        width: 1000,
        height: 1400,
        alt: "Guía de desarrollo del bebé (0-12 meses)",
      },
      {
        url: "/images/materiales/guia-desarrollo-1-3.png",
        width: 1000,
        height: 1400,
        alt: "Guía de desarrollo infantil (1-3 años)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog · Lili Fernández",
    description: "Guías y materiales descargables en PDF para familias.",
    images: [
      "/images/materiales/guia-bebe-0-12.png",
      "/images/materiales/guia-desarrollo-1-3.png",
    ],
  },
};

export default function BlogPage() {
  const faqBlogJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Las guías del blog son gratuitas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, las guías publicadas en esta sección están disponibles para consulta y descarga en PDF.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué temas incluyen las guías?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incluyen desarrollo del lenguaje, estimulación en casa y recomendaciones prácticas para familias.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde puedo solicitar orientación personalizada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Puedes solicitar información personalizada por email (${site.email}) o por Instagram (@${site.instagram}).`,
        },
      },
    ],
  };

  return (
    <main className="border-b border-[#174F43]/10 bg-[#FBF7F1] px-4 py-10 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqBlogJsonLd) }}
      />
      <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D07450]">
          Blog
        </p>
        <h1 className="text-balance mt-2 font-serif text-3xl font-semibold text-[#174F43] sm:text-4xl">
          Materiales descargables
        </h1>
        <ul className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5" role="list">
          {blogPosts.map((p) => (
            <li key={p.slug} className="flex min-h-0 h-full">
              <BlogPostCard post={p} />
            </li>
          ))}
        </ul>
        <p className="mt-8 border-t border-[#174F43]/15 pt-5 text-sm text-[#2B1E18]/70">
          <Link
            href="/"
            className="font-medium text-[#174F43] transition hover:underline"
          >
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  );
}
