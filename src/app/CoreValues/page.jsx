// "use client"
// import { motion } from "framer-motion";

// const VALUES = [
//   {
//     title: "Continuous Evolvement",
//     bullets: [
//       "We encourage ongoing innovation to new tech and emerging market trends",
//       "We promote continuous learning, improvement, and optimisation of processes for sustained growth",
//     ],
//   },
//   {
//     title: "Inclusion",
//     bullets: [
//       "We foster a workplace culture where diverse perspectives and backgrounds are valued and respected",
//       "We encourage equal opportunities and participation for everyone, driving creativity and collaboration.",
//     ],
//   },
//   {
//     title: "Resilience",
//     bullets: [
//       "We don’t give up",
//       "We maintain strength and adaptability to sustain performance under changing or adverse conditions.",
//     ],
//   },
//   {
//     title: "Customer Centricity",
//     bullets: [
//       "We understand and deliver solutions that align with customer needs and expectations",
//       "We build lasting relationships by prioritising customer satisfaction, trust, and by providing personalised experiences",
//     ],
//   },
//   {
//     title: "Lead",
//     bullets: [
//       "We drive innovation and growth by empowering others and leading by example",
//       "Our teams work towards a shared vision with clarity, confidence, and accountability",
//     ],
//   },
//   {
//     title: "Empathy",
//     bullets: ["We share the feelings and perspectives of others with genuine care."],
//   },
// ];

// /* ---------- Utility Variants ---------- */
// const container = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } };
// const card = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.9, 0.3, 1] } } };

// export default function CoreValues() {
//   return (
//       <section className="py-24 px-6" style={{ background: "linear-gradient(180deg,#0b1226,#07102a 40%, #020617 100%)" }}>
//       <div className="absolute -left-20 -top-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.24), transparent 35%)" }} />
//       <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full blur-2xl opacity-25" style={{ background: "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.22), transparent 35%)" }} />

//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-white">Core Values</h2>
//       </div>

//       <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {VALUES.map((v, i) => (
//           <motion.article key={i} variants={card} whileHover={{ y: -8 }} className="relative rounded-3xl p-6 bg-gradient-to-br from-indigo-900/60 to-sky-900/50 border border-indigo-700/30 text-white shadow-lg overflow-hidden">
//             {/* floating accent */}
//             <div className="absolute -inset-1 rounded-3xl" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.06), rgba(59,130,246,0.04))", filter: "blur(20px)" }} />
//             <div className="relative z-10">
//               <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
//               <div className="text-sm text-slate-200 space-y-2">
//                 {v.bullets.map((b, idx) => <p key={idx}>{b}</p>)}
//               </div>
//               <div className="mt-5 flex justify-between items-center">
//                 {/* <span className="text-xs text-sky-200/80">Adaptive</span> */}
//                 {/* <button className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md text-sm font-medium">Explore</button> */}
//               </div>
//             </div>
//           </motion.article>
//         ))}
//       </motion.div>
//     </section>

//   );
// }
