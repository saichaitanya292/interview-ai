"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-black">
      <div className="text-center p-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          AI Interview Coach
        </h1>

        <p className="text-lg mb-8 text-zinc-600 dark:text-zinc-300">
          Practice real interview questions. Record your answers. Get instant AI feedback on clarity, confidence, and technical depth.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/interview"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Start Mock Interview
          </Link>

          <Link
            href="#"
            className="border border-gray-400 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}