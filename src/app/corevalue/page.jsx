"use client";
import { Lightbulb, Users, Shield, Target, Sparkles, Heart } from "lucide-react";

const VALUES = [
  {
    title: "Continuous Evolvement",
    bullets: [
      "We encourage ongoing innovation aligned with emerging trends.",
      "We promote continuous learning and improvement for sustained growth.",
    ],
    Icon: Sparkles,
  },
  {
    title: "Inclusion",
    bullets: [
      "We foster a workplace culture where diverse perspectives are valued.",
      "We encourage equal opportunities and collaboration.",
    ],
    Icon: Users,
  },
  {
    title: "Resilience",
    bullets: [
      "We don’t give up — we adapt under pressure.",
      "We stay strong through change and uncertainty.",
    ],
    Icon: Shield,
  },
  {
    title: "Customer Centricity",
    bullets: [
      "We design around customer needs and experiences.",
      "We build lasting relationships based on trust.",
    ],
    Icon: Target,
  },
  {
    title: "Lead",
    bullets: [
      "We empower others by leading with clarity and confidence.",
      "We inspire growth and accountability.",
    ],
    Icon: Lightbulb,
  },
  {
    title: "Empathy",
    bullets: [
      "We understand and care deeply about others’ perspectives.",
    ],
    Icon: Heart,
  },
];

export default function CoreValue() {
  return (
    <section className="bg-[#020617] py-24 text-white w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-blue-200">Core Values</h2>
        <p className="mt-4 text-blue-100/80 text-lg">
          The principles that define who we are and how we work.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {VALUES.map(({ title, bullets, Icon }, i) => {
          const isLastRow = i >= 3;
          const isFirstColumn = i % 3 === 0;
          const isLastColumn = i % 3 === 2;

          return (
            <li
              key={i}
              className={`
                p-8 flex flex-col gap-4 text-left
                border-slate-700/30

                ${!isLastRow ? "border-b" : ""}   /* remove border-bottom for row 2 */
                ${!isFirstColumn ? "border-l" : ""} /* add left borders only inside */
              `}
            >
              <Icon className="w-8 h-8 text-blue-300" />

              <h3 className="text-lg font-semibold text-blue-100">{title}</h3>

              <ul className="text-blue-100/70 text-sm space-y-1 leading-relaxed">
                {bullets.map((b, idx) => (
                  <li key={idx}>• {b}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
