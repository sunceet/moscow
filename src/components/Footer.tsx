import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="font-display text-sm font-black uppercase tracking-tight"
        >
          Мос<span className="text-red">Смена</span>
        </Link>
        <p className="text-xs uppercase tracking-widest text-ink-muted">
          Подбор рабочей силы · Москва
        </p>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-ink-muted">
          <a href="#" className="hover:text-ink">
            Политика
          </a>
          <a href="#" className="hover:text-ink">
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
}
