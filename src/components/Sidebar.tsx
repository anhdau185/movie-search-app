"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaFire,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const menuItems = [
  { label: "Trending", icon: FaFire },
  { label: "Coming Soon", icon: FaCalendarAlt },
  { label: "Favourites", icon: FaHeart },
  { label: "Watch Later", icon: FaClock },
  { label: "Top Rated", icon: FaStar },
];

export default function Sidebar() {
  const [active, setActive] = useState("Trending");
  const router = useRouter();

  return (
    <aside className="hidden h-screen w-60 flex-col gap-4 bg-gray-800 px-4 py-6 text-white shadow-md md:flex">
      <div className="mb-6 text-2xl font-bold tracking-wide">🎞️ Menu</div>

      {menuItems.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => {
            setActive(label);
            router.push("/contact");
          }}
          className={classNames(
            "flex items-center gap-3 rounded-md px-4 py-2 transition-all duration-200",
            {
              "bg-red-600 text-white": active === label,
              "hover:bg-gray-700": active !== label,
            },
          )}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}
