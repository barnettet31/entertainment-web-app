/* eslint-disable @typescript-eslint/no-misused-promises */
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { api } from "../../utils/api";
import type { SubmitHandler } from "react-hook-form";
import type { IFormInput } from "../postReviewForm/postReview.component";

interface IReviewUpdateForm {
  rating: number;
  comment: string;
  isUpdating: boolean;
  setUpdating: (d: boolean) => void;
  id: string;
  movieId:string;
}
export const UpdateReviewForm = ({
  rating,
  comment,
  isUpdating,
  setUpdating,
  id,
  movieId
}: IReviewUpdateForm) => {
  const [isOpen, setIsOpen] = useState(isUpdating);
  const utils = api.useContext()
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { rating: rating, comment: comment },
  });
  const { mutate: postUpdate, isLoading } =
    api.reviews.updateReview.useMutation();
  const handleSetIsOpen = () => {
    setUpdating(false);
  };
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (isLoading) return;
    postUpdate({
      id,
      rating: data.rating,
      comment: data.comment,
    });
    await utils.reviews.getLatestReviews.invalidate();
    await utils.movies.getAllMovies.invalidate();
    await utils.movies.getContentById.invalidate({
      id:movieId
    })
    console.log(movieId)
    handleSetIsOpen()
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => handleSetIsOpen()}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto rounded-lg bg-semi-dark-blue px-4 py-5 sm:p-6 md:w-80 lg:w-96">
          <Dialog.Title className="text-lg font-medium leading-6 text-white">
            Edit your review
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative mt-5 sm:flex sm:items-center"
          >
            <div className="w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                id="comment"
                {...register("comment")}
                className="block w-full resize-none border-0 bg-transparent py-3 placeholder:text-red focus:ring-0 sm:text-sm"
                placeholder="Add your comment..."
                defaultValue={comment}
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
                    onClick={(d) => setValue("rating", d)}
                    size={20}
                    initialValue={rating}
                    SVGclassName="inline-block"
                  />
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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
