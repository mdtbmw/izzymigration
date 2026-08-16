import { cn } from "@/lib/utils";

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/** Unified section heading: eyebrow datum, Outfit title, optional lede. */
export function SectionHead({
  eyebrow,
  title,
  titleAccent,
  text,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadProps) {
  const centered = align === "center";
  return (
    <div className={cn("section-head", centered && "text-center", className)}>
      {eyebrow && <span className={cn("eyebrow", centered && "eyebrow--center")}>{eyebrow}</span>}
      <h2
        className={cn(
          "section-head__title",
          tone === "light" && "section-head__title--light"
        )}
      >
        {title}
        {titleAccent && <span className="section-head__title--gold"> {titleAccent}</span>}
      </h2>
      {text && (
        <p
          className={cn(
            "section-head__text",
            centered && "mx-auto",
            tone === "light" && "section-head__text--light"
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}