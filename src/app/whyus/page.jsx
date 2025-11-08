"use client";
import { motion } from "framer-motion";
import CoreValue from "../corevalue/page";
import Image from "next/image";


const VALUES = [
  {
    icon: "🤝",
    title: "Built Around You",
    desc: "We prioritize understanding real needs, adapting quickly, and staying connected throughout the journey.",
  },
  {
    icon: "🏭",
    title: "Insight-Driven Execution",
    desc: "We bring deep industry knowledge, allowing us to anticipate challenges and identify the smartest paths forward.",
  },
  {
    icon: "🌱",
    title: "Driven by Principles",
    desc: "We hold ourselves accountable to ethics, empathy, and long-term value — not just delivery.",
  },
  {
    icon: "💰",
    title: "Quality Without Compromise",
    desc: "We create solutions that are efficient and scalable — while staying respectful of budgets.",
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection({ showHero = true }) {
  return (
    <section className="relative bg-[#020617] text-white overflow-hidden">

      {/* Optional Hero Image */}
      {showHero && (
  <div className="relative w-full h-[45vh] md:h-[55vh]">
    <Image
      src="/aboutUs.png"
      alt="About Us Hero"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>
)}


      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#03091b] via-[#020617] to-black" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(63,94,251,0.12),transparent_70%)] blur-[120px]" />

      {/* Intro */}
      <div className="w-[80%] mx-auto px-4 py-20 text-left text-blue-100/85 text-[17px] leading-[1.85] space-y-6">
        <p>
          We started in 2025 with a mission to deliver reliable, high–quality technology solutions
          at fair pricing. What began as a focused team is now a growing family driven by curiosity,
          collaboration, and craftsmanship.
        </p>

        <p>
          Our strong foundation in <span className="text-blue-300 font-medium">AI/ML, Cloud, and Data Engineering</span>
          enables us to help organizations adopt emerging technologies with clarity and confidence — supported
          by our own accelerators and product frameworks.
        </p>

        <p>
          Being new encourages us to stay sharp — to listen better, improve faster, and consistently earn trust
          through outcomes and relationships that last.
        </p>
      </div>

      {/* Section Heading */}
      <div className="text-center mb-14">
        <h3 className="text-3xl font-bold text-blue-200">What Sets Us Apart</h3>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
      >
        {VALUES.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative rounded-3xl p-8 bg-[#0a0f1f]/60 border border-white/10 
            shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_0_40px_rgba(0,0,0,0.6)] 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] backdrop-blur-xl 
            transition-all duration-500"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-3 text-blue-100">{item.title}</h3>
            <p className="text-sm text-blue-200/80 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Core Value Table Section */}
      <CoreValue />
    </section>
  );
}
