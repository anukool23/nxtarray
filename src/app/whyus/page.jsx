"use client";
import Image from "next/image";
import CoreValue from "../corevalue/page";

const VALUES = [
  {
    icon: "🤝",
    title: "Customer-Centric Approach",
    desc: "We provide personalised engagement, transparent communication, and the flexibility to adapt to evolving needs.",
  },
  {
    icon: "🏭",
    title: "Industry Expertise",
    desc: "We anticipate challenges and seize opportunities with deep knowledge of market trends, enabling unique and effective solutions.",
  },
  {
    icon: "🌱",
    title: "Strong Values",
    desc: "We are committed to ethical practices, empathy, and social responsibility in every interaction and decision.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "We offer the best balance of high-quality delivery and cost efficiency without compromise.",
  },
];

export default function AboutSection({ showHero = true }) {
  return (
    <section className="relative bg-[#020617] text-white overflow-hidden w-full">
      {/* Optional Hero Image */}
      {showHero && (
        <div className="relative w-full h-[45vh] md:h-[55vh]">
          <Image
            src="/aboutUs.jpg"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* ✅ Text at bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              Our Story
            </h1>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#03091b] via-[#020617] to-black" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(63,94,251,0.12),transparent_70%)] blur-[120px]" />

      {/* Intro Text */}
      <div className="w-[80%] mx-auto px-4 py-20 text-left text-blue-100/85 text-[17px] leading-[1.85] space-y-6">
        <p>
          We started in 2025 as a Technology company with main aim to deliver
          quality services with competitive pricing and are now a growing
          family, what drives us is the desire to continuously improve and
          innovate helping turn ideas into reality.
        </p>

        <p>
          Our Innovation and new technology focus means that we have created a
          niche in the{" "}
          <span className="text-blue-300 font-medium">
            AI/ML, Cloud, and Data Engineering
          </span>{" "}
          space and we have our products also to accelerate the journey.
        </p>

        <p>
          Being new carries it’s own challenges but that also means we have to
          be different and best in your offerings to attract talent and
          customers.
        </p>
      </div>

      {/* Section Header */}
      <div className="text-center mb-14">
        <h3 className="text-3xl font-bold text-blue-200">What Sets Us Apart</h3>
      </div>

      {/* ✅ Full-width glitter grid table */}
      {/* ✅ Full-width CoreValue-style grid */}
      {/* ✅ Full-Width Grid with CoreValue Border Layout */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {VALUES.map(({ icon, title, desc }, i) => {
          const isLastRow = i >= 4; // because 4 columns in first row
          const isFirstColumn = i % 4 === 0;

          return (
            <li
              key={i}
              className={`
          p-10 flex flex-col gap-4 text-left relative text-blue-100/80

          ${
            !isLastRow
              ? "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-gradient-to-r after:from-blue-800/20 after:via-blue-500/60 after:to-blue-800/20"
              : ""
          }

          ${
            !isFirstColumn
              ? "before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[1px] before:bg-gradient-to-b before:from-blue-800/20 before:via-blue-500/60 before:to-blue-800/20"
              : ""
          }
        `}
            >
              <div className="text-4xl text-blue-300">{icon}</div>

              <h3 className="text-lg font-semibold text-blue-100">{title}</h3>

              <p className="text-sm leading-relaxed">{desc}</p>
            </li>
          );
        })}
      </ul>

      {/* Core Values Below */}
      <CoreValue />
    </section>
  );
}
