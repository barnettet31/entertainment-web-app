/* eslint-disable @typescript-eslint/no-misused-promises */

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { api } from "../../utils/api";
import { Rating } from "react-simple-star-rating";
import { UserProfileImage } from "../userProfileImage/userProfileImage.component";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

export interface IFormInput {
  comment: string;
  rating: number;
}
export const validationSchema = z.object({
  comment:z.string().min(5, {message:"Comment must be longer than 5 letters"}),
  rating: z.number().min(1, {message:"Rating must be at least 1"})
  
})
export type ValidationSchema = z.infer<typeof validationSchema>
export function PostReviewForm({ movieId }: { movieId: string }) {
  const utils = api.useContext();
  const { data: userData } = api.me.getProfileData.useQuery(undefined, {
    refetchOnWindowFocus:false
  });
  const { mutate, isLoading } = api.reviews.createReview.useMutation({
    onSuccess: () => {
      void utils.reviews.getAverageReviews.invalidate();
      void utils.reviews.getLatestReviews.invalidate();
    },
  });

  const { register, handleSubmit, setValue, trigger, formState:{errors}  } = useForm<ValidationSchema>({
    defaultValues: {
      comment: "",
      rating: 0,
    },
    resolver:zodResolver(validationSchema)
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    if (isLoading) return;
    void trigger("rating")
    mutate({
      movieId,
      rating: data.rating,
      comment: data.comment,
    });
  };
  if (!userData) return <p>There is no user currently?</p>;
  return (
    <div className="mx-auto mt-6 w-full max-w-xl px-4 py-4 shadow md:max-w-3xl lg:mx-0 lg:max-w-7xl">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <UserProfileImage image={userData.image} />
        </div>
        <div className="min-w-0 flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm ">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                id="comment"
                {...register("comment")}
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
              <div className="flex items-center gap-4 space-x-5">
                <div className="flex flex-col items-start justify-start md:flex-row md:items-center">
                  <Rating
                    onClick={(d) => setValue("rating", d)}
                    size={20}
                    SVGclassName="inline-block"
                  />
                  <div className="flex flex-col gap-1">
                    {errors.rating ? (
                      <p className="text-xs text-red opacity-75 md:ml-2">
                        {errors.rating?.message}
                      </p>
                    ) : null}
                    {errors.comment ? (
                      <p className="text-xs text-red opacity-75 md:ml-2">
                        {errors.comment?.message}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="flex flex-col items-center justify-center rounded-md border border-transparent bg-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red/75"
                >
                  {isLoading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border border-r-0 border-white" />
                  ) : (
                    "Post Review"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
