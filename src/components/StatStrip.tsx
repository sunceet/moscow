const stats = [
  { value: "24ч", label: "до выхода на объект" },
  { value: "100%", label: "проверка исполнителей до смены" },
  { value: "2", label: "стороны в одной системе" },
];

export function StatStrip() {
  return (
    <section className="border-b border-rule bg-ink text-paper" aria-label="Ключевые показатели">
      <div className="mx-auto grid max-w-[1200px] divide-y divide-paper/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10"
          >
            <p className="font-display text-[clamp(2.5rem,8vw,3.5rem)] font-black leading-none text-red">
              {stat.value}
            </p>
            <p className="mt-3 max-w-[14rem] text-sm leading-snug text-paper/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
