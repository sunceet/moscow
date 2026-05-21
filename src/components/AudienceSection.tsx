const customers = [
  {
    n: "01",
    title: "Проверенные исполнители",
    text: "Документы, опыт и надёжность — до выхода на объект, не после.",
  },
  {
    n: "02",
    title: "Контроль выхода",
    text: "Следим за явкой. Если кто-то не вышел — быстрая замена.",
  },
  {
    n: "03",
    title: "Подбор под задачу",
    text: "Не «любые рабочие», а люди с нужными навыками под конкретную работу.",
  },
  {
    n: "04",
    title: "Готовое решение",
    text: "Не ищете, не проверяете, не несёте риски — мы берём это на себя.",
  },
];

const workers = [
  {
    n: "01",
    title: "Прозрачная оплата",
    text: "Понятные условия и своевременные выплаты, без сюрпризов после смены.",
  },
  {
    n: "02",
    title: "Регулярные смены",
    text: "Не нужно ходить по стройкам — заказы приходят через платформу.",
  },
  {
    n: "03",
    title: "Защита исполнителя",
    text: "Следим, чтобы заказчик соблюдал договорённости.",
  },
  {
    n: "04",
    title: "Рейтинг и бонусы",
    text: "Отзывы, рейтинг, проценты за частые смены — выгодно оставаться в системе.",
  },
];

function BenefitList({
  items,
}: {
  items: { n: string; title: string; text: string }[];
}) {
  return (
    <ul className="divide-y divide-rule/20">
      {items.map((item) => (
        <li
          key={item.n}
          className="grid grid-cols-[3.5rem_1fr] gap-4 py-7 first:pt-0 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-8"
        >
          <span className="font-display text-2xl font-black text-red/70">
            {item.n}
          </span>
          <div>
            <h4 className="font-display text-lg font-bold uppercase leading-tight tracking-tight">
              {item.title}
            </h4>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed opacity-80">
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function AudienceSection() {
  return (
    <>
      <section
        id="customers"
        className="scroll-mt-16 border-b border-rule bg-ink text-paper"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="border-b border-paper/15 px-5 py-14 sm:px-8 lg:border-b-0 lg:border-r lg:py-20">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-paper/50">
                Заказчикам
              </p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Вам не нужно
                <br />
                искать и
                <br />
                проверять
              </h2>
              <p className="mt-8 max-w-sm text-[16px] leading-relaxed text-paper/70">
                Самостоятельный поиск работников, проверка документов и риски
                остаются на нашей стороне. Вы получаете людей, готовых выйти
                на смену.
              </p>
            </div>
            <div className="px-5 py-10 sm:px-8 sm:py-14 lg:py-20">
              <BenefitList items={customers} />
            </div>
          </div>
        </div>
      </section>

      <section id="workers" className="scroll-mt-16 border-b border-rule">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="border-b border-rule px-5 py-14 sm:px-8 lg:border-b-0 lg:border-r lg:py-20">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-ink-muted">
                Работникам
              </p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Смены
                <br />
                без обмана
                <br />
                и беготни
              </h2>
              <p className="mt-8 max-w-sm text-[16px] leading-relaxed text-ink-muted">
                Не обходите стройки вручную, не рискуйте непонятными условиями.
                Работайте через систему с прозрачной оплатой и защитой.
              </p>
            </div>
            <div className="stripe px-5 py-10 sm:px-8 sm:py-14 lg:py-20">
              <BenefitList items={workers} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
