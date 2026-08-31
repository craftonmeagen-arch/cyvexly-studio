import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "text";

const variantClasses: Record<Variant, string> = {
  primary:
    "border border-white/35 bg-[linear-gradient(135deg,#0f66e0_0%,#1478ff_52%,#36a9ff_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_12px_30px_-12px_rgba(15,102,224,0.72)] hover:bg-[linear-gradient(135deg,#0b4fb0_0%,#0f66e0_58%,#238de8_100%)] focus-visible:bg-[#0b4fb0]",
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
