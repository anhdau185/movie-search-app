import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import MovieSearch from "./Search";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-red-600 px-6 py-4 text-white">
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
