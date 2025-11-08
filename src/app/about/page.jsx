"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import WhyUs from '../WhyUs/page';
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
  hover: { y: -6, boxShadow: "0 14px 40px rgba(30,64,175,0.6)", transition: { duration: 0.18 } },
};

const iconFloat = {
  float: { y: [0, -6, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
};

export default function OurValues() {
  const router = useRouter();

  return (<>
    <WhyUs/>
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#030712] to-[#0a0f1e] text-white">
      {/* ambient glow decor */}
      <div
        aria-hidden
        className="absolute -left-40 -top-40 w-[36rem] h-[36rem] rounded-full blur-[100px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[-10rem] bottom-[-6rem] w-[28rem] h-[28rem] rounded-full blur-[70px] opacity-20"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.25), transparent 40%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_25px_rgba(37,99,235,0.25)]">
            What’s it like to work with us?
          </h2>
          <p className="mt-3 text-lg text-blue-100/80 max-w-2xl mx-auto">
            Our values guide everything we do — from product decisions to how we support our teammates and customers.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map(({ icon: Icon, title, points }, idx) => (
            <motion.article
              key={idx}
              variants={cardVariant}
              whileHover="hover"
              tabIndex={0}
              role="button"
              onClick={() => router.push("/contact")}
              className="relative group rounded-2xl p-6 overflow-hidden cursor-pointer"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                border: "1px solid rgba(96,165,250,0.12)",
                boxShadow: "0 8px 30px rgba(2,6,23,0.55)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {/* blue glow border */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(37,99,235,0.25), rgba(14,165,233,0.18), rgba(96,165,250,0.15))",
                  maskImage: "linear-gradient(#000, rgba(0,0,0,0))",
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4">
                  <motion.div
                    variants={iconFloat}
                    animate="float"
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(59,130,246,0.1))",
                      boxShadow:
                        "0 6px 20px rgba(37,99,235,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
                      border: "1px solid rgba(96,165,250,0.2)",
                    }}
                  >
                    <Icon className="w-7 h-7 text-blue-100" />
                  </motion.div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-blue-50">{title}</h3>
                    <p className="mt-1 text-sm text-blue-100/70">What drives us</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 flex-1">
                  {points.map((p, i) => (
                    <motion.li key={i} className="text-sm text-blue-100/80 flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex items-center justify-center w-3 h-3 rounded-full"
                        style={{
                          background: "linear-gradient(90deg,#2563eb 0%, #38bdf8 100%)",
                          boxShadow: "0 0 12px rgba(37,99,235,0.35)",
                        }}
                      />
                      <span className="leading-snug">{p}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* subtle CTA */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/contact");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium shadow-md hover:brightness-105 transition"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-sm text-blue-100/60">Trusted / Transparent</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="mt-14 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-500/10"
          style={{
            background:
              "linear-gradient(90deg, rgba(30,58,138,0.25), rgba(37,99,235,0.15))",
            boxShadow: "0 18px 60px rgba(37,99,235,0.18)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Get in touch with NxtArray
            </h3>
            <p className="mt-1 text-blue-100/80">
              Schedule a call — we’re always happy to help.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow-lg hover:brightness-110 transition"
            >
              Contact Us
            </button>

            <button
              onClick={() => router.push("/career/submit")}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 text-white/90 hover:bg-white/10 transition"
            >
              Join Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    </>);
}
