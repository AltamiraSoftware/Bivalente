import Image from "next/image";
import Link from "next/link";

const PROFESSIONAL_CARD_CONTENT = {
  psicologia: {
    image: "/Daniela.webp",
    imageAlt: "Daniela, psicóloga en Bivalente",
    name: "Daniela López",
    role: "Psicóloga General Sanitaria",
    license: "Col. M-41829",
    description:
      "Acompañamiento psicológico cercano y estructurado para ansiedad, autoestima, crisis, duelo y procesos relacionales.",
    tags: ["Ansiedad", "Autoestima", "Crisis", "Parejas"],
    href: "/psicologia#formulario",
    cta: "Reservar cita con Daniela",
    shellClassName:
      "rounded-[30px] border border-[#d8e7d9] bg-gradient-to-br from-[#f8faf5] to-[#dce9c5] p-8 shadow-[0_24px_60px_rgba(10,77,104,0.10)]",
    nameClassName: "text-[#0A4D68]",
    roleClassName: "text-[#0A4D68]",
    textClassName: "text-[#245953]",
    tagClassName: "bg-[#A4BE7B]/20 text-[#0A4D68]",
    buttonClassName: "bv-btn bv-btn-primary-dark bv-btn-lg w-full justify-center",
    imageBorderClassName: "border-[#0A4D68]/60",
  },
  fisioterapia: {
    image: "/borja.png",
    imageAlt: "Borja Estarellas, fisioterapeuta en Bivalente",
    name: "Borja Estarellas",
    role: "Fisioterapeuta",
    license: "Col. 15388",
    description:
      "Fisioterapia basada en terapia manual y ejercicio terapéutico para dolor, lesión y recuperación funcional en Madrid.",
    tags: ["Terapia manual", "Deportivo", "Domicilio", "Rehabilitación"],
    href: "/fisioterapia#formulario",
    cta: "Reservar cita con Borja",
    shellClassName:
      "rounded-[30px] border border-white/12 bg-gradient-to-br from-[#0A4D68] via-[#1B6B73] to-[#245953] p-8 shadow-[0_24px_60px_rgba(10,77,104,0.18)]",
    nameClassName: "text-[#A4BE7B]",
    roleClassName: "text-[#A4BE7B]",
    textClassName: "text-white/88",
    tagClassName: "bg-[#088395]/20 text-white",
    buttonClassName: "bv-btn bv-btn-primary bv-btn-lg w-full justify-center",
    imageBorderClassName: "border-[#A4BE7B]/60",
  },
};

export default function BlogProfessionalCard({ categoryKind }) {
  const content = PROFESSIONAL_CARD_CONTENT[categoryKind];

  if (!content) {
    return null;
  }

  return (
    <section className={content.shellClassName}>
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className={`relative h-36 w-36 overflow-hidden rounded-full border-4 shadow-lg ${content.imageBorderClassName}`}>
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="144px"
            className="object-cover object-[50%_20%]"
          />
        </div>

        <div className="space-y-2">
          <p className={`text-2xl font-bold ${content.nameClassName}`}>{content.name}</p>
          <p className={`font-medium ${content.roleClassName}`}>{content.role}</p>
          <p className={`text-sm ${content.roleClassName}`}>{content.license}</p>
        </div>

        <p className={`max-w-2xl leading-relaxed ${content.textClassName}`}>{content.description}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {content.tags.map((tag) => (
            <span key={tag} className={`rounded-full px-3 py-1 text-sm ${content.tagClassName}`}>
              {tag}
            </span>
          ))}
        </div>

        <Link href={content.href} className={content.buttonClassName}>
          {content.cta}
        </Link>
      </div>
    </section>
  );
}
