import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
import { ContentList } from "../../../contentList/contentList.component";
const Shows: NextPageWithLayout = () => {
  const { data } = api.movies.getShows.useQuery();
  return (
    <ContentList title="TV Series" data={data}/>
  );
};
Shows.getLayout = getAuthedLayout;
export default Shows;
