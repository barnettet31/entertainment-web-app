import { getAuthedLayout } from "../../components/layouts/authedLayout/authedLayout";
import { ContentList } from "../../contentList/contentList.component";
import { api } from "../../utils/api";
import type { NextPageWithLayout } from "../_app";
const Dashboard: NextPageWithLayout = () => {
  const {data} = api.movies.getAllMovies.useQuery();
  return (
    
    <ContentList data={data} title="Recommended for you"/>
  );
};
Dashboard.getLayout = getAuthedLayout;
export default Dashboard;
