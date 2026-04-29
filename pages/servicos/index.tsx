import PageHeader from "@/components/ui/PageHeader";

const servicos = [
  {
    titulo: "Desenvolvimento Web",
    desc: "Sites e sistemas modernos com Next.js, React e Tailwind.",
  },
  {
    titulo: "Consultoria em Git",
    desc: "Boas praticas de versionamento, branches e revisoes de codigo.",
  },
  {
    titulo: "Treinamentos",
    desc: "Capacitacao tecnica para times de desenvolvimento.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="O que oferecemos"
        title="Nossos Servicos"
        description="Conheca as solucoes que entregamos para nossos clientes."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {servicos.map((s) => (
          <article key={s.titulo} className="card">
            <h3 className="font-semibold text-ink-900 mb-2">{s.titulo}</h3>
            <p className="text-sm text-ink-600">{s.desc}</p>
          </article>
        ))}
      </div>
    </>
  );
}
