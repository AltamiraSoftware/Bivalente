import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="rounded-[32px] border border-[#d9e8e2] bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#61764B] p-8 text-white shadow-[0_24px_60px_rgba(10,77,104,0.18)] md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#dce9c8]">
        Bivalente Salud
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white! md:text-4xl">
        Si necesitas orientación profesional, el siguiente paso puede ser una primera valoración.
      </h2>
      <p className="mt-4 max-w-2xl text-white/82">
        Nuestro blog acompaña, pero no sustituye una atención clínica personalizada. Puedes reservar o conocer los servicios de psicología y fisioterapia de Bivalente.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/psicologia" className="bv-btn bv-btn-primary bv-btn-lg">
          Ver psicologia
        </Link>
        <Link href="/fisioterapia" className="bv-btn bv-btn-ghost bv-btn-lg">
          Ver fisioterapia
        </Link>
      </div>
    </section>
  );
}
