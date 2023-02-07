import Image from "next/image";
import { StarRating } from "../starRating/starRating.component";
interface IMovieDetails {
  title: string;
  year: number;
  category: string;
  thumbnails: string[];
  rating: string;
  averageReview: number;
}
export const MovieDetails = ({
  title,
  year,
  category,
  thumbnails,
  rating,
  averageReview,
}: IMovieDetails) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-underline text-2xl text-red md:text-3xl ">{title}</h1>
      <div className="flex flex-col items-start justify-start  gap-4 md:gap-6 lg:flex-row lg:gap-10">
        <Image
          src={thumbnails[thumbnails.length - 1] ?? ""}
          width="300"
          alt={title ?? ""}
          height="300"
          className="rounded-md shadow"
        />
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Year: {year}</p>
          <p className="text-lg font-semibold">
            Category:
            <span
              className={`${
                category === "Movie"
                  ? 'after:ml-2 after:content-[url("/icon-category-movie.svg")]'
                  : 'after:ml-2 after:content-[url("/icon-category-tv.svg")]'
              }`}
            >
              {" "}
              {category}
            </span>
          </p>
          <p className="text-lg font-semibold">Rated: {rating}</p>
          <StarRating averageReview={averageReview} />
        </div>
      </div>
    </div>
  );
};
