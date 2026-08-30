import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "text";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cyber-blue text-white shadow-[0_8px_24px_-8px_rgba(15,102,224,0.55)] hover:bg-[#0b4fb0] focus-visible:bg-[#0b4fb0]",
  secondary:
    "glass-panel text-midnight-slate hover:border-cyber-blue/60 hover:text-cyber-blue",
  text: "text-cyber-blue hover:text-[#0b4fb0] px-0",
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
