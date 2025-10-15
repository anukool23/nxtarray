// components/CoreValuesThemes.jsx
"use client";

import { motion } from "framer-motion";

/* ---------- Shared Data ---------- */
const VALUES = [
  {
    title: "Continuous Evolvement",
    bullets: [
      "We encourage ongoing innovation to new tech and emerging market trends",
      "We promote continuous learning, improvement, and optimisation of processes for sustained growth",
    ],
  },
  {
    title: "Inclusion",
    bullets: [
      "We foster a workplace culture where diverse perspectives and backgrounds are valued and respected",
      "We encourage equal opportunities and participation for everyone, driving creativity and collaboration.",
    ],
  },
  {
    title: "Resilience",
    bullets: [
      "We don’t give up",
      "We maintain strength and adaptability to sustain performance under changing or adverse conditions.",
    ],
  },
  {
    title: "Customer Centricity",
    bullets: [
      "We understand and deliver solutions that align with customer needs and expectations",
      "We build lasting relationships by prioritising customer satisfaction, trust, and by providing personalised experiences",
    ],
  },
  {
    title: "Lead",
    bullets: [
      "We drive innovation and growth by empowering others and leading by example",
      "Our teams work towards a shared vision with clarity, confidence, and accountability",
    ],
  },
  {
    title: "Empathy",
    bullets: ["We share the feelings and perspectives of others with genuine care."],
  },
];

/* ---------- Utility Variants ---------- */
const container = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } };
const card = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.9, 0.3, 1] } } };

/* ======================================================================
   1) CoreValuesApple - Glassmorphism + Motion Blur + Parallax subtle
   - Light frosted cards with soft reflections, subtle sheen sweep on hover
   ====================================================================== */
export function CoreValuesApple() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900">Core Values — Glass</h2>
        <p className="mt-2 text-slate-600">Clean, frosted cards with elegant motion and soft sheen.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <motion.article
            key={i}
            variants={card}
            whileHover={{ translateY: -8 }}
            className="relative overflow-hidden rounded-3xl p-6 bg-white/60 border border-white/40 backdrop-blur-md shadow-lg"
            style={{ WebkitBackdropFilter: "blur(8px)" }}
          >
            {/* reflection sheen */}
            <div className="absolute -inset-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{v.title}</h3>
            <ul className="text-slate-700 text-sm space-y-2">
              {v.bullets.map((b, idx) => (
                <li key={idx} className="leading-snug">• {b}</li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs text-slate-500">Trusted • Human</span>
              <button className="text-sm font-semibold text-slate-800 bg-white/90 px-3 py-1 rounded-md shadow-sm">Learn</button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ======================================================================
   2) CoreValuesTesla - Ultra Minimal Futuristic Black & White
   - Stark dark background, crisp white cards with precise spacing
   ====================================================================== */
export function CoreValuesTesla() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Core Values — Minimal Tech</h2>
        <p className="text-slate-400 mt-2">Bold, minimal presentation with razor-sharp typography.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.03, boxShadow: "0 30px 80px rgba(0,0,0,0.7)" }}
            className="p-8 rounded-2xl bg-white text-black border border-black/10"
          >
            <h3 className="text-2xl font-semibold mb-3">{v.title}</h3>
            <div className="text-sm text-slate-700 space-y-2">
              {v.bullets.map((b, idx) => <p key={idx}>{b}</p>)}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500 uppercase">Our Commitment</span>
              <svg width="18" height="18" className="text-slate-700" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ======================================================================
   3) CoreValuesCyberpunk - Neon Glow + Dark Grid + Holographic
   - Vibrant neon glows, glass edges, animated accent lines
   ====================================================================== */
