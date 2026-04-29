import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
 
export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Bem-vindo"
        title="Sistema de Paginas SENAI"
        description="Projeto colaborativo desenvolvido durante a prova pratica de versionamento. Use o menu acima para navegar entre as paginas."
      />
 
      <section className="grid gap-6 sm:grid-cols-3">
        <article className="card">
          <h3 className="font-semibold text-ink-900 mb-2">Conheca</h3>
          <p className="text-sm text-ink-600 mb-3">Saiba mais sobre o projeto e a equipe.</p>
          <Link href="/sobre" className="text-sm font-medium text-brand-600">Ir para Sobre →</Link>
        </article>
        <article className="card">
          <h3 className="font-semibold text-ink-900 mb-2">Servicos</h3>
          <p className="text-sm text-ink-600 mb-3">Veja o que oferecemos.</p>
          <Link href="/servicos" className="text-sm font-medium text-brand-600">Ir para Servicos →</Link>
        </article>
        <article className="card">
          <h3 className="font-semibold text-ink-900 mb-2">Contato</h3>
          <p className="text-sm text-ink-600 mb-3">Fale com a gente.</p>
          <Link href="/contato" className="text-sm font-medium text-brand-600">Ir para Contato →</Link>
        </article>
      </section>
    </>
  );
}
