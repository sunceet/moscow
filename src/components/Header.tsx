"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#customers", label: "Заказчикам" },
  { href: "#workers", label: "Работникам" },
  { href: "#how", label: "Процесс" },
  { href: "#platform", label: "Система" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-[60] border-b border-rule bg-paper lg:sticky lg:top-0">
        <div className="mx-auto flex h-[var(--header-h)] max-w-[1200px] items-stretch justify-between">
          <Link
            href="/"
            className="flex min-w-0 items-center border-r border-rule px-4 font-display text-base font-black uppercase tracking-tight sm:px-8 sm:text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Мос<span className="text-red">Смена</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 xl:gap-10 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-sweep text-[12px] font-medium uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-stretch">
            <a
              href="#cta"
              className="btn-fill hidden items-center bg-ink px-6 font-display text-xs font-bold uppercase tracking-widest text-paper sm:flex sm:px-10 sm:text-sm"
            >
              Заявка
            </a>

            <button
              type="button"
              className="flex w-14 flex-col items-center justify-center gap-1.5 border-l border-rule px-4 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] bg-ink/50 transition-opacity duration-200 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        className={`fixed right-0 top-[var(--header-h)] z-[58] flex w-[min(100%,20rem)] flex-col border-l border-rule bg-paper shadow-[-8px_0_32px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="border-b border-rule px-6 py-5 font-display text-sm font-bold uppercase tracking-widest transition-colors hover:bg-paper-dark hover:text-red"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#cta"
          className="m-5 bg-red px-6 py-4 text-center font-display text-sm font-bold uppercase tracking-widest text-paper"
          onClick={() => setMenuOpen(false)}
        >
          Оставить заявку
        </a>
      </nav>
    </>
  );
}
