export function CtaSection() {
  return (
    <section id="cta" className="scroll-mt-[var(--header-h)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid min-w-0 lg:grid-cols-2">
          <div className="min-w-0 border-b border-rule px-5 py-14 sm:px-8 sm:py-20 lg:border-b-0 lg:border-r">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-ink-muted">
              Связь
            </p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl">
              Оставьте
              <br />
              номер
            </h2>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-ink-muted">
              Перезвоним, уточним задачу и предложим вариант — для заказчика
              или для смены.
            </p>
          </div>

          <div className="flex min-w-0 flex-col justify-center bg-ink px-5 py-14 text-paper sm:px-8 sm:py-20">
            <form className="flex flex-col gap-0">
              <label className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-paper/50">
                Телефон
              </label>
              <input
                type="tel"
                placeholder="+7"
                className="mt-3 w-full min-w-0 border-0 border-b-2 border-paper/30 bg-transparent py-4 font-display text-[clamp(1.5rem,6vw,2rem)] font-bold text-paper placeholder:text-paper/25 focus:border-paper focus:outline-none"
                aria-label="Телефон"
              />
              <button
                type="submit"
                className="btn-fill mt-8 w-full border border-paper/20 py-4 font-display text-sm font-bold uppercase tracking-widest text-paper sm:w-auto sm:px-12"
              >
                <span className="relative z-10">Жду звонка</span>
              </button>
            </form>
            <p className="mt-6 text-xs leading-relaxed text-paper/45">
              Отправляя форму, вы соглашаетесь на обработку контактных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
