const points = [
  "Отзывы и рейтинг с обеих сторон — недобросовестные уходят из системы.",
  "Высокий рейтинг открывает лучшие и более частые смены.",
  "Бонусы и проценты за регулярные выходы — мотивация оставаться.",
  "Прозрачные правила удерживают и заказчиков, и исполнителей.",
];

export function PlatformFeatures() {
  return (
    <section id="platform" className="scroll-mt-16 border-b border-rule bg-red text-paper">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-paper/60">
              Система
            </p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl">
              Держим обе
              <br />
              стороны
              <br />
              внутри
            </h2>
            <p className="mt-8 max-w-md text-[16px] leading-relaxed text-paper/85">
              Рейтинги, отзывы и бонусы за частые смены — не маркетинговая
              обёртка, а механизм, который делает платформу выгодной для всех.
            </p>
          </div>

          <ul className="space-y-0 divide-y divide-paper/25 border border-paper/25">
            {points.map((text, i) => (
              <li
                key={i}
                className="grid grid-cols-[2.5rem_1fr] gap-4 px-5 py-6 sm:grid-cols-[3rem_1fr] sm:px-6"
              >
                <span className="font-display text-xl font-black text-paper/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
