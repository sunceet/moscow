import Link from "next/link";

const nav = [
  { href: "#customers", label: "Заказчикам" },
  { href: "#workers", label: "Работникам" },
  { href: "#how", label: "Процесс" },
  { href: "#platform", label: "Система" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-[1200px] items-stretch justify-between">
        <Link
          href="/"
          className="flex items-center border-r border-rule px-5 py-4 font-display text-lg font-black uppercase tracking-tight sm:px-8"
        >
          Мос
          <span className="text-red">Смена</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="flex items-center bg-ink px-6 py-4 font-display text-xs font-bold uppercase tracking-widest text-paper transition-colors hover:bg-red sm:px-10 sm:text-sm"
        >
          Заявка
        </a>
      </div>
    </header>
  );
}
