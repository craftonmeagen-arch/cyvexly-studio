import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-white/25">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-white">
              CYVEXLY STUDIO
            </p>
            <p className="mt-3 max-w-[220px] text-sm text-white/70">
              Independent web design and development studio. Remote, serving the United States.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs font-medium text-ion-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-ion-cyan shadow-[0_0_12px_rgba(54,199,255,0.9)]" aria-hidden="true" />
              Available for new projects
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-white/60">
              Studio
            </h2>
            <ul className="mt-4 space-y-2">
              {footerNav.studio.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-ion-cyan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-white/60">
              Services
            </h2>
            <ul className="mt-4 space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-ion-cyan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-white/60">
              Contact
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/80 hover:text-ion-cyan"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm text-white/80 hover:text-ion-cyan"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-ion-cyan">
                  General contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Cyvexly Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
