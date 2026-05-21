import { UrgencyCards } from "./UrgencyCards";

export function Hero() {
  return (
    <section className="relative overflow-x-clip border-b border-rule">
      <div
        className="watermark pointer-events-none absolute -right-4 top-8 z-0 hidden font-display font-black uppercase select-none sm:block lg:top-12"
        aria-hidden
      >
        Смена
      </div>

      <div className="relative z-10 mx-auto min-w-0 max-w-[1200px]">
        <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_minmax(240px,30%)]">
          <div className="min-w-0 px-5 py-12 sm:px-8 sm:py-16 lg:border-r lg:border-rule lg:py-20">
            <p className="reveal font-display text-[11px] font-bold uppercase tracking-[0.28em] text-ink-muted">
              Москва · подбор рабочей силы
            </p>

            <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(2.5rem,11vw,5.25rem)] font-black uppercase leading-[0.9] tracking-tight">
              Рабочая
              <br />
              сила
              <br />
              <span className="text-red">без поиска</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-2 font-display text-[clamp(1.25rem,4vw,1.75rem)] font-bold uppercase leading-tight text-ink-muted">
              и рисков
            </p>

            <p className="reveal reveal-delay-3 mt-8 max-w-lg text-[16px] leading-[1.65] text-ink-muted sm:text-[17px]">
              Проверяем исполнителей, контролируем выход, подбираем людей под
              задачу. Заказчик получает готовое решение — работнику не нужно
              обходить стройки в поисках смены.
            </p>

            <div className="reveal reveal-delay-3 mt-10 grid gap-0 sm:grid-cols-2">
              <a
                href="#customers"
                className="btn-fill border border-rule bg-ink px-6 py-4 text-center font-display text-xs font-bold uppercase tracking-widest text-paper sm:text-sm"
              >
                Нужны люди
              </a>
              <a
                href="#workers"
                className="border border-t-0 border-rule bg-paper px-6 py-4 text-center font-display text-xs font-bold uppercase tracking-widest transition-colors hover:bg-paper-dark sm:border-t-0 sm:border-l-0 sm:text-sm"
              >
                Ищу смену
              </a>
            </div>
          </div>

          <aside className="hidden min-w-0 grid-rows-2 lg:grid">
            <div className="flex min-w-0 flex-col justify-between gap-4 border-b border-rule bg-red p-6 text-paper xl:p-8">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
                Срочно
              </span>
              <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-black uppercase leading-[0.95]">
                Сегодня
              </p>
              <p className="text-sm leading-snug opacity-90">
                Когда бригада нужна до вечера, а не «на следующей неделе».
              </p>
            </div>
            <div className="stripe flex min-w-0 flex-col justify-between gap-4 p-6 xl:p-8">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-ink-muted">
                Планово
              </span>
              <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-black uppercase leading-[0.95] text-ink">
                Завтра
              </p>
              <p className="text-sm leading-snug text-ink-muted">
                Подбор с проверкой документов и явкой на объект.
              </p>
            </div>
          </aside>
        </div>

        <UrgencyCards variant="hero" />
      </div>
    </section>
  );
}
