import PageHeader from "@/components/ui/PageHeader";
 
export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fale conosco"
        title="Contato"
        description="Preencha o formulario abaixo e entraremos em contato."
      />
 
      <form className="card max-w-xl mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium text-ink-800 mb-1">Nome</label>
          <input type="text" className="input-base" placeholder="Seu nome" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-800 mb-1">E-mail</label>
          <input type="email" className="input-base" placeholder="voce@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-800 mb-1">Mensagem</label>
          <textarea rows={4} className="input-base" placeholder="Como podemos ajudar?" />
        </div>
        <button type="button" className="btn-primary w-full">Enviar mensagem</button>
      </form>
    </>
  );
}
