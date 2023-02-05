import { api } from "../../utils/api";
import Image from "next/image";
interface IMovieThumbProps {
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
  const { data: averageReview, isLoading } =
    api.reviews.getAverageReviews.useQuery({
      movieId: id,
    });

  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex flex-col gap-2">
        <Image
          alt="112"
          src={thumbnails[thumbnails.length - 1] ?? ""}
          className="h-auto w-full rounded shadow-sm"
          width="300"
          height="0"
        />
       
        <div className="flex justify-between gap-2 text-sm font-light opacity-75">
          <span>{year}</span>
          <span>{category}</span>
          <span>{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <h2>{title}</h2>
          <div className="flex items-center gap-1">
            {isLoading ? (
              <div className="pulse h-2 w-4 rounded" />
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
