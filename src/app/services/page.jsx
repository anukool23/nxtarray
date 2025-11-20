"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const serviceGroups = [
  {
    slug: "digital-engineering",
    title: "Digital Engineering",
    subtitle: "Your Vision + Our Engineering",
    description: "End-to-end engineering for scalable, intuitive digital products.",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    subtitle: "Transform data into clarity & insight",
    description: "Data pipelines, warehousing, analytics and decision intelligence.",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    subtitle: "Discover the possibilities of tomorrow, today",
    description: "AI strategy, machine learning, automation & intelligent workflows.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Secure, Smart & Scalable Cloud Solutions",
    description: "Cloud modernization, migration, DevOps automation & optimization.",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    subtitle: "We hit cyber threats hard",
    description: "Protection, detection, rapid response & long-term resilience.",
  },
];



export default function ServicesGrid3D() {
  return (
    <section className="relative min-h-screen py-24 text-white overflow-hidden bg-[#020617]">
      {/* Ambient blue glow background */}
      <div className="absolute inset-0 z-0 bg-[#020617]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.12),transparent_80%)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          Our Premium Services
        </h2>
        <p className="text-center text-blue-100/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          Solutions engineered to scale — aligned with your vision and powered by modern technology.
        </p>

        {/* Services Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
  {serviceGroups.map((service) => (
    <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
      <motion.div
        className="
          h-full rounded-3xl p-[1.5px]
          bg-gradient-to-br from-blue-900/40 via-blue-950/20 to-transparent
          hover:from-blue-600/40 hover:via-blue-900/20 hover:to-blue-700/40
          transition-all duration-500 ease-out shadow-[0_0_30px_rgba(0,0,0,0.4)]
          hover:shadow-[0_0_45px_rgba(37,99,235,0.25)]
        "
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 240, damping: 20 }}
      >
        <div
          className="
            h-full rounded-3xl p-8
            bg-gradient-to-br from-black/60 via-slate-900/60 to-black/60
            backdrop-blur-2xl border border-blue-800/20
            hover:border-blue-500/30 transition-all
          "
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-200">
            {service.title}
          </h3>
          <p className="text-base font-medium mb-4 text-blue-300/90">
            {service.subtitle}
          </p>
          <p className="text-blue-100/70 leading-relaxed text-sm md:text-[15px]">
            {service.description}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-all">
            Learn More
          </span>
        </div>
      </motion.div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
}
