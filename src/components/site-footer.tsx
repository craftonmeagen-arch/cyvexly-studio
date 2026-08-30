import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-smoke-glass/70 bg-ice-field">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-midnight-slate">
              CYVEXLY STUDIO
            </p>
            <p className="mt-3 max-w-[220px] text-sm text-cool-graphite">
              Independent web design and development studio. Remote &amp; worldwide.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs font-medium text-signal-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-emerald" aria-hidden="true" />
              Available for new projects
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
              Studio
            </h2>
            <ul className="mt-4 space-y-2">
              {footerNav.studio.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-midnight-slate hover:text-cyber-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
              Services
            </h2>
            <ul className="mt-4 space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-midnight-slate hover:text-cyber-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-cool-graphite">
              Contact
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-midnight-slate hover:text-cyber-blue"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-midnight-slate hover:text-cyber-blue">
                  General contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-smoke-glass/70 pt-6 text-xs text-cool-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Cyvexly Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-midnight-slate">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
