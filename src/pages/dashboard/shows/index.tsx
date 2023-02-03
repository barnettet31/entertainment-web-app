import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
const Shows: NextPageWithLayout = () => {
  const {data} = api.movies.getShows.useQuery();
  console.log(data)
  return <h1>series</h1>;
};
Shows.getLayout = getAuthedLayout;
export default Shows;
