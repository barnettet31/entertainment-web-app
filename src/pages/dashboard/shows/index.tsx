import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
import { ContentList } from "../../../components/contentList/contentList.component";
import { LoadingGrid } from "../../../components/loadingGrid/loadingGrid.component";
const Shows: NextPageWithLayout = () => {
  const { data, isLoading, isFetching } = api.movies.getShows.useQuery(undefined, {
    refetchOnWindowFocus:false
  });
    if (isLoading || isFetching) return <LoadingGrid />;
  return (
    <ContentList title="TV Series" data={data}/>
  );
};
Shows.getLayout = getAuthedLayout;
export default Shows;
