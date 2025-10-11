"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const jobs = [
    {
        title: "Full-Stack Engineer",
        category: "Engineering",
        experience: "3-8 Years",
        location: "Remote",
    },
    {
        title: "Backend Engineer",
        category: "Engineering",
        experience: "3-8 Years",
        location: "Remote",
    },
    {
        title: "Digital Marketing",
        category: "Marketing",
        experience: "3-8 Years",
        location: "Remote",
    },
    {
        title: "Data Scientist",
        category: "Engineering",
        experience: "3-8 Years",
        location: "Remote",
    },
    {
        title: "Business Development Executive",
        category: "Operations",
        experience: "3-8 Years",
        location: "Remote",
    },
    {
        title: "Others",
        category: "Others",
        experience: "3-8 Years",
        location: "Remote",
    },
];

export default function CurrentOpening() {
    const [filter, setFilter] = useState("All Job Category");
    const router = useRouter();

    const categories = [
        "All Job Category",
        "Engineering",
        "Marketing",
        "Operations",
    ];
    const filteredJobs =
        filter === "All Job Category"
            ? jobs
            : jobs.filter((job) => job.category === filter);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-16">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-left md:text-center">
                Current openings
            </h1>

            {/* Dropdown */}
            <div className="max-w-xs mb-10">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* Job List */}
            <div className="max-w-4xl space-y-4 my-4">
                {filteredJobs.map((job, index) => (
                    <div
                        key={index}
                        onClick={() => router.push("/career/submit")}
                        className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex items-center justify-between border border-gray-100 hover:border-blue-300"
                    >
                        <div className="text-left">
                            <h2 className="text-lg font-semibold text-gray-900">
                                {job.title}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                {job.category} &nbsp;|&nbsp; {job.experience}{" "}
                                &nbsp;|&nbsp; {job.location}
                            </p>
                        </div>
                        <span className="text-2xl text-gray-400">→</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
