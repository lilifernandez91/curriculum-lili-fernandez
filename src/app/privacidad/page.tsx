import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description: "Politica de privacidad del sitio web de Lili Fernández.",
};

export default function PrivacidadPage() {
  return (
    <main className="bg-[#FBF7F1] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#E9D8CE] bg-[#FFFDF9] p-6 shadow-[0_14px_35px_-24px_rgba(23,79,67,0.25)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D07450]">
          Legal
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-[#174F43] sm:text-4xl">
          Politica de privacidad
        </h1>
        <p className="mt-3 text-sm text-[#6D625C]">
          Ultima actualizacion: abril de 2026.
        </p>

        <section className="mt-8 space-y-5 text-sm leading-relaxed text-[#2B1E18]/85 sm:text-base">
          <p>
            En cumplimiento de la normativa aplicable en materia de proteccion
            de datos, se informa a los usuarios sobre el tratamiento de sus
            datos personales en este sitio web.
          </p>

          <div>
            <h2 className="font-semibold text-[#174F43]">
              Responsable del tratamiento
            </h2>
            <p className="mt-1">
              Responsable: {site.name}. <br />
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
            <h2 className="font-semibold text-[#174F43]">Datos que se recogen</h2>
            <p className="mt-1">
              Se pueden recoger datos identificativos y de contacto que el
              usuario facilite voluntariamente a traves de correo electronico o
              formularios de contacto.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">Finalidad</h2>
            <p className="mt-1">
              Los datos se utilizan para atender consultas, gestionar
              comunicaciones profesionales y prestar informacion sobre servicios
              relacionados con la logopedia.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">Base legal</h2>
            <p className="mt-1">
              La base legal para el tratamiento es el consentimiento del usuario
              al contactar voluntariamente, y en su caso la ejecucion de medidas
              precontractuales o contractuales.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">Conservacion</h2>
            <p className="mt-1">
              Los datos se conservaran durante el tiempo necesario para cumplir
              la finalidad para la que fueron recogidos y para atender posibles
              obligaciones legales.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">Derechos</h2>
            <p className="mt-1">
              El usuario puede ejercer sus derechos de acceso, rectificacion,
              supresion, oposicion, limitacion y portabilidad escribiendo a{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[#174F43] underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
