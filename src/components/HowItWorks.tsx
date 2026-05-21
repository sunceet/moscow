const steps = [
  {
    step: "1",
    title: "Заявка",
    text: "Объект, срок, количество людей, требования к навыкам.",
  },
  {
    step: "2",
    title: "Проверка и подбор",
    text: "Отбираем из базы, сверяем документы, подтверждаем готовность.",
  },
  {
    step: "3",
    title: "Выход",
    text: "Контролируем явку. Не вышел — заменяем без вашего участия.",
  },
  {
    step: "4",
    title: "Расчёт",
    text: "Оплата, отзыв, рейтинг — всё фиксируется в системе.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 border-b border-rule">
      <div className="mx-auto max-w-[1200px]">
        <div className="border-b border-rule px-5 py-10 sm:px-8">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-ink-muted">
            Процесс
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
            От заявки до смены
          </h2>
        </div>

        <ol className="grid divide-y divide-rule sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 [&>li]:border-rule [&>li]:sm:border-l [&>li]:sm:border-t-0 [&>li:first-child]:sm:border-l-0">
          {steps.map((item) => (
            <li key={item.step} className="px-5 py-10 sm:px-8">
              <span className="font-display text-[4rem] font-black leading-none text-paper-dark sm:text-[5rem]">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
