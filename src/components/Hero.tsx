export function Hero() {
  return (
    <section className="overflow-x-hidden border-b border-rule">
      <div className="mx-auto grid min-w-0 max-w-[1200px] lg:grid-cols-[minmax(0,1fr)_minmax(220px,32%)]">
        <div className="min-w-0 border-r border-rule px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-ink-muted">
            Москва · подбор рабочей силы
          </p>

          <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight">
            Рабочая
            <br />
            сила
            <br />
            <span className="text-red">без поиска</span>
            <br />
            и рисков
          </h1>

          <p className="mt-10 max-w-lg text-[17px] leading-[1.65] text-ink-muted">
            Проверяем исполнителей, контролируем выход, подбираем людей под
            задачу. Заказчик получает готовое решение — работнику не нужно
            обходить стройки в поисках смены.
          </p>

          <div className="mt-12 flex flex-col gap-0 sm:flex-row sm:items-stretch">
            <a
              href="#customers"
              className="border border-rule bg-ink px-8 py-4 text-center font-display text-sm font-bold uppercase tracking-widest text-paper transition-colors hover:bg-red"
            >
              Нужны люди на объект
            </a>
            <a
              href="#workers"
              className="border border-t-0 border-rule bg-paper px-8 py-4 text-center font-display text-sm font-bold uppercase tracking-widest transition-colors hover:bg-paper-dark sm:border-t sm:border-l-0"
            >
              Ищу смену
            </a>
          </div>
        </div>

        <aside className="grid min-w-0 grid-rows-2">
          <div className="flex min-w-0 flex-col justify-between gap-4 border-b border-rule bg-red p-5 text-paper sm:p-6 lg:p-7">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
              Срочно
            </span>
            <p className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-black uppercase leading-[0.95] break-words">
              Сегодня
            </p>
            <p className="text-sm leading-snug opacity-90">
              Когда бригада нужна до вечера, а не «на следующей неделе».
            </p>
          </div>
          <div className="stripe flex min-w-0 flex-col justify-between gap-4 p-5 sm:p-6 lg:p-7">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-ink-muted">
              Планово
            </span>
            <p className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-black uppercase leading-[0.95] break-words text-ink">
              Завтра
            </p>
            <p className="text-sm leading-snug text-ink-muted">
              Подбор с проверкой документов и явкой на объект.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
