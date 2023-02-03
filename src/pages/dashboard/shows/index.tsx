import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const Shows: NextPageWithLayout = () => {
  return <h1>series</h1>;
};
Shows.getLayout = getAuthedLayout;
export default Shows;
