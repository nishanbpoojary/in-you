import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundPosition: "center 30%",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay — light at centre for text legibility, darker at top/bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-white font-normal leading-tight mb-4">
          Unlock Wellness
        </h1>
        <p className="text-white/85 text-base md:text-lg font-sans mb-10 tracking-wide">
          Everything you&apos;re searching for&hellip; is already within.
        </p>
        <Link
          href="#best-sellers"
          className="inline-flex items-center gap-2 border border-white/70 text-white text-sm font-sans px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200 tracking-wide"
        >
          Start Your Products
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs font-sans">
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
