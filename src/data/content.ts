export const hero = {
  eyebrow: "CONSULTA Y ACOMPAÑAMIENTO",
  title: "Ayudo a niños y adultos a mejorar su comunicación y lenguaje.",
  subtitle:
    "Evaluación y acompañamiento personalizado en dificultades del habla, lenguaje, comunicación y aprendizaje.",
  benefits: [
    "Atención personalizada",
    "Enfoque cercano e integral",
    "Acompañamiento claro y respetuoso",
  ],
};

export const about = {
  title: "Sobre mí",
  paragraphs: [
    "Soy Licenciada en Fonoaudiología, formada en Cuba, con experiencia profesional en Uruguay y actualmente en proceso de homologación como logopeda en España.",
    "A lo largo de mi recorrido he acompañado a niños y adultos con dificultades relacionadas con el lenguaje, el habla, la audición y la comunicación.",
    "Mi forma de trabajar se basa en la escucha, la claridad y la adaptación a las necesidades de cada persona.",
  ],
  badges: [
    "Formación en Fonoaudiología",
    "Experiencia con niños y adultos",
    "Atención cercana y personalizada",
  ],
};

export type EducationItem = { period: string; title: string; place: string };
export const educationIntro =
  "Mi formación me ha permitido construir una base sólida para comprender e intervenir en diferentes dificultades del lenguaje, el habla y la comunicación.";

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

export const experienceIntro =
  "Mi experiencia en distintos centros me ha permitido trabajar con necesidades muy diversas, desde dificultades del lenguaje y el habla hasta rehabilitación auditiva y comunicación aumentativa.";

export const experience: ExperienceItem[] = [
  {
    id: "penarol",
    period: "Marzo 2020 – Junio 2021",
    institution: "Clínica Peñarol",
    role: "Fonoaudióloga",
    summary:
      "Acompañamiento en dificultades del lenguaje, habla y comunicación, con evaluación e intervención adaptada a cada caso.",
  },
  {
    id: "centro-oeste",
    period: "Julio 2019 – Junio 2021",
    institution: "Clínica Centro Oeste",
    role: "Fonoaudióloga",
    summary:
      "Trabajo con niños y adultos en procesos de evaluación, diagnóstico e intervención para mejorar la comunicación funcional.",
  },
  {
    id: "cipres",
    period: "Julio 2017 – Febrero 2020",
    institution: "Centro Clínico de Reeducación Auditiva y del Lenguaje (CIPRES)",
    role: "Fonoaudióloga",
    summary:
      "Experiencia en rehabilitación auditiva, implante coclear y terapia auditivo-verbal, además de intervención en lenguaje, habla y voz.",
  },
  {
    id: "franklin",
    period: "Julio 2017 – Diciembre 2019",
    institution: "Escuela “Franklin Delano Roosevelt”",
    role: "Fonoaudióloga",
    summary:
      "Apoyo a niños con necesidades neurológicas, uso de sistemas aumentativos y alternativos de comunicación y acompañamiento en deglución.",
  },
  {
    id: "caif",
    period: "Julio 2017 – Marzo 2018",
    institution: "CAIF “Gruta de Lourdes”",
    role: "Fonoaudióloga",
    summary:
      "Prevención e intervención temprana en lenguaje, habla, voz y audición para favorecer el desarrollo comunicativo.",
  },
  {
    id: "chiqui-gomez",
    period: "Setiembre 2015 – Marzo 2017",
    institution: "Policlínica Provincial de Logopedia y Foniatría “Chiqui Gómez”",
    role: "Fonoaudióloga",
    summary:
      "Trabajo clínico con niños y adultos en prevención, evaluación e intervención de trastornos del lenguaje, habla, voz y audición.",
  },
];

export type AreaIntervencionItem = {
  id: string;
  titulo: string;
  descripcion: string;
  bullets: [string, string];
};

export const areasIntervencionIntro =
  "Acompaño a niños, adolescentes y adultos en dificultades relacionadas con el lenguaje, el habla, la comunicación, el aprendizaje y la fluidez.";

export const areasIntervencion: AreaIntervencionItem[] = [
  {
    id: "tdl",
    titulo: "Trastorno del Desarrollo del Lenguaje (TDL)",
    descripcion: "Dificultad persistente para comprender o expresar el lenguaje oral.",
    bullets: [
      "Puede costar formar frases, comprender instrucciones o ampliar vocabulario.",
      "La intervención mejora la comprensión y la expresión del lenguaje.",
    ],
  },
  {
    id: "tsh",
    titulo: "Trastorno de los sonidos del habla (TSH)",
    descripcion: "Dificultad para producir correctamente algunos sonidos del habla.",
    bullets: [
      "Pueden aparecer sustituciones, omisiones o distorsiones de sonidos.",
      "La intervención favorece una articulación más clara y precisa.",
    ],
  },
  {
    id: "apraxia",
    titulo: "Apraxia del habla infantil",
    descripcion: "Alteración motora que dificulta planificar los movimientos necesarios para hablar.",
    bullets: [
      "Puede haber errores inconsistentes o dificultad para iniciar palabras.",
      "La intervención trabaja planificación, coordinación y claridad del habla.",
    ],
  },
  {
    id: "disartria",
    titulo: "Disartria",
    descripcion:
      "Dificultad para articular palabras por alteraciones en el control muscular del habla.",
    bullets: [
      "Puede notarse habla lenta, imprecisa o con volumen bajo.",
      "La intervención busca mejorar claridad e inteligibilidad.",
    ],
  },
  {
    id: "fluidez",
    titulo: "Trastornos de la fluidez",
    descripcion:
      "Alteraciones como tartamudez, bloqueos o repeticiones que afectan el ritmo del habla.",
    bullets: [
      "Pueden aparecer repeticiones, prolongaciones o bloqueos.",
      "La intervención ayuda a comunicarse con más seguridad y fluidez.",
    ],
  },
  {
    id: "tea",
    titulo: "Trastorno del Espectro Autista (TEA)",
    descripcion:
      "Acompañamiento en comunicación, lenguaje, interacción social y uso funcional del lenguaje.",
    bullets: [
      "Puede haber dificultades en comunicación social o flexibilidad del lenguaje.",
      "La intervención potencia habilidades comunicativas y sociales.",
    ],
  },
  {
    id: "hablante-tardio",
    titulo: "Hablante tardío",
    descripcion: "Niños que comienzan a hablar más tarde de lo esperado para su edad.",
    bullets: [
      "Puede haber menor cantidad de palabras o frases.",
      "La intervención estimula el lenguaje y la comunicación temprana.",
    ],
  },
  {
    id: "aprendizaje",
    titulo: "Trastorno específico del aprendizaje",
    descripcion:
      "Dificultades persistentes en lectura, escritura o habilidades relacionadas con el aprendizaje.",
    bullets: [
      "Puede haber dificultad para leer, escribir o comprender textos.",
      "La intervención fortalece habilidades académicas y cognitivas.",
    ],
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

