import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Página em construção"
        title="Bem-vindo ao Sistema de Páginas"
        description="Este projeto está sendo desenvolvido colaborativamente pelo grupo. Cada integrante é responsável por uma das páginas listadas abaixo."
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { rota: "/", titulo: "Home", aluno: "Aluno 1", status: "Em construção" },
          { rota: "/sobre", titulo: "Sobre", aluno: "Aluno 2", status: "Pendente" },
          { rota: "/servicos", titulo: "Serviços", aluno: "Aluno 3", status: "Pendente" },
          { rota: "/contato", titulo: "Contato", aluno: "Aluno 4", status: "Pendente" },
        ].map((p) => (
          <article key={p.rota} className="card hover:shadow-soft transition-shadow">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-1">
              {p.aluno}
            </p>
            <h3 className="text-lg font-semibold text-ink-900 mb-1">
              {p.titulo}
            </h3>
            <p className="text-sm text-ink-400 mb-3">{p.status}</p>
            <Link
              href={p.rota}
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              Visitar →
            </Link>
          </article>
        ))}
      </section>

      {/* TODO Aluno 1: substituir esta página inteira pelo seu conteúdo. */}
    </>
  );
}
