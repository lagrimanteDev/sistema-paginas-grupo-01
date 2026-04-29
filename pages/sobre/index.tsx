import PageHeader from "@/components/ui/PageHeader";
 
export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Quem somos"
        title="Sobre o Projeto"
        description="Saiba como este Sistema de Paginas foi construido."
      />
 
      <div className="grid md:grid-cols-2 gap-6">
        <article className="card">
          <h3 className="font-semibold text-ink-900 mb-2">Nossa missao</h3>
          <p className="text-sm text-ink-600">
            Demonstrar na pratica como uma equipe de desenvolvedores trabalha
            de forma colaborativa usando Git, branches e Pull Requests.
          </p>
        </article>
        <article className="card">
          <h3 className="font-semibold text-ink-900 mb-2">Como foi feito</h3>
          <p className="text-sm text-ink-600">
            Cada pagina foi construida por um integrante diferente em sua
            propria branch e integrada via Pull Requests no GitHub.
          </p>
        </article>
      </div>
    </>
  );
}

