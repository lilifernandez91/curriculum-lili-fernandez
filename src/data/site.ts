export const site = {
  name: "Lili Fernández",
  title: "Logopeda",
  description:
    "Acompañamiento en lenguaje, habla y comunicación para niños, adultos y familias.",
  email: "lilibetfdez@gmail.com",
  instagram: "lilifonoylogo",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_ES",
} as const;
