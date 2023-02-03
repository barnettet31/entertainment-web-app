import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Movies: NextPageWithLayout = () => {
  return <main className="flex pt-8 flex-col h-screen gap-4"><h1>Movies</h1></main>;
};
Movies.getLayout = getAuthedLayout;
export default Movies;
