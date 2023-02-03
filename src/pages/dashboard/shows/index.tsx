import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Shows: NextPageWithLayout = () => {
  return <main className="flex pt-8 flex-col h-screen gap-4"><h1>series</h1></main>;
};
Shows.getLayout = getAuthedLayout;
export default Shows;
