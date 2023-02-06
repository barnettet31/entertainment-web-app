import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { ContentList } from "../../../contentList/contentList.component";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
const Bookmarks: NextPageWithLayout = () => {
  const {data} = api.me.getBookMarkedMovies.useQuery();
  return <ContentList title="" data={data}/>;
};
Bookmarks.getLayout = getAuthedLayout;
export default Bookmarks;
