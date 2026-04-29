import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: "Politica de cookies del sitio web de Lili Fernández.",
};

export default function CookiesPage() {
  return (
    <main className="bg-[#FBF7F1] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#E9D8CE] bg-[#FFFDF9] p-6 shadow-[0_14px_35px_-24px_rgba(23,79,67,0.25)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D07450]">
          Legal
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-[#174F43] sm:text-4xl">
          Politica de cookies
        </h1>
        <p className="mt-3 text-sm text-[#6D625C]">
          Ultima actualizacion: abril de 2026.
        </p>

        <section className="mt-8 space-y-5 text-sm leading-relaxed text-[#2B1E18]/85 sm:text-base">
          <p>
            Este sitio web utiliza cookies y tecnologias similares para mejorar
            la experiencia de navegacion, analizar el uso del sitio y recordar
            preferencias del usuario.
          </p>

          <div>
            <h2 className="font-semibold text-[#174F43]">Que son las cookies</h2>
            <p className="mt-1">
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo cuando visitas una pagina web. Permiten reconocer tu
              navegador en futuras visitas.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">
              Tipos de cookies que pueden utilizarse
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Cookies tecnicas o necesarias para el funcionamiento.</li>
              <li>Cookies de analitica para medir visitas y uso del sitio.</li>
              <li>Cookies de preferencias para recordar configuraciones.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">Gestion de cookies</h2>
            <p className="mt-1">
              Puedes permitir, bloquear o eliminar cookies desde la
              configuracion de tu navegador. Ten en cuenta que desactivar
              determinadas cookies puede afectar al funcionamiento del sitio.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#174F43]">Actualizaciones</h2>
            <p className="mt-1">
              Esta politica puede actualizarse en funcion de cambios normativos
              o tecnicos. Se recomienda revisarla periodicamente.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
