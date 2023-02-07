import uuid from "react-uuid";
import { Star } from "../star/star.component";

interface IStarRatingProps
{
    averageReview: number;
}

export const StarRating = ({ averageReview }: IStarRatingProps) => {
  return (
    <>
      {averageReview ? (
        <div className="relative flex items-center gap-4">
          {Array(5)
            .fill("")
            .map(() => (
              <Star key={uuid()} />
            ))}

          <div
            className="absolute right-0 h-full bg-dark-blue"
            style={{ width: `${(5 - averageReview) * 20}%` }}
          ></div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
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
          </svg>{" "}
          <span className="text-xs font-light">No Reviews</span>
        </div>
      )}
    </>
  );
};
