"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import whyus from '../about/page';
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
    <whyus/>
        </>);
}
