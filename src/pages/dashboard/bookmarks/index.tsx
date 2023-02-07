import uuid from "react-uuid";
import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { LoadingMovieThumb } from "../../../components/loadingMovieThumb/loadingMovieThumb.component";
import { ContentList } from "../../../components/contentList/contentList.component";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
import { LoadingGrid } from "../../../components/loadingGrid/loadingGrid.component";
const Bookmarks: NextPageWithLayout = () => {
  const {data ,isFetching, isLoading} = api.me.getBookMarkedMovies.useQuery();
  if(isFetching || isLoading)return <LoadingGrid/>
  return <ContentList title="Bookmarked Movies" data={data}/>;
};
Bookmarks.getLayout = getAuthedLayout;
export default Bookmarks;