export function CoreValuesCyberpunk() {
  return (
    <section className="py-24 px-6 relative" style={{ background: "linear-gradient(180deg,#050014,#0b0422)" }}>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">Core Values — Neon</h2>
        <p className="text-indigo-200/70 mt-2">Holographic cards, neon edges and vibrant accents.</p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <motion.div key={i} variants={card} initial="hidden" animate="show" whileHover={{ scale: 1.03 }} className="relative rounded-2xl p-6 bg-gradient-to-br from-[#07122a] to-[#0b1630] border border-[#6b21a8]/40 shadow-[0_10px_40px_rgba(99,102,241,0.08)] overflow-hidden">
            {/* neon outline */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 40px rgba(124,58,237,0.06), 0 8px 30px rgba(59,130,246,0.04)" }} />
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">{v.title}</h3>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#7c3aed,#60a5fa)", boxShadow: "0 8px 24px rgba(124,58,237,0.12)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.2"/></svg>
                </div>
              </div>
              <div className="mt-4 text-sm text-indigo-100/90 space-y-2">
                {v.bullets.map((b, idx) => <p key={idx}>{b}</p>)}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-xs text-indigo-300/70">Reactive • Bold</span>
                {/* <button className="px-3 py-1 rounded-md text-sm font-semibold" style={{ background: "linear-gradient(90deg,#a78bfa,#60a5fa)", color: "#051129" }}>Explore</button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ======================================================================
   4) CoreValuesAIAura - Liquid Gradients + Soft Orbs + Motion
   - Smooth purple/blue gradients with floating orbs & soft motion
   ====================================================================== */
export function CoreValuesAIAura() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg,#0b1226,#07102a 40%, #020617 100%)" }}>
      <div className="absolute -left-20 -top-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.24), transparent 35%)" }} />
      <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full blur-2xl opacity-25" style={{ background: "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.22), transparent 35%)" }} />

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Core Values</h2>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <motion.article key={i} variants={card} whileHover={{ y: -8 }} className="relative rounded-3xl p-6 bg-gradient-to-br from-indigo-900/60 to-sky-900/50 border border-indigo-700/30 text-white shadow-lg overflow-hidden">
            {/* floating accent */}
            <div className="absolute -inset-1 rounded-3xl" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.06), rgba(59,130,246,0.04))", filter: "blur(20px)" }} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
              <div className="text-sm text-slate-200 space-y-2">
                {v.bullets.map((b, idx) => <p key={idx}>{b}</p>)}
              </div>
              <div className="mt-5 flex justify-between items-center">
                {/* <span className="text-xs text-sky-200/80">Adaptive</span> */}
                {/* <button className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md text-sm font-medium">Explore</button> */}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ======================================================================
   5) CoreValuesLuxury - Gold Accents + Deep Charcoal + Soft Shadows
   - Premium, luxury feel with gold strokes and refined spacing
   ====================================================================== */
export function CoreValuesLuxury() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg,#050407,#0b0b0b)" }}>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Core Values — Luxury</h2>
        <p className="text-slate-400 mt-2">Gold accents, deep shadows, and elegant spacing.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <motion.div key={i} variants={card} whileHover={{ translateY: -6, scale: 1.01 }} className="relative rounded-2xl p-7 bg-gradient-to-br from-slate-900 to-slate-800 border border-[#2b2b2b] shadow-[0_30px_80px_rgba(2,2,2,0.7)]">
            {/* gold stroke */}
            <div className="absolute -inset-px rounded-2xl" style={{ pointerEvents: "none", mask: "linear-gradient(#000,#000)", boxShadow: "inset 0 0 0 1px rgba(255,215,130,0.06)" }} />
            <div className="relative z-10 text-white">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#d4af37,#ffd88a)", boxShadow: "0 8px 30px rgba(212,175,55,0.12)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l2.2 4.5L19 8l-3.6 2.8L16.4 16 12 13.6 7.6 16l1  -5.2L5 8l4.8-1.5L12 2z" fill="rgba(0,0,0,0.05)"/>
                  </svg>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-200 space-y-2">
                {v.bullets.map((b, idx) => <p key={idx}>{b}</p>)}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-slate-400">Heritage • Quality</span>
                <button className="px-3 py-1 rounded-md text-black font-semibold" style={{ background: "linear-gradient(90deg,#ffdf7a,#ffd88a)" }}>Discover</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ======================================================================
   6) CoreValuesWeb3 - Futuristic Grid, Mono-like fonts, programmable look
   - Monospace accents, grid lines, subtle animation
   ====================================================================== */
export function CoreValuesWeb3() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg,#071022,#03102a)" }}>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">Core Values — Web3 Grid</h2>
        <p className="text-slate-300 mt-2">Futuristic grid, mono accents and crisp micro-animations.</p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <motion.div key={i} variants={card} initial="hidden" animate="show" whileHover={{ scale: 1.03 }} className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.01),transparent)]" />
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{v.title}</h3>
                  <div className="text-sm text-slate-300 space-y-2">
                    {v.bullets.map((b, idx) => <p key={idx}>{b}</p>)}
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono px-3 py-1 rounded bg-slate-800/60">0x{(i+1).toString(16).padStart(2,"0")}</div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">Programmable • Open</span>
                <button className="text-sm px-3 py-1 rounded bg-indigo-600/80 text-white font-semibold">Inspect</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// export  {
//   CoreValuesApple,
//   CoreValuesTesla,
//   CoreValuesCyberpunk,
//   CoreValuesAIAura,
//   CoreValuesLuxury,
//   CoreValuesWeb3,
// };
