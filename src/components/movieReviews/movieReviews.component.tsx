import { Fragment, useState } from "react";
import { api } from "../../utils/api";
import { ReviewLoadingColumn } from "../reviewLoadingColumn/reviewLoadingColumn.component";
import type { Review } from "@prisma/client";
import Image from "next/image";
import { convertDate } from "../../utils/convertDate";
import { Rating } from "react-simple-star-rating";
import { Listbox, Transition } from "@headlessui/react";
interface IMovieReviews {
  movieId: string;
}

function PostReviewForm({ movieId }: { movieId: string }) {
  const { data: userData } = api.me.getProfileData.useQuery();
  const { mutate } = api.reviews.createReview.useMutation({});
  const [rating, setRating] = useState<number | null>(null);

  const handleSetRating =(rate:number)=>{setRating(rate);
  console.log(rate)
  }
  if (!userData) return <p>There is no user currently?</p>;
  return (
    <div className="mx-auto mt-6 w-full max-w-xl px-4 py-4 shadow md:max-w-3xl lg:mx-0 lg:max-w-7xl">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="inline-block h-10 w-10 rounded-full"
            width={30}
            height={30}
            src={userData.image ?? ""}
            alt="user profile"
          />
        </div>
        <div className="min-w-0 flex-1">
          <form action="#" className="relative">
            <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm ">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="block w-full resize-none border-0 bg-transparent py-3 placeholder:text-red focus:ring-0 sm:text-sm"
                placeholder="Add your comment..."
                defaultValue={""}
              />

              <div className="py-2" aria-hidden="true">
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
              <div className="flex items-center space-x-5">
                <div className="flex items-center">
                  <Rating
                    onClick={handleSetRating}
                    size={20}
                    SVGclassName="inline-block"
                  />
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="flex flex-col items-center justify-center rounded-md border border-transparent bg-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red/75"
                >
                  Post Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
function UserReviewEdit({ movieId }: { movieId: string }) {
  return <span>Placeholder: {movieId}</span>;
}
export const MovieReviews = ({ movieId }: IMovieReviews) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentUserReviewed, setCurentUserReviewed] = useState<boolean>(false);
  const { isLoading, isFetching } = api.reviews.getLatestReviews.useQuery(
    { id: movieId },
    {
      onSuccess: (data) => {
        if (data) {
          setReviews(data.reviews);
          setCurentUserReviewed(data.currentUserReviewed);
        }
      },
      refetchOnWindowFocus:false,
    }
  );
  if (isLoading || isFetching) return <ReviewLoadingColumn />;
  if (!currentUserReviewed)
    return (
      <>
        <PostReviewForm movieId={movieId} />
        <p>{JSON.stringify(reviews)}</p>
      </>
    );
  return (
    <>
      <UserReviewEdit movieId={movieId} />
      <p>{JSON.stringify(reviews)}</p>
      <p>{movieId}</p>
    </>
  );
};
