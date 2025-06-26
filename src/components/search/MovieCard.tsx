import Image from "next/image";

interface MovieCardProps {
  title: string;
  year: string;
  poster: string;
  type: string;
  imdbID: string;
}

export default function MovieCard({
  title,
  year,
  poster,
  type,
}: MovieCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-gray-800 shadow-md transition duration-200 hover:shadow-xl">
      <div className="h-72 w-full object-cover">
        <Image
          src={poster !== "N/A" ? poster : "/no-poster.png"}
          alt={title}
          width={500}
          height={288}
          className="h-72 w-full rounded-t-xl object-cover"
          unoptimized={poster === "N/A"}
        />
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-gray-100">
          {title}
        </h3>
        <div className="flex justify-between text-sm text-gray-400">
          <span className="capitalize">{type}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}
