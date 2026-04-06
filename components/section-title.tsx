type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionTitleProps) {
  const aligned = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${aligned}`}>
      {eyebrow ? <p className="text-xs uppercase tracking-[0.25em] text-brand">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
        {title}
        {highlight ? <span className="text-brand"> {highlight}</span> : null}
      </h2>
      {description ? <p className="mt-4 text-sm text-slate-300 sm:text-base">{description}</p> : null}
    </div>
  );
}
