import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Reviewed: NextPageWithLayout = () => {
  return<h1>Reviews</h1>;
};
Reviewed.getLayout = getAuthedLayout;
export default Reviewed;
