"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/lib/site-config";
import { ButtonLink } from "@/components/button";

const desktopNavigationQuery = "(min-width: 1024px)";

function isCurrentPath(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktopNavigation = window.matchMedia(desktopNavigationQuery);
    const closeCompactNavigation = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopNavigation.addEventListener("change", closeCompactNavigation);
    return () => {
      desktopNavigation.removeEventListener("change", closeCompactNavigation);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeWithFocusReturn = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      setOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    document.addEventListener("keydown", closeWithFocusReturn);
    return () => {
      document.removeEventListener("keydown", closeWithFocusReturn);
    };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 px-3 pt-3">
      <div className="glass-shell site-header-shell mx-auto max-w-6xl overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="site-brand-link flex items-center gap-2.5 font-display text-sm font-semibold tracking-[0.18em] text-midnight-slate"
        >
          <Image
            src="/icon.svg"
            alt=""
            aria-hidden="true"
            width="24"
            height="24"
            className="site-brand-mark"
          />
          CYVEXLY STUDIO
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
              className="text-sm font-medium text-cool-graphite transition-colors hover:text-midnight-slate"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href="/start"
            variant="primary"
            aria-current={pathname === "/start" ? "page" : undefined}
            className="px-5 py-2.5 text-sm"
          >
            Describe your project
          </ButtonLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-white/45 text-midnight-slate shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_10px_24px_-20px_rgba(15,102,224,0.7)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/75 bg-arctic-mist/78 px-4 pb-5 pt-2 backdrop-blur-2xl sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-midnight-slate"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="/start"
            variant="primary"
            aria-current={pathname === "/start" ? "page" : undefined}
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Describe your project
          </ButtonLink>
        </nav>
      )}
      </div>
    </header>
  );
}
