import Link from "next/link";

const SUGGESTED_KEYWORDS = [
  "Batman",
  "Inception",
  "Avengers",
  "Matrix",
  "Iron Man",
];

export default function HomePage() {
  return (
    <div className="px-6 py-20 text-center">
      <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
        Discover movies instantly 🎬
      </h1>
      <p className="mb-8 text-gray-400">Try searching for one of these:</p>
      <div className="flex flex-wrap justify-center gap-3">
        {SUGGESTED_KEYWORDS.map((keyword) => (
          <Link
            key={keyword}
            href={`/search?keyword=${encodeURIComponent(keyword)}`}
            className="rounded-xl bg-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-600"
          >
            {keyword}
          </Link>
        ))}
      </div>
    </div>
  );
}
