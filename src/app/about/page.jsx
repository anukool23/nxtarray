"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Globe,
  TrendingUp,
  Star,
  ArrowRight,
  Handshake,
  Eye,
} from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Customer-Centricity",
    points: [
      "Relentless focus on client success by leveraging deep domain knowledge",
      "Work with a nimble mindset",
      "Do whatever it takes to meet customer needs",
    ],
  },
  {
    icon: ArrowRight,
    title: "Innovation",
    points: [
      "Constantly challenging the status quo",
      "Generating new insights and creative solutions for clients",
    ],
  },
  {
    icon: Users,
    title: "Honesty & Accountability",
    points: [
      "Holding ourselves accountable for our commitments",
      "Maintaining open communication while solving business problems",
      "Owning our mistakes and weaknesses",
      "Focusing on solutions, not problems",
    ],
  },
  {
    icon: Handshake,
    title: "Collaboration & People-Centricity",
    points: [
      "Working together as teams and serving as thinking partners for clients",
      "Valuing collaboration and teamwork",
      "Prioritizing the happiness, fulfillment, and growth of people",
    ],
  },
  {
    icon: Eye,
    title: "Mindfulness",
    points: [
      "Being fully present in all that we do",
      "Staying observant and aware",
      "Remaining intentional in our actions",
    ],
  },
  {
    icon: Award,
    title: "Authenticity",
    points: [
      "I mean what I say and do",
      "I own my mistakes and weaknesses",
      "I stay true to my values",
    ],
  },
  {
    icon: Target,
    title: "Customer Focus & Complete Ownership",
    points: [
      "I work with a nimble mindset",
      "I do whatever it takes to meet customer needs",
      "The buck stops with me",
      "I focus on solutions, not problems",
    ],
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    points: [
      "I invest in learning new skills",
      "I frequently think of ways to improve efficiency and productivity",
    ],
  },
];

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -6, boxShadow: "0 14px 40px rgba(2,6,23,0.6)", transition: { duration: 0.18 } },
};

const iconFloat = {
  float: { y: [0, -6, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
};

export default function OurValues() {
  const router = useRouter();

  return (
    <section
      aria-labelledby="values-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.14) 0%, transparent 12%), radial-gradient(900px 500px at 90% 85%, rgba(16,185,129,0.08) 0%, transparent 18%), linear-gradient(180deg,#07040b 0%, #2a103d 35%, #18306b 100%)",
      }}
    >
      {/* ambient glow decor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 w-[36rem] h-[36rem] rounded-full blur-[80px] opacity-30"
        style={{ background: "conic-gradient(from 120deg at 30% 30%, rgba(124,58,237,0.6), rgba(99,102,241,0.45), rgba(6,182,212,0.35))" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] bottom-[-6rem] w-[28rem] h-[28rem] rounded-full blur-[48px] opacity-20"
        style={{ background: "radial-gradient(circle at 70% 70%, rgba(96,165,250,0.25), transparent 40%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 id="values-heading" className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            What’s it like to work with us?
          </h2>
          <p className="mt-3 text-lg text-indigo-100/80 max-w-2xl mx-auto">
            Our values guide everything we do — from product decisions to how we support our teammates and customers.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div variants={containerVariant} initial="hidden" animate="show" className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, points }, idx) => (
            <motion.article
              key={idx}
              variants={cardVariant}
              whileHover="hover"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => (e.key === "Enter" ? router.push("/contact") : null)}
              onClick={() => router.push("/contact")}
              className="relative group rounded-2xl p-6 overflow-hidden cursor-pointer"
              style={{
                // outer gradient border effect simulated by background + padding
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.04)",
                boxShadow: "0 8px 30px rgba(2,6,23,0.55)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {/* gradient border accent (top-left) */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(124,58,237,0.14), rgba(99,102,241,0.12), rgba(16,185,129,0.06))",
                  maskImage: "linear-gradient(#000, rgba(0,0,0,0))",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon + title */}
                <div className="flex items-center gap-4">
                  {/* glowing orb */}
                  <motion.div
                    variants={iconFloat}
                    animate="float"
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(59,130,246,0.08))",
                      boxShadow: "0 6px 20px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.03)",
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
                    <p className="mt-1 text-sm text-indigo-100/70">What drives us</p>
                  </div>
                </div>

                {/* points */}
                <ul className="mt-5 space-y-3 flex-1">
                  {points.map((p, i) => (
                    <motion.li
                      key={i}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="text-sm text-indigo-100/75 flex items-start gap-3"
                    >
                      <span
                        className="mt-1 inline-flex items-center justify-center w-3 h-3 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg,#7c3aed 0%, #60a5fa 100%)",
                          boxShadow: "0 6px 20px rgba(99,102,241,0.12)",
                        }}
                      />
                      <span className="leading-snug">{p}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* subtle CTA on card */}
                <div className="mt-5 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/contact");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-400 text-white font-medium shadow-md hover:brightness-105 transition"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-sm text-indigo-200/60">Trusted / Transparent</div>
                </div>
              </div>

              {/* hover glow */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  boxShadow: "0 30px 80px rgba(88,72,255,0.12)",
                }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Contact CTA / Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="mt-12 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(90deg, rgba(124,58,237,0.12), rgba(59,130,246,0.06))",
            border: "1px solid rgba(255,255,255,0.04)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 18px 60px rgba(2,6,23,0.6)",
          }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Get in touch with NxtArray</h3>
            <p className="mt-1 text-indigo-100/80">Schedule a call — we’re always happy to help.</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-lg hover:brightness-105 transition"
            >
              Contact Us
            </button>

            <button
              onClick={() => router.push("/career/submit")}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/6 text-white/90 hover:bg-white/8 transition"
            >
              Join Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
