import { getLandingLayout } from "../../components/layouts/landingLayout/landingLayout";
import { NextPageWithLayout } from "../_app";

const Disclaimer: NextPageWithLayout = () => {
  return (
    <h1 className="text-red-600 text-3xl font-bold">This is my disclaimer page</h1>
  );
};

Disclaimer.getLayout = getLandingLayout;

export default Disclaimer;
