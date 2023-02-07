import Link from "next/link";
import { BookMarkedImage } from "../bookMarkElement/bookMarked.component";
import type { IMovieThumbProps } from "../movieThumb/movieThumb.component";
import Image from "next/image";
export const TrendingThumb = ({
  id,
  title,
  year,
  rating,
  category,
  thumbnails,
}: IMovieThumbProps) => {
  return (
    <div className="relative">
      <div className="absolute top-0 h-full w-full bg-gradient-to-b from-transparent to-black/75"></div>
      <BookMarkedImage id={id} title={title} />
      <Link href={`/dashboard/content/${id}`}>
        <Image
          alt="112"
          src={thumbnails[1] ?? ""}
          className="h-auto max-w-[240px] rounded shadow-sm md:max-w-[470px] hover:brightness-50 relative"
          width="470"
          height="0"
        />
      </Link>
      <div className="absolute bottom-4 left-4 flex flex-col gap-3">
        <div className="flex justify-start gap-2 text-sm font-light opacity-75">
          <span className="after:ml-0.5 after:content-['•']">{year}</span>
          <span
            className={`after:ml-0.5 after:content-['•'] ${
              category === "Movie"
                ? 'before:mr-2 before:content-[url("/icon-category-movie.svg")]'
                : 'before:mr-2 before:content-[url("/icon-category-tv.svg")]'
            }`}
          >
            {category}
          </span>
          <span>{rating}</span>
        </div>

        <span className="text-2xl">{title}</span>
      </div>
    </div>
  );
};