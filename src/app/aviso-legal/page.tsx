import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Información legal del sitio web de Lili Fernández.",
};

export default function AvisoLegalPage() {
  return (
    <main className="bg-[#FBF7F1] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#E9D8CE] bg-[#FFFDF9] p-6 shadow-[0_14px_35px_-24px_rgba(23,79,67,0.25)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D07450]">
          Legal
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-[#174F43] sm:text-4xl">
          Aviso legal
        </h1>
        <p className="mt-3 text-sm text-[#6D625C]">
          Ultima actualizacion: abril de 2026.
        </p>

        <section className="mt-8 space-y-5 text-sm leading-relaxed text-[#2B1E18]/85 sm:text-base">
          <p>
            Este sitio web tiene como finalidad ofrecer informacion sobre los
            servicios profesionales de {site.name}, {site.title}.
          </p>

          <div>
            <h2 className="font-semibold text-[#174F43]">Titular del sitio</h2>
            <p className="mt-1">
              Titular: {site.name}. <br />
              Actividad: Servicios de logopedia. <br />
              Contacto:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[#174F43] underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">
              Condiciones de uso
            </h2>
            <p className="mt-1">
              La navegacion por este sitio implica la aceptacion de las
              presentes condiciones. El usuario se compromete a hacer un uso
              adecuado de los contenidos y a no emplearlos para actividades
              contrarias a la ley, la buena fe o el orden publico.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">
              Propiedad intelectual
            </h2>
            <p className="mt-1">
              Los contenidos, textos, imagenes, logotipos y diseño del sitio
              son titularidad de {site.name} o cuentan con autorizacion de uso.
              Queda prohibida su reproduccion total o parcial sin consentimiento
              previo y por escrito.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">Responsabilidad</h2>
            <p className="mt-1">
              El titular no se hace responsable de los daños derivados del uso
              de la web ni de posibles errores u omisiones en los contenidos,
              sin perjuicio de adoptar las medidas necesarias para evitarlos y
              corregirlos.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
