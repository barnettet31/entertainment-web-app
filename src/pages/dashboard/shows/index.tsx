import uuid from "react-uuid";
import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
import { MovieThumb } from "../../../components/movieThumb/movieThumb.component";
const Shows: NextPageWithLayout = () => {
  const { data } = api.movies.getShows.useQuery();
  return (
    <div className="flex max-w-sm flex-col gap-6 items-center mx-auto lg:mx-0 md:max-w-3xl lg:items-start lg:max-w-7xl">
      <h1 className="self-start">TV Series</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.map(({ title, year, thumbnails, rating, category, id }) => <MovieThumb key={uuid()}  title={title} year={year} thumbnails={thumbnails} category={category} id={id} rating={rating}/> )}
      </div>
    </div>
  );
};
Shows.getLayout = getAuthedLayout;
export default Shows;
