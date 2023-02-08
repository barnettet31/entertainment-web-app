import { useRouter } from "next/router";
import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
import { api } from "../../../utils/api";
import { ErrorPage } from "../../../components/errorPage/errorPage.component";
import { MovieDetails } from "../../../components/movieDetails/movieDetails.component";
import { MovieReviews } from "../../../components/movieReviews/movieReviews.component";
const LoadingMoviePage = () => {
  return <h2>Loading....</h2>;
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
          <MovieReviews movieId={movieData.id ?? ''}  />
        </>
      ) : null}
    </div>
  );
};
ContentPage.getLayout = getAuthedLayout;
export default ContentPage;
