import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import MovieSearch from "./MovieSearch";

export default function Header() {
  return (
    <header className="w-full bg-red-600 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold tracking-wide">
        <Link href="/">🎬 MOVIES</Link>
      </div>

      <MovieSearch />

      <div className="ml-4">
        <FaUserCircle size={28} className="text-white" />
      </div>
    </header>
  );
}
