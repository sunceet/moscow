type Variant = "hero" | "inline";

export function UrgencyCards({ variant = "hero" }: { variant?: Variant }) {
  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "grid min-w-0 grid-cols-2 border-t border-rule lg:hidden"
          : "grid min-w-0 grid-cols-2"
      }
    >
      <div className="flex min-w-0 flex-col gap-3 border-r border-rule bg-red p-4 text-paper sm:p-5">
        <span className="font-display text-[9px] font-bold uppercase tracking-[0.32em] opacity-75">
          Срочно
        </span>
        <p className="font-display text-[clamp(1.5rem,6vw,2.25rem)] font-black uppercase leading-none">
          Сегодня
        </p>
        <p className="text-xs leading-snug opacity-90 sm:text-sm">
          Бригада до вечера — не «на следующей неделе».
        </p>
      </div>
      <div className="stripe flex min-w-0 flex-col gap-3 p-4 sm:p-5">
        <span className="font-display text-[9px] font-bold uppercase tracking-[0.32em] text-ink-muted">
          Планово
        </span>
        <p className="font-display text-[clamp(1.5rem,6vw,2.25rem)] font-black uppercase leading-none text-ink">
          Завтра
        </p>
        <p className="text-xs leading-snug text-ink-muted sm:text-sm">
          Подбор с проверкой документов и явкой.
        </p>
      </div>
    </div>
  );
}
