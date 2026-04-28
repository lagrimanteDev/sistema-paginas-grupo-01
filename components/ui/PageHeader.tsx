import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

/**
 * Cabeçalho padrão de página.
 * Os alunos podem (e devem) usar este componente em suas páginas.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <header className="mb-10 pb-6 border-b border-ink-200 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-2">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-base text-ink-600 max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
    </header>
  );
}
