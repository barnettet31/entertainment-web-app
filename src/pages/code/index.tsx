import { getLandingLayout } from "../../components/layouts/landingLayout/landingLayout";
import { NextPageWithLayout } from "../_app";

const Code: NextPageWithLayout = () => {
  return (
    <h1 className="text-red-600 text-3xl font-bold">This is my Code page</h1>
  );
};

Code.getLayout = getLandingLayout;

export default Code;
