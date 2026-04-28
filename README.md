# Sistema de Páginas — Prova Prática de Versionamento

Projeto base para a **prova prática de Git** da Unidade Curricular de Versionamento — SENAI Cataguases.

> Cada grupo de 4 alunos cria seu próprio repositório a partir deste template e desenvolve o sistema colaborativamente, usando branches, Pull Requests e resolvendo conflitos.

---

## 🛠 Stack

- **Next.js 14** (Pages Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3** com design tokens customizados
- **clsx** para composição condicional de classes

## ✅ Pré-requisitos

- **Node.js** 18.17 ou superior — [download](https://nodejs.org)
- **Git** instalado e configurado:
  ```bash
  git config --global user.name "Seu Nome"
  git config --global user.email "voce@exemplo.com"
  ```
- Editor de código (recomendado: **VS Code**)

## 🚀 Como rodar localmente

```bash
# 1. Clonar o repositório do seu grupo
git clone https://github.com/SEU-GRUPO/sistema-paginas-grupo-XX.git
cd sistema-paginas-grupo-XX

# 2. Instalar dependências
npm install

# 3. Subir o servidor de desenvolvimento
npm run dev
```

Abra **http://localhost:3000** no navegador. O hot-reload está ativo: salve um arquivo e a página recarrega sozinha.

### Outros comandos úteis

```bash
npm run build   # build de produção
npm run start   # rodar a build (porta 3000)
npm run lint    # checagem ESLint
```

## 📂 Estrutura do projeto

```
.
├── pages/
│   ├── _app.tsx              # wrapper global (NÃO MEXER)
│   ├── _document.tsx         # HTML base (NÃO MEXER)
│   ├── index.tsx             # 🔵 Aluno 1 edita (Home)
│   ├── sobre/index.tsx       # 🟢 Aluno 2 edita
│   ├── servicos/index.tsx    # 🟡 Aluno 3 edita
│   └── contato/index.tsx     # 🟣 Aluno 4 edita
├── components/
│   ├── layout/
│   │   ├── Layout.tsx        # estrutura geral (NÃO MEXER)
│   │   ├── Navbar.tsx        # ⚠️ TODOS adicionam seu link aqui
│   │   └── Footer.tsx        # ⚠️ TODOS adicionam seu nome aqui
│   └── ui/
│       └── PageHeader.tsx    # cabeçalho reutilizável (use à vontade)
├── lib/
│   └── utils.ts              # helper cn() para classes
├── styles/
│   └── globals.css           # Tailwind + classes utilitárias
├── public/
│   └── favicon.svg
└── tailwind.config.ts        # tokens de design
```

## 👥 Divisão das tarefas

| Aluno | Página | Rota | Arquivo |
|-------|--------|------|---------|
| 1 🔵 | Home | `/` | `pages/index.tsx` |
| 2 🟢 | Sobre | `/sobre` | `pages/sobre/index.tsx` |
| 3 🟡 | Serviços | `/servicos` | `pages/servicos/index.tsx` |
| 4 🟣 | Contato | `/contato` | `pages/contato/index.tsx` |

**Todos os alunos** também editam:

- `components/layout/Navbar.tsx` (adicionar item ao array `navLinks`)
- `components/layout/Footer.tsx` (adicionar item ao array `equipe`)

> 👀 É justamente nestes 2 arquivos que vão acontecer os **conflitos de merge** que fazem parte da avaliação.

## 🎨 Tokens de design disponíveis

O Tailwind está configurado com cores e classes prontas. Use estas no lugar de cores genéricas:

### Cores
- **Brand** (azul, ações primárias): `bg-brand-50` … `bg-brand-900`
- **Ink** (cinza/preto, textos e bordas): `text-ink-50` … `text-ink-900`

### Componentes utilitários
- `.btn-primary` — botão azul primário
- `.btn-secondary` — botão branco com borda
- `.card` — caixa branca com sombra leve
- `.input-base` — input/textarea padronizado

### Helper
- `<PageHeader>` — cabeçalho de página (props: `eyebrow`, `title`, `description`, `action`)

## ✅ Resultado esperado ao final da prova

- 4 páginas funcionais e navegáveis
- Navbar com 4 links (um por aluno, na ordem dos merges)
- Footer com os 4 nomes dos integrantes
- Histórico do Git com **4 branches mescladas** e **pelo menos 1 conflito resolvido**
- Repositório **público** no GitHub com os 4 alunos como colaboradores ativos

## 🆘 Comandos de socorro

```bash
git status                      # quase sempre te diz o próximo passo
git log --oneline --graph --all # visualiza o histórico de branches

# Cancelar um merge no meio
git merge --abort

# Descartar TODAS as alterações locais (cuidado!)
git restore .

# Commit no lugar errado? Desfaz o último commit mantendo as alterações:
git reset --soft HEAD~1
```
