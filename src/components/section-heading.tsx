type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  eyebrowClassName?: string;
  titleClassName?: string;
  dividerClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  eyebrowClassName = "",
  titleClassName = "",
  dividerClassName = "",
}: Props) {
  const center = align === "center";

  return (
    <>
      <p
        className={`${center ? "text-center" : ""} text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowClassName}`.trim()}
      >
        {eyebrow}
      </p>
      <h2
        className={`${center ? "text-center" : ""} mt-2 text-3xl leading-tight sm:text-4xl ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      <span
        className={`${center ? "mx-auto" : ""} mt-3 block h-1 w-16 rounded-full ${dividerClassName}`.trim()}
        aria-hidden
      />
    </>
  );
}
