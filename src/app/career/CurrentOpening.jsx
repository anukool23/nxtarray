"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const jobs = [
  { title: "Full-Stack Engineer", category: "Engineering", experience: "3-8 Years", location: "Remote" },
  { title: "Backend Engineer", category: "Engineering", experience: "3-8 Years", location: "Remote" },
  { title: "Digital Marketing", category: "Marketing", experience: "3-8 Years", location: "Remote" },
  { title: "Data Scientist", category: "Engineering", experience: "3-8 Years", location: "Remote" },
  { title: "Business Development Executive", category: "Operations", experience: "3-8 Years", location: "Remote" },
  { title: "Others", category: "Others", experience: "3-8 Years", location: "Remote" },
];

export default function CurrentOpening() {
  const [filter, setFilter] = useState("All Job Category");
  const router = useRouter();

  const categories = ["All Job Category", "Engineering", "Marketing", "Operations"];
  const filteredJobs = filter === "All Job Category" ? jobs : jobs.filter((job) => job.category === filter);

  return (
    <div className="min-h-screen bg-cyan-800 py-12 px-6 md:px-16">
      <h1 className="text-4xl font-extrabold text-[#1e293b] mb-6 text-center tracking-wide">
        🚀 Current Openings
      </h1>
      <p className="text-[#475569] text-center mb-10 max-w-lg mx-auto">
        Join our growing global remote team.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors duration-300
              ${
                filter === cat
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-teal-100 text-teal-700 hover:bg-teal-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredJobs.map((job, idx) => (
          <div
            key={idx}
            onClick={() => router.push("/career/submit")}
            className="cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex justify-between items-center border border-teal-200 hover:border-teal-400"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && router.push("/career/submit")}
          >
            <div>
              <h2 className="text-lg font-semibold text-[#1e293b]">{job.title}</h2>
              <p className="text-sm text-[#64748b] mt-1">
                {job.category} &nbsp;|&nbsp; {job.experience} &nbsp;|&nbsp; {job.location}
              </p>
            </div>
            <div className="text-2xl text-teal-600 font-bold select-none">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}


