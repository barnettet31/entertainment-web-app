import uuid from "react-uuid";
import { LoadingMovieThumb } from "../loadingMovieThumb/loadingMovieThumb.component";

export const LoadingGrid = () => {
  return (
    <div className="flex flex-col gap-2">
        <div className="w-20 h-6 "></div>
      <div className="grid max-w-sm grid-cols-2 gap-4 md:max-w-3xl md:grid-cols-3 lg:mx-0 lg:max-w-7xl lg:grid-cols-4 lg:items-start">
        {Array(27)
          .fill(1)
          .map((_) => (
            <LoadingMovieThumb key={uuid()} />
          ))}
      </div>
    </div>
  );
};
