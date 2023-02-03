import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Movies: NextPageWithLayout = () => {
  return <h1>Movies</h1>;
};
Movies.getLayout = getAuthedLayout;
export default Movies;
