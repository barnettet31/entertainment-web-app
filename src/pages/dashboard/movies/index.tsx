import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
import { ContentList } from "../../../contentList/contentList.component";
import { LoadingGrid } from "../../../components/loadingGrid/loadingGrid.component";
const Movies: NextPageWithLayout = () => {
  const { data, isLoading, isFetching } = api.movies.getMovies.useQuery();
  if (isLoading || isFetching) return <LoadingGrid />;
  return <ContentList title="Movies" data={data} />;
};
Movies.getLayout = getAuthedLayout;
export default Movies;
