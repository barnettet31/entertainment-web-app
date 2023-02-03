import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Reviewed: NextPageWithLayout = () => {
  return <main className="flex h-screen w-screen flex-col gap-4"><h1>Reviews</h1></main>;
};
Reviewed.getLayout = getAuthedLayout;
export default Reviewed;
