import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guías y materiales en PDF (Google Drive).",
};

export default function BlogPage() {
  return (
    <main className="border-b-2 border-terracotta/20 bg-section-cream/80 px-3.5 py-8 sm:px-5 sm:py-9">
      <div className="mx-auto max-w-sm sm:max-w-md lg:max-w-5xl">
        <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-terracotta sm:mt-4">
          Blog
        </p>
        <h1 className="text-balance mt-1.5 font-serif text-xl font-semibold text-forest sm:text-2xl lg:text-3xl">
          Materiales (PDF)
        </h1>
        <ul
          className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 lg:grid-cols-2 lg:gap-4"
          role="list"
        >
          {blogPosts.map((p) => (
            <li key={p.slug} className="flex min-h-0">
              <BlogPostCard post={p} />
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-line/50 pt-4 text-sm text-ink-muted sm:pt-5">
          <Link
            href="/"
            className="font-medium text-forest transition hover:underline"
          >
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  );
}
