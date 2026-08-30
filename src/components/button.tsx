import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "text";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cyber-blue text-white shadow-[0_8px_24px_-8px_rgba(20,120,255,0.55)] hover:bg-[#0f66e0] focus-visible:bg-[#0f66e0]",
  secondary:
    "glass-panel text-midnight-slate hover:border-cyber-blue/60 hover:text-cyber-blue",
  text: "text-cyber-blue hover:text-[#0f66e0] px-0",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

type ButtonProps = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Link>;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
