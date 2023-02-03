import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Bookmarks: NextPageWithLayout = () => {
  return <main className="flex h-screen pt-8 flex-col gap-4"><h1>Bookmarks</h1></main>;
};
Bookmarks.getLayout = getAuthedLayout;
export default Bookmarks;
