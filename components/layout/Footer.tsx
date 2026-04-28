/**
 * Lista de integrantes da equipe.
 *
 * ⚠️  ATENÇÃO ALUNOS: cada um deve ADICIONAR seu próprio item neste array.
 *     Mantenha uma vírgula ao final do item anterior e adicione o seu na linha de baixo.
 *
 *     Formato:
 *       { nome: "Seu Nome Completo", github: "seu-usuario-github" },
 */
const equipe: { nome: string; github: string }[] = [
  // ====== INÍCIO DA ÁREA DE EDIÇÃO COLABORATIVA ======

  // ====== FIM DA ÁREA DE EDIÇÃO COLABORATIVA ======
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-100 mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Sistema de Páginas
            </h3>
            <p className="text-sm text-ink-400 max-w-md">
              Projeto colaborativo desenvolvido como atividade prática de
              versionamento com Git no SENAI.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Equipe
            </h3>
            <ul className="space-y-1.5">
              {equipe.map((membro) => (
                <li key={membro.github} className="text-sm text-ink-100">
                  <span className="font-medium">{membro.nome}</span>
                  <span className="text-ink-400">
                    {" "}
                    · @{membro.github}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-ink-800 text-xs text-ink-400 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {ano} Sistema de Páginas — SENAI</span>
          <span>Construído com Next.js + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
