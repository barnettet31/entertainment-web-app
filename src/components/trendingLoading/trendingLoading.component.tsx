import { LoadingMovieThumb } from "../loadingMovieThumb/loadingMovieThumb.component";
import { TrendingLoadingThumb } from "../loadingTrendingThumb/trendingLoadingThumb.component";

export const TrendingLoading = ()=>{
    return (
      <div className="flex w-full flex-col gap-6">
        <h1>Trending</h1>
        <div className="scrollbar flex justify-start gap-10 overflow-x-scroll pb-4">
          <TrendingLoadingThumb/>
          <TrendingLoadingThumb/>
          <TrendingLoadingThumb/>
          <TrendingLoadingThumb/>
        </div>
      </div>
    );
}