import Image from "next/image";
import type { BlogPost } from "@/data/content";

type Props = {
  post: BlogPost;
};

export function BlogPostCard({ post: p }: Props) {
  return (
    <article
      id={p.slug}
      className="flex h-full w-full flex-col gap-3 rounded-3xl border border-[#174F43]/10 bg-[#FFFDF9] p-3.5 shadow-[0_14px_35px_-24px_rgba(23,79,67,0.45)] sm:p-4 md:flex-row md:items-stretch md:gap-4"
    >
      <a
        href={p.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto block w-[66%] shrink-0 sm:w-[44%] md:mx-0 md:w-40 lg:w-44"
        aria-label={`Abrir PDF: ${p.title}`}
      >
        <div
          className="-rotate-[2.5deg] aspect-[3/4] overflow-hidden rounded-2xl border border-[#174F43]/10 bg-[#FBF7F1] shadow-[0_12px_30px_-20px_rgba(43,30,24,0.55)] transition hover:-translate-y-0.5 hover:rotate-0"
        >
          <Image
            src={p.coverImage}
            alt={`Portada de ${p.title}`}
            width={420}
            height={620}
            className="h-full w-full object-cover"
          />
        </div>
      </a>

      <div className="flex h-full min-w-0 flex-1 flex-col justify-between gap-3">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-wide text-[#2B1E18]/60">{p.date}</p>
          <h2
            className="font-serif text-lg font-semibold leading-snug text-[#174F43] break-words sm:text-xl"
          >
            {p.title}
          </h2>
        </div>
        <a
          href={p.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#174F43] px-4 text-sm font-semibold text-[#FFFDF9] shadow-[0_10px_26px_-18px_rgba(23,79,67,0.8)] transition hover:bg-[#123d34]"
        >
          Ver guía PDF
        </a>
      </div>
    </article>
  );
}
