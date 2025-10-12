"use client";

import { useRouter } from "next/navigation";
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
    size: "w-8 h-8",
    color: "text-blue-700",
    title: "Customer-Centricity",
    points: [
      "Relentless focus on client success by leveraging our deep domain knowledge",
      "Work with a nimble mindset",
      "Do whatever it takes to meet customer needs",
    ],
  },
  {
    icon: ArrowRight,
    size: "w-8 h-8",
    color: "text-blue-700",
    title: "Innovation",
    points: [
      "Constantly challenging the status quo",
      "Generating new insights and creative solutions for clients",
    ],
  },
  {
    icon: Users,
    size: "w-8 h-8",
    color: "text-blue-700",
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
    size: "w-8 h-8",
    color: "text-blue-700",
    title: "Collaboration & People-Centricity",
    points: [
      "Working together as teams and serving as thinking partners for clients",
      "Valuing collaboration and teamwork",
      "Prioritizing the happiness, fulfillment, and growth of people",
    ],
  },
  {
    icon: Eye,
    size: "w-8 h-8",
    color: "text-blue-700",
    title: "Mindfulness",
    points: [
      "Being fully present in all that we do",
      "Staying observant and aware",
      "Remaining intentional in our actions",
    ],
  },
  {
    icon: Award,
    size: "h-10 w-10",
    color: "text-blue-700",
    title: "Authenticity",
    points: [
      "I mean what I say and do",
      "I own my mistakes and weaknesses",
      "I stay true to my values",
    ],
  },
  {
    icon: Target,
    size: "h-10 w-10",
    color: "text-blue-700",
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
    size: "h-10 w-10",
    color: "text-blue-700",
    title: "Continuous Improvement",
    points: [
      "I invest in learning new skills",
      "I frequently think of ways to improve efficiency and productivity",
    ],
  },
];

export default function OurValues() {
  const router = useRouter();

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 my-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 mb-3">
          What’s it like to work with us?
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Our values guide all that we do. These include:
        </h3>
        <p className="text-gray-600 text-lg">
          We are vocal and passionate about our values.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto py-8">
        {values.map(({ icon: Icon, size, color, title, points }, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-all"
          >
            <Icon className={`${size} ${color}`} />
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{title}</h3>
            <ul className="space-y-2 text-gray-600">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1 text-sm">○</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-yellow-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get in touch with NxtArray
            </h3>
            <p className="text-gray-800">
              Schedule a call with an NxtArray expert. We’re always happy to help.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-gray-900 font-medium px-6 py-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
