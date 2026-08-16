"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  wide?: boolean;
}

/** Unified modal (magnific-popup replacement). */
export function Modal({ isOpen, onClose, title, children, wide = false }: ModalProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div className={cn("modal-box", isOpen && "is-open")} role="dialog" aria-modal="true" aria-label={title}>
      <div className={cn("modal-overlay", isOpen && "is-open")} onClick={onClose} />
      <div ref={ref} className={cn("modal-card", wide && "max-w-3xl")} onClick={(e) => e.stopPropagation()}>
        <div className="mb-5 flex items-center justify-between">
          {title && <h3 className="text-xl font-extrabold text-navy-900">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-100 text-navy-900 transition-colors hover:bg-gold-500 hover:text-navy-950"
          >
            <X size={17} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}