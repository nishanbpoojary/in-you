"use client";

import { useState } from "react";
import Link from "next/link";

type Tab = "him" | "her" | "both";

interface Concern {
  id: string;
  label: string;
  title: string;
  description: string;
}

const TABS: { key: Tab; label: string }[] = [
  { key: "him", label: "For Him" },
  { key: "her", label: "For Her" },
  { key: "both", label: "For Both" },
];

const CONCERNS: Record<Tab, Concern[]> = {
  him: [
    {
      id: "cant-keep-hard",
      label: "MOST COMMON CONCERN",
      title: "Can't Keep It Hard",
      description:
        "Blood flow, nitric oxide and vascular health — all working against you. The erection is a health report most men never read.",
    },
    {
      id: "gym-performance",
      label: "USER STORY",
      title: "Gym Performance",
      description:
        "Stronger drive, pump and erections. Same mechanism. Same solution.",
    },
    {
      id: "performance-anxiety",
      label: "MOST COMMON CONCERN",
      title: "Performance Anxiety",
      description:
        "The mind and body are one system. Anxiety breaks the loop — InYou helps restore it.",
    },
  ],
  her: [
    {
      id: "low-libido",
      label: "MOST COMMON CONCERN",
      title: "Low Libido",
      description:
        "Hormonal imbalances affect desire and intimacy. The connection between body chemistry and confidence runs deeper than most realise.",
    },
    {
      id: "hormonal-balance",
      label: "USER STORY",
      title: "Hormonal Balance",
      description:
        "PCOS, stress and hormonal fluctuations impact more than fertility — they affect daily vitality.",
    },
    {
      id: "mood-energy",
      label: "MOST COMMON CONCERN",
      title: "Mood & Energy",
      description:
        "Fatigue and mood shifts that make it hard to feel present or connected.",
    },
  ],
  both: [
    {
      id: "stress-sleep",
      label: "MOST COMMON CONCERN",
      title: "Stress & Sleep",
      description:
        "Chronic stress is the silent killer of intimacy. Sleep quality, cortisol and sexual wellness are deeply interlinked.",
    },
    {
      id: "overall-wellness",
      label: "USER STORY",
      title: "Overall Wellness",
      description:
        "A holistic approach addressing root causes rather than chasing individual symptoms.",
    },
  ],
};

const BENTO_CARDS = {
  story: {
    tag: "USER STORY",
    title: "Can't Keep It Hard",
    body: "Blood flow, nitric oxide and vascular health — all working against you. The erection is a health report most men never read.",
  },
  gym: {
    tag: "USER STORY",
    title: "Gym Performance",
    body: "Stronger drive, pump and erections. Same mechanism.",
  },
};

export default function KnowYourWellness() {
  const [activeTab, setActiveTab] = useState<Tab>("him");
  const [activeConcern, setActiveConcern] = useState<string>(
    CONCERNS.him[0].id
  );

  const concerns = CONCERNS[activeTab];

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);
    setActiveConcern(CONCERNS[tab][0].id);
  }

  const selected = concerns.find((c) => c.id === activeConcern) ?? concerns[0];

  return (
    <section className="bg-[#F5F0EB] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] font-normal leading-tight mb-3">
            Know your{" "}
            <em className="not-italic italic font-serif">Sexual Wellness?</em>
          </h2>
          <p className="text-[#7A6E65] text-sm md:text-base font-sans">
            Discover targeted solutions, built for your specific concern.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-10 md:mb-14">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`text-sm md:text-base font-sans pb-1.5 transition-all duration-200 ${
                activeTab === tab.key
                  ? "text-[#1A1A1A] border-b-2 border-[#1A1A1A] font-medium"
                  : "text-[#7A6E65] hover:text-[#1A1A1A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content: left concern list + right bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
          {/* Left — concern list */}
          <div className="flex flex-col gap-4">
            {concerns.map((concern) => {
              const isActive = concern.id === activeConcern;
              return (
                <button
                  key={concern.id}
                  onClick={() => setActiveConcern(concern.id)}
                  className={`text-left rounded-2xl p-6 transition-all duration-200 ${
                    isActive
                      ? "bg-[#6B6855] text-white"
                      : "bg-[#E8E0D5] text-[#1A1A1A] hover:bg-[#DDD5C8]"
                  }`}
                >
                  <p
                    className={`text-xs font-sans tracking-widest uppercase mb-2 font-medium ${
                      isActive ? "text-white/60" : "text-[#7A6E65]"
                    }`}
                  >
                    {concern.label}
                  </p>
                  <h3
                    className={`font-serif text-xl md:text-2xl font-normal mb-3 leading-snug ${
                      isActive ? "text-white" : "text-[#1A1A1A]"
                    }`}
                  >
                    {concern.title}
                  </h3>
                  <p
                    className={`text-sm font-sans leading-relaxed ${
                      isActive ? "text-white/80" : "text-[#7A6E65]"
                    }`}
                  >
                    {concern.description}
                  </p>
                  {isActive && (
                    <div className="mt-5">
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-sans px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Know More <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right — bento grid */}
          <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-4">
            {/* Card A: Story text card — col 1, row 1 */}
            <div className="bg-[#EDE5DA] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[200px]">
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-[#7A6E65] mb-3 font-medium">
                  USER STORY
                </p>
                <h4 className="font-serif text-xl md:text-2xl text-[#1A1A1A] font-normal leading-snug mb-3">
                  {selected.title}
                </h4>
                <p className="text-sm text-[#7A6E65] font-sans leading-relaxed">
                  {selected.description}
                </p>
              </div>
              {/* Decorative quotation mark */}
              <span
                className="absolute bottom-2 right-4 font-serif text-[120px] leading-none text-[#C4A055]/20 select-none"
                aria-hidden="true"
              >
                &rdquo;
              </span>
            </div>

            {/* Card B: Gym image card — col 2, row 1 */}
            <div
              className="rounded-2xl overflow-hidden relative min-h-[200px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/concern-gym.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xs font-sans tracking-widest uppercase text-white/70 mb-1 font-medium">
                  USER STORY
                </p>
                <h4 className="font-serif text-lg md:text-xl text-white font-normal leading-snug">
                  Gym Performance
                </h4>
                <p className="text-xs text-white/75 font-sans mt-1 leading-relaxed">
                  Stronger drive, pump and erections. Same mechanism.
                </p>
              </div>
            </div>

            {/* Card C: Couple image card — col 1, row 2, tall */}
            <div
              className="rounded-2xl overflow-hidden relative bg-cover bg-center row-span-2"
              style={{
                backgroundImage: "url('/images/concern-couple.jpg')",
                minHeight: "320px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Card D: Eye image + text — col 2, row 2 */}
            <div className="rounded-2xl overflow-hidden relative bg-cover bg-center min-h-[180px]"
              style={{ backgroundImage: "url('/images/concern-eye.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xs font-sans tracking-widest uppercase text-white/70 mb-1 font-medium">
                  MOST COMMON CONCERN
                </p>
                <h4 className="font-serif text-lg text-white font-normal leading-snug">
                  {selected.title}
                </h4>
              </div>
            </div>

            {/* Card E: Text concern card — col 2, row 3 */}
            <div className="bg-[#6B6855] rounded-2xl p-6 flex flex-col justify-between min-h-[160px]">
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-white/60 mb-2 font-medium">
                  MOST COMMON CONCERN
                </p>
                <h4 className="font-serif text-xl text-white font-normal leading-snug mb-2">
                  {selected.title}
                </h4>
                <p className="text-xs text-white/75 font-sans leading-relaxed">
                  {selected.description}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-sans px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  Know More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
