import { getAuthedLayout } from "../../components/layouts/authedLayout/authedLayout";
import { LoadingGrid } from "../../components/loadingGrid/loadingGrid.component";
import { ContentList } from "../../contentList/contentList.component";
import { api } from "../../utils/api";
import type { NextPageWithLayout } from "../_app";
const Dashboard: NextPageWithLayout = () => {
  const {data, isLoading, isFetching} = api.movies.getAllMovies.useQuery();
  if(isLoading || isFetching) return <LoadingGrid/>
  return (
    
    <ContentList data={data} title="Recommended for you"/>
  );
};
Dashboard.getLayout = getAuthedLayout;
export default Dashboard;
