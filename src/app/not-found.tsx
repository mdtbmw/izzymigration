import Link from "next/link";
import { Compass, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-900 px-6 py-24">
      <div className="glow-orb h-72 w-72 bg-gold-400/25 -top-24 -left-24" />
      <div className="glow-orb h-72 w-72 bg-navy-600/40 -bottom-24 -right-24" />
      <div className="relative text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
          <Compass size={30} />
        </span>
        <p className="mt-6 font-display text-7xl font-extrabold tracking-tight text-white md:text-8xl">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">This Route Has No Visa</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
          The page you are looking for does not exist or has moved. Let us guide you back to open territories.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-[14px] font-bold text-navy-950 transition-colors hover:bg-gold-400"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[14px] font-bold text-white transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            Explore Programmes <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}