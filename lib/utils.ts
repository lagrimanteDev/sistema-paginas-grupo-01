import clsx, { type ClassValue } from "clsx";

/**
 * Helper para combinar classes do Tailwind condicionalmente.
 * Uso: cn("text-base", isActive && "font-bold", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
