const items = [
  "проверка документов",
  "контроль выхода",
  "смена сегодня",
  "смена завтра",
  "прозрачная оплата",
  "рейтинг исполнителей",
  "защита работников",
  "подбор под задачу",
];

export function Marquee() {
  const line = items.join(" — ");
  const doubled = `${line} — ${line} — `;

  return (
    <div
      className="overflow-hidden border-b border-rule bg-black py-2 text-paper"
      aria-hidden
    >
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]">
        <span className="px-4">{doubled}</span>
        <span className="px-4">{doubled}</span>
      </div>
    </div>
  );
}
