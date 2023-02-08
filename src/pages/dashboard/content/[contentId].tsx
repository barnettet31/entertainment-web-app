import { useRouter } from "next/router";
import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
import { api } from "../../../utils/api";
import { ErrorPage } from "../../../components/errorPage/errorPage.component";
import { MovieDetails } from "../../../components/movieDetails/movieDetails.component";
import { MovieReviews } from "../../../components/movieReviews/movieReviews.component";
const LoadingMoviePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-5 w-40 animate-pulse rounded bg-red"></div>
      <div className="flex flex-col items-start justify-start  gap-4 md:gap-6 lg:flex-row lg:gap-10">
        <div className="h-[150px] w-[300px] animate-pulse rounded-md shadow md:w-auto" ></div>
        <div className="flex flex-col gap-3">
          <div className="w-30 h-3 animate-pulse bg-grayish-blue"></div>
          <div className="w-30 h-3 animate-pulse bg-grayish-blue"></div>
          <div className="w-30 h-3 animate-pulse bg-grayish-blue">
          </div>
          <div className="h-3 w-30 bg-grayish-blue animate-pulse">
        </div>
      </div>
    </div>
    </div>
  );
};

const ContentPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { contentId } = router.query;
  if (!contentId || typeof contentId === "object") return <ErrorPage />;
  const {
    data: movieData,
    isLoading,
    isFetching,
  } = api.movies.getContentById.useQuery(
    { id: contentId },
    {
      enabled: contentId ? true : false,
      refetchOnWindowFocus: false,
    }
  );
  const { data: userData } = api.me.getProfileData.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  if (movieData === undefined || isLoading || isFetching)
    return <LoadingMoviePage />;
  return (
    <div className="max-w-sm md:max-w-3xl lg:max-w-7xl">
      {movieData ? (
        <>
          <MovieDetails
            rating={movieData.rating ? movieData.rating : ""}
            title={movieData.title ? movieData.title : ""}
            year={movieData.year ? movieData.year : 0}
            category={movieData.category ? movieData.category : ""}
            thumbnails={movieData.thumbnails ? movieData.thumbnails : []}
            averageReview={
              movieData.averageRating ? movieData.averageRating : 0
            }
          />
          <MovieReviews
            currentUser={userData?.id}
            movieId={movieData.id ?? ""}
          />
        </>
      ) : null}
    </div>
  );
};
ContentPage.getLayout = getAuthedLayout;
export default ContentPage;
