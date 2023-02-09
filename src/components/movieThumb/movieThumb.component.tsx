import { api } from "../../utils/api";
import Image from "next/image";
import { BookMarkedImage } from "../bookMarkElement/bookMarked.component";
import Link from "next/link";
export interface IMovieThumbProps {
  title: string;
  year: number;
  thumbnails: string[];
  rating: string;
  category: string;
  id: string;
}
export const MovieThumb = ({
  title,
  year,
  thumbnails,
  rating,
  category,
  id,
}: IMovieThumbProps) => {
  const { data: averageReview } =
    api.reviews.getAverageReviews.useQuery({
      movieId: id,
    });
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex flex-col gap-2">
        <Link href={`/dashboard/content/${id}`} className="group">
          <Image
            alt="112"
            src={thumbnails[thumbnails.length - 1] ?? ""}
            className="h-auto w-full cursor-pointer rounded shadow-sm group-hover:brightness-50"
            width="300"
            height="0"
          />
          <div className="absolute top-0  hidden h-[190px] w-full items-center justify-center lg:group-hover:flex">
            <span className="rounded-full bg-white/25 py-3 px-6 text-white">
              See Reviews
            </span>
          </div>
        </Link>
        <BookMarkedImage id={id} title={title} />
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
        <div className="flex items-center justify-between">
          <Link href={`/dashboard/content/${id}`}>
            <h2 className="text-sm hover:text-red md:text-lg">{title}</h2>
          </Link>
          <div className="flex items-center gap-1">
            <>
              {averageReview  ? (
                <>
                  <Image
                    src="/icon-nav-favorite.svg"
                    width="15"
                    height="15"
                    className="brightness-200"
                    alt=""
                  />
                  <span className="text-xs font-light">{averageReview}</span>
                </>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-grayish-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
