import { api } from "../../utils/api";
import { convertDate } from "../../utils/convertDate";
import Image from "next/image";
import { Star } from "../star/star.component";
import uuid from "react-uuid";
import { useState } from "react";
import { UpdateReviewForm } from "../updateReviewForm/updateReviewForm.component";
interface IReview {
  dateCreated: Date;
  rating: number;
  comment: string;
  user: string;
  currentUser:string | undefined;
  id:string;
}
export const ReviewArticle = ({ dateCreated, rating, user, comment, currentUser, id }: IReview) => {
const [isUpdating, setUpdating] = useState<boolean>(false);
  const { data, isLoading, isFetching } = api.users.getUser.useQuery({
    id: user,
  }, {
    refetchOnWindowFocus:false
  });
  return (
    <article className="relative mt-4 flex justify-start rounded-lg border p-4 md:gap-8">
      <div>
        <div className="mb-6 flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-4">
            {isLoading || isFetching ? <div className="w-10 h-10 bg-grayish-blue animate-pulse rounded-full"></div>:<Image
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
              src={data?.image ?? ""}
              alt=""
            />}
            <div className="space-y-1 font-medium dark:text-white">
              {isLoading||isFetching? <div className="h-2 w-30 bg-grayish-blue animate-pulse rounded"></div>:<p>{data?.name}</p>}
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
      <div className="fle flex-col gap-2 self-start">
        <p className="font-bold text-white">Comments:</p>
        <p className="mt-2 font-light text-gray-500 dark:text-gray-400">
          {comment}
        </p>
      </div>
      {currentUser ? (
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <button
          onClick={()=>setUpdating(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-red"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-red"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : null}
      {isUpdating ? <UpdateReviewForm setUpdating={()=>setUpdating(false)} isUpdating={isUpdating} rating={rating} comment={comment}/>:null}
    </article>
  );
};
