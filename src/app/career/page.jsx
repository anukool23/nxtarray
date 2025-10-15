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
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    hover: { scale: 1.02, transition: { duration: 0.18 } },
  };

  return (
    <section
      aria-labelledby="hiring-heading"
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(42,6,68,1) 0%, rgba(60,13,115,1) 30%, rgba(32,91,255,1) 100%)",
      }}
    >
      {/* decorative aurora glows */}
      <div className="absolute -left-28 -top-24 w-96 h-96 rounded-full opacity-30 blur-3xl mix-blend-screen pointer-events-none" style={{ background: "radial-gradient(circle at 30% 30%, rgba(130,84,255,0.45), transparent 40%)" }} />
      <div className="absolute right-10 bottom-10 w-72 h-72 rounded-full opacity-25 blur-2xl mix-blend-screen pointer-events-none" style={{ background: "radial-gradient(circle at 70% 70%, rgba(64,199,255,0.25), transparent 40%)" }} />

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        {/* Intro */}
        <div className="text-center mb-14">
          <h2 id="hiring-heading" className="inline-flex items-center gap-3 text-5xl md:text-6xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-200 bg-clip-text text-transparent">👋</span>
            <span className="leading-tight">Hi</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-100/85 leading-relaxed">
            Some of the best stories start with a <span className="font-semibold text-white">Hi</span>. Share yours — join our team and help build impactful products.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/career/submit" className="inline-flex items-center gap-3 bg-white/95 text-purple-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition">
              Submit your resume
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-white/20 text-white/95 px-5 py-3 rounded-full bg-white/5 hover:bg-white/8 transition"
            >
              See Openings
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-3 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${filter === cat ? "bg-white/10 ring-1 ring-white/25 text-white shadow-lg" : "bg-white/6 text-white/80 hover:bg-white/8"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.map((job, idx) => (
            <motion.article
              key={idx}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => (e.key === "Enter" ? router.push("/career/submit") : null)}
              onClick={() => router.push("/career/submit")}
              variants={cardVariant}
              whileHover="hover"
              className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer"
              style={{
                // glass + subtle border
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 8px 30px rgba(16,24,40,0.35)",
              }}
            >
              {/* Card content layout */}
              <div className="absolute inset-0 p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Left content */}
                <div className="flex-1 min-w-0">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: job.category === "Engineering" ? "linear-gradient(90deg,#7c3aed,#4f46e5)" :
                                      job.category === "Marketing" ? "linear-gradient(90deg,#fb923c,#f97316)" :
                                      job.category === "Operations" ? "linear-gradient(90deg,#06b6d4,#0891b2)" :
                                      "linear-gradient(90deg,#a78bfa,#60a5fa)",
                          display: "inline-block",
                        }}
                      />
                      <span className="min-w-[6ch]">{job.category}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-2xl font-bold text-white truncate">{job.title}</h3>

                  <p className="mt-2 text-sm text-white/80 max-w-xl">
                    {job.experience} • {job.location}
                  </p>

                  <p className="mt-4 text-sm text-white/70 max-w-xl leading-relaxed">
                    Join a remote-first team focused on building reliable, scalable systems and great product experiences.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); router.push("/career/submit"); }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-white text-purple-800 hover:brightness-95 transition shadow-sm"
                    >
                      Apply Now
                    </button>

                    <button
                      onClick={(e) => { e.stopPropagation(); alert('Saved—this is a demo action.'); }}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white/5 text-white/90 hover:bg-white/8 transition"
                    >
                      Save
                    </button>
                  </div>
                </div>

                {/* Right decorative accent */}
                <div className="w-36 h-36 md:w-40 md:h-40 flex-shrink-0 rounded-xl relative overflow-hidden">
                  <div aria-hidden className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, rgba(124,58,237,0.65), rgba(59,130,246,0.55))`,
                      transform: "skewY(-6deg) translateY(-6px)",
                    }}
                  />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                    <defs>
                      <linearGradient id={`g-${idx}`} x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.35" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="100" height="100" fill={`url(#g-${idx})`} />
                  </svg>
                </div>
              </div>

              {/* subtle glow on hover (pseudo) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: "0 20px 40px rgba(88, 72, 255, 0.16)" }} />
            </motion.article>
          ))}
        </motion.div>

        {/* small footer note */}
        <p className="mt-12 text-center text-sm text-white/60">Can't find the right fit? Submit your resume and we'll reach out.</p>
      </div>
    </section>
  );
}
