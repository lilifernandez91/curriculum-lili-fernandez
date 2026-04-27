export const hero = {
  title: "Logopeda",
  subtitle:
    "Acompañamiento en lenguaje y comunicación, adaptado a cada persona.",
};

export const about = {
  title: "Sobre mí",
  paragraphs: [
    "Me formé como Licenciada en Fonoaudiología en Cuba y desde entonces he ido construyendo mi experiencia profesional en distintos países.",
    "Trabajé durante varios años en Uruguay, acompañando a niños y adultos en dificultades relacionadas con la audición, el lenguaje y la comunicación.",
    "Actualmente vivo en España, donde continúo formándome mientras realizo el proceso de homologación como logopeda.",
    "Este recorrido me ha permitido desarrollar una forma de trabajar flexible y adaptada a cada persona, siempre desde la cercanía, la claridad y el respeto.",
  ],
};

export type EducationItem = { period: string; title: string; place: string };

export const education: EducationItem[] = [
  {
    period: "2010 — 2015",
    title: "Licenciatura en Fonoaudiología",
    place:
      "Universidad de Ciencias Médicas de Villa Clara, Cuba",
  },
  {
    period: "2018",
    title: "Homologación del título de Licenciatura en Fonoaudiología",
    place:
      "Facultad de Medicina, Universidad de la República, Montevideo, Uruguay",
  },
];

export type ExperienceItem = {
  id: string;
  period: string;
  institution: string;
  role: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "penarol",
    period: "Marzo 2020 – Junio 2021",
    institution: "Clínica Peñarol",
    role: "Fonoaudióloga",
    summary:
      "Evaluación, diagnóstico y tratamiento de las alteraciones del lenguaje y habla.",
  },
  {
    id: "centro-oeste",
    period: "Julio 2019 – Junio 2021",
    institution: "Clínica Centro Oeste",
    role: "Fonoaudióloga",
    summary:
      "Evaluación, diagnóstico y tratamiento de las alteraciones del lenguaje y habla.",
  },
  {
    id: "cipres",
    period: "Julio 2017 – Febrero 2020",
    institution: "Centro Clínico de Reeducación Auditiva y del Lenguaje (CIPRES)",
    role: "Fonoaudióloga",
    summary:
      "Evaluación, diagnóstico y tratamiento de las alteraciones del lenguaje, habla y voz. Rehabilitación de Implante Coclear. Terapia auditivo verbal.",
  },
  {
    id: "franklin",
    period: "Julio 2017 – Diciembre 2019",
    institution: "Escuela “Franklin Delano Roosevelt”",
    role: "Fonoaudióloga",
    summary:
      "Rehabilitación de niños con patologías neurológicas. Sistemas aumentativos y alternativos de comunicación. Terapia de deglución.",
  },
  {
    id: "caif",
    period: "Julio 2017 – Marzo 2018",
    institution: "CAIF “Gruta de Lourdes”",
    role: "Fonoaudióloga",
    summary:
      "Actividades de prevención, evaluación, diagnóstico y tratamiento de patologías del lenguaje, habla, voz y audición.",
  },
  {
    id: "chiqui-gomez",
    period: "Setiembre 2015 – Marzo 2017",
    institution: "Policlínica Provincial de Logopedia y Foniatría “Chiqui Gómez”",
    role: "Fonoaudióloga",
    summary:
      "Prevención, evaluación, diagnóstico y tratamiento en niños y adultos con trastornos en lenguaje, habla, voz y audición.",
  },
];

export type PathologyItem = { name: string };

export type InterventionCategory = {
  id: string;
  title: string;
  items: PathologyItem[];
};

/** Áreas de intervención: títulos e ítems (solo nombres) */
export const interventionCategories: InterventionCategory[] = [
  {
    id: "lenguaje",
    title: "Lenguaje",
    items: [
      { name: "Trastorno del desarrollo del lenguaje (TDL)" },
      { name: "Trastorno de la comunicación social (pragmático)" },
      { name: "Trastornos del lenguaje asociados a otras condiciones" },
    ],
  },
  {
    id: "habla",
    title: "Habla",
    items: [
      { name: "Trastorno de los sonidos del habla (TSH)" },
      { name: "Apraxia del habla infantil" },
      { name: "Disartria" },
      { name: "Trastornos de la fluidez" },
    ],
  },
  {
    id: "voz",
    title: "Voz",
    items: [
      { name: "Disfonía" },
      { name: "Trastornos de resonancia" },
    ],
  },
  {
    id: "deglucion",
    title: "Deglución",
    items: [
      { name: "Disfagia" },
      { name: "Trastornos miofuncionales orofaciales" },
    ],
  },
  {
    id: "condiciones-medicas",
    title: "Condiciones médicas que afectan la comunicación",
    items: [
      { name: "Trastorno del espectro autista (TEA)" },
      { name: "Mutismo selectivo" },
      { name: "TDAH" },
      { name: "Discapacidad intelectual" },
      { name: "Síndromes genéticos" },
      { name: "Daño neurológico adquirido" },
      { name: "Parálisis cerebral infantil (PCI)" },
      { name: "Fisura labiopalatina" },
      { name: "Parálisis facial" },
      { name: "Enfermedades neurodegenerativas (p. ej. Parkinson, Alzheimer)" },
    ],
  },
  {
    id: "evolutivo",
    title: "Evolutivo",
    items: [{ name: "Hablante tardío" }],
  },
  {
    id: "audicion",
    title: "Audición",
    items: [
      { name: "Hipoacusia" },
      { name: "Trastorno del procesamiento auditivo" },
    ],
  },
  {
    id: "aprendizaje",
    title: "Aprendizaje / lenguaje escrito",
    items: [{ name: "Trastorno específico del aprendizaje" }],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  /** Resumen corto opcional bajo el título */
  excerpt?: string;
  /** Texto largo opcional bajo el resumen */
  body?: string;
  /** Enlace a PDF en Google Drive (vista o descarga) */
  pdfUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-bebre-0-12-meses",
    title: "Guía práctica para acompañar el desarrollo de tu bebé (0–12 meses)",
    date: "2025-10-10",
    pdfUrl:
      "https://drive.google.com/file/d/13TBCQtbBoCwl9SrqTt8DclRVEUBnCV22/view?usp=sharing",
  },
  {
    slug: "estimulacion-1-3-anos",
    title: "Cómo estimular el desarrollo infantil (1–3 años)",
    date: "2025-11-05",
    pdfUrl:
      "https://drive.google.com/file/d/180h_LS_eqDgU-KJW34tHqRGgnD9-6GFb/view?usp=sharing",
  },
];

