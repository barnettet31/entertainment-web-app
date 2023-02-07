import { api } from "../../utils/api";
import uuid from "react-uuid";
import { TrendingThumb } from "../trendingThumb/trendingThumb.component";
import { TrendingLoading } from "../trendingLoading/trendingLoading.component";


export const FeaturedMoviesList = () => {
  const { data, isLoading, isFetching } = api.movies.getTrendingMovies.useQuery();
    if(isLoading || isFetching) return <TrendingLoading/>
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1>Trending</h1>
      <div className="flex justify-start gap-10 overflow-x-scroll scrollbar pb-4">
        {data?.map(({rating, category, title, id, thumbnails, year}) => (
          <TrendingThumb key={uuid()} id={id} rating={rating} category={category} year={year} thumbnails={thumbnails} title={title} />
        ))}
      </div>
    </div>
  );
};
