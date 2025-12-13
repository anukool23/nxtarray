"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  { title: "Full-Stack Engineer", category: "Engineering", experience: "3-8 Years", location: "Remote" },
  { title: "Backend Engineer", category: "Engineering", experience: "3-8 Years", location: "Remote" },
  { title: "Digital Marketing", category: "Marketing", experience: "3-8 Years", location: "Remote" },
  { title: "Data Scientist", category: "Engineering", experience: "3-8 Years", location: "Remote" },
  { title: "Business Development Executive", category: "Operations", experience: "3-8 Years", location: "Remote" },
  { title: "Others", category: "Others", experience: "3-8 Years", location: "Remote" },
];

export default function HiringSection() {
  const router = useRouter();
  const [filter, setFilter] = useState("All Job Category");
  const categories = ["All Job Category", "Engineering", "Marketing", "Operations"];

  const filteredJobs = filter === "All Job Category" ? jobs : jobs.filter(j => j.category === filter);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    hover: { scale: 1.03, transition: { duration: 0.25 } },
  };

  return (
    <section
      aria-labelledby="hiring-heading"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#020617] text-white py-24"
    >
      {/* 🌌 Ambient Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-15%] w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)] blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_70%)] blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)] blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* 🩵 Intro Section */}
        <div className="text-center mb-16">
          <h2
            id="hiring-heading"
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          >
            Join Our Team
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-blue-100/90 leading-relaxed">
            Shape the future with innovation and integrity. Explore roles that challenge and inspire.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/career/submit"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.45)] transition-all"
            >
              Submit Resume
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-blue-400/40 text-blue-100 px-5 py-3 rounded-full bg-blue-900/20 hover:bg-blue-800/30 transition-all"
            >
              View Openings
            </button>
          </div>
        </div>

        {/* 🧩 Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-3 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    filter === cat
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                      : "bg-blue-950/40 text-blue-200/80 hover:bg-blue-900/40"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 💼 Job Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {filteredJobs.map((job, idx) => (
            <motion.article
              key={idx}
              variants={cardVariant}
              whileHover="hover"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => (e.key === "Enter" ? router.push("/contact") : null)}
              onClick={() => router.push("/contact")}
              className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group border border-blue-400/20 backdrop-blur-2xl
                bg-gradient-to-br from-[#0d111c]/90 via-[#0b0f1a]/85 to-[#090d18]/90
                shadow-[inset_0_0_25px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.4)] 
                hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />

              <div className="absolute inset-0 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                <div className="flex-1 min-w-0">
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/40 text-blue-100 border border-blue-700/30">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 inline-block" />
                      {job.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-blue-100">{job.title}</h3>
                  <p className="mt-2 text-sm text-blue-200/90">
                    {job.experience} • {job.location}
                  </p>
                  <p className="mt-4 text-sm text-blue-100/70 leading-relaxed">
                    Be part of a forward-thinking, remote-first team delivering exceptional digital experiences.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); router.push("/contact"); }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); alert('Saved — this is a demo action.'); }}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-blue-950/50 text-blue-100/90 hover:bg-blue-900/50 transition-all"
                    >
                      Save
                    </button>
                  </div>
                </div>

                {/* 💡 Accent Glow on Right */}
                <div className="w-36 h-36 md:w-40 md:h-40 flex-shrink-0 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/60 to-blue-900/70" />
                  <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-16 text-center text-sm text-blue-200/70">
          Can't find the right fit? Submit your resume — we’ll reach out when we have a match.
        </p>
      </div>
    </section>
  );
}
