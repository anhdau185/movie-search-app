"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MovieSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    const trimmed = input.trim();
    if (trimmed) {
      router.push(`/search?keyword=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <>
      <div className="mx-6 flex max-w-xl flex-1 space-x-2">
        <input
          type="text"
          placeholder="Search movies"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full rounded-md bg-white px-4 py-2 text-black focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="rounded-md bg-white px-4 py-2 font-semibold text-red-600 transition hover:bg-gray-100"
        >
          Search
        </button>
      </div>
    </>
  );
}
