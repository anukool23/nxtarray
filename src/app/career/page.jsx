"use client";

import Image from "next/image";
import Link from "next/link";
import CurrentOpening from "./CurrentOpening";

export default function HiringSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-white to-blue-50">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Hi</h2>
            <p className="max-w-2xl text-gray-600 mb-8 px-4">
                Some of the best stories start with a Hi. It could be to a
                connection, HR, or LinkedIn. Let’s start our new story.
            </p>

            <Link
                href="/career/submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
                Submit your resume
            </Link>

            <div className="mt-16 w-full max-w-4xl px-4">
                <CurrentOpening/>
            </div>
        </section>
    );
}
