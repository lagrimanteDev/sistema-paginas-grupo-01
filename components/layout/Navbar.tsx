import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

/**
 * Lista de links da Navbar.
 *
 * ⚠️  ATENÇÃO ALUNOS: cada um deve ADICIONAR seu próprio item neste array.
 *     Mantenha uma vírgula ao final do item anterior e adicione o seu na linha de baixo.
 *
 *     Formato:
 *       { href: "/sua-rota", label: "Nome da Página" },
 */
const navLinks: { href: string; label: string }[] = [
  // ====== INÍCIO DA ÁREA DE EDIÇÃO COLABORATIVA ======

  // ====== FIM DA ÁREA DE EDIÇÃO COLABORATIVA ======
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-ink-900 tracking-tight"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand-600 text-white text-sm font-bold">
            S
          </span>
          Sistema de Páginas
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? router.pathname === "/"
                : router.pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg font-medium transition-colors",
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-600 hover:text-ink-900 hover:bg-ink-50"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/contato" className="btn-primary text-xs hidden sm:inline-flex">
          Fale Conosco
        </Link>
      </div>
    </nav>
  );
}
