import { CheckCircle2 } from "lucide-react";

interface CheckListProps {
  items: string[];
  tone?: "dark" | "light";
  columns?: 1 | 2;
}

/** Unstyled list with gold check bullets used across sections. */
export function CheckList({ items, tone = "dark", columns = 1 }: CheckListProps) {
  return (
    <ul
      className="grid gap-3.5"
      style={{ gridTemplateColumns: columns === 2 ? "1fr 1fr" : "1fr" }}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] font-semibold" style={{ color: tone === "light" ? "#fff" : "var(--navy-900)" }}>
          <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-gold-500" strokeWidth={2.2} />
          <span className={tone === "light" ? "text-white/85" : "text-ink-dark"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}