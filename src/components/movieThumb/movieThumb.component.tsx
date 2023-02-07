import { api } from "../../utils/api";
import Image from "next/image";
import { BookMarkedImage } from "../bookMarkElement/bookMarked.component";
import Link from "next/link";
import { LoadingMovieThumb } from "../loadingMovieThumb/loadingMovieThumb.component";
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
  const { data: averageReview, isLoading:favoriteLoading } =
    api.reviews.getAverageReviews.useQuery({
      movieId: id,
    });
    const {isLoading:bookmarkLoading} = api.me.isBookMarked.useQuery({id});


  if(favoriteLoading || bookmarkLoading ) return <LoadingMovieThumb/>
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
              <Image
                src="/icon-nav-favorite.svg"
                width="15"
                height="15"
                className="brightness-200"
                alt=""
              />
              <span className="text-xs font-light">{averageReview}</span>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
