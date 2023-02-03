import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Bookmarks: NextPageWithLayout = () => {
  return <h1>Bookmarks</h1>;
};
Bookmarks.getLayout = getAuthedLayout;
export default Bookmarks;
