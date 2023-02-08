import React, { useState } from "react";
import { api } from "../../utils/api";
import { ReviewLoadingColumn } from "../reviewLoadingColumn/reviewLoadingColumn.component";
import uuid from "react-uuid";
import { PostReviewForm } from "../postReviewForm/postReview.component";
import { ReviewArticle } from "../review/review.component";
import type { Review } from "@prisma/client";
interface IMovieReviews {
  movieId: string;
  currentUser: string | undefined;
}

export const MovieReviews = ({ movieId, currentUser }: IMovieReviews) => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
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
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading || isFetching) return <ReviewLoadingColumn />;
  if (!currentUserReviewed)
    return (
      <>
        <PostReviewForm movieId={movieId} />
        {reviews ? (
          reviews.map((review) => (
            <ReviewArticle
              id={review.id}
              currentUser={currentUser}
              key={uuid()}
              dateCreated={review.createdAt}
              rating={review.rating}
              user={review.userId}
              comment={review.comment}
              movieId={movieId}
            />
          ))
        ) : (
          <div />
        )}
      </>
    );
  return (
    <>
      {reviews ? (
        reviews.map((review) => (
          <ReviewArticle
            movieId={movieId}
            id={review.id}
            key={uuid()}
            currentUser={currentUser}
            dateCreated={review.createdAt}
            rating={review.rating}
            user={review.userId}
            comment={review.comment}
          />
        ))
      ) : (
        <div className="w-full flex items-center justify-center">
          <h2 className="text-3xl text-red">No Reviews currently</h2>
        </div>
      )}
    </>
  );
};
