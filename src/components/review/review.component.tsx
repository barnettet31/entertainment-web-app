import { api } from "../../utils/api";
import { convertDate } from "../../utils/convertDate";
import Image from "next/image";
import { Star } from "../star/star.component";
import uuid from "react-uuid";
import { useState } from "react";
import { UpdateReviewForm } from "../updateReviewForm/updateReviewForm.component";
import { EditReviewOptions } from "../editReviewOptions/editReviewOptions.component";
interface IReview {
  dateCreated: Date;
  rating: number;
  comment: string;
  user: string;
  currentUser: string | undefined;
  id: string;
  movieId:string;
}
export const ReviewArticle = ({
  dateCreated,
  rating,
  user,
  comment,
  currentUser,
  id,
  movieId
}: IReview) => {
  const utils = api.useContext();
  const [isUpdating, setUpdating] = useState<boolean>(false);
  const { data, isLoading, isFetching } = api.users.getUser.useQuery(
    {
      id: user,
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  const { mutate: deleteReview, isLoading: currentlyDeleting } =
    api.reviews.deleteReview.useMutation({
      onSuccess: () => {
        void utils.reviews.getLatestReviews.invalidate();
        void utils.movies.getContentById.invalidate();
      },
    });
  const {  isLoading: updatingReview } =
    api.reviews.updateReview.useMutation();
  if (currentlyDeleting || updatingReview) return (
    <div className="animated-pulse h-40 w-full rounded bg-grayish-blue shadow-lg"></div>
  );
  return (
    <article className="relative mt-4 flex flex-col justify-start rounded-lg bg-semi-dark-blue p-4 shadow-lg md:flex-row md:gap-8">
      <div>
        <div className="mb-6 flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-4">
            {isLoading || isFetching ? (
              <div className="h-10 w-10 animate-pulse rounded-full bg-grayish-blue"></div>
            ) : (
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
                src={data?.image ?? ""}
                alt=""
              />
            )}
            <div className="space-y-1 font-medium dark:text-white">
              {isLoading || isFetching ? (
                <div className="w-30 h-2 animate-pulse rounded bg-grayish-blue"></div>
              ) : (
                <p>{data?.name}</p>
              )}
            </div>
          </div>
          <div className="mb-5 flex items-start">
            <div className="pr-4">
              <footer>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Reviewed: <span>{convertDate(dateCreated)}</span>
                </p>
                <div className="mt-2 flex">
                  {Array(rating)
                    .fill("")
                    .map(() => (
                      <Star key={uuid()} />
                    ))}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 self-start">
        <p className="font-bold text-white">Comments:</p>
        <p className="mt-2 font-light text-gray-500 dark:text-gray-400">
          {comment}
        </p>
      </div>
      {currentUser ? (
        <EditReviewOptions
          deleteReview={(id) => deleteReview({ id: id })}
          id={id}
          setUpdating={() => setUpdating(true)}
        />
      ) : null}
      {isUpdating ? (
        <UpdateReviewForm
          movieId={movieId}
          id={id}
          setUpdating={() => setUpdating(false)}
          isUpdating={isUpdating}
          rating={rating}
          comment={comment}
        />
      ) : null}
    </article>
  );
};
