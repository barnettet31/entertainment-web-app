import { getLandingLayout } from "../../components/layouts/landingLayout/landingLayout";
import type { NextPageWithLayout } from "../_app";

const Disclaimer: NextPageWithLayout = () => {
  return (
    <><h1 className="text-red-600 text-3xl font-bold">Disclaimer</h1><p className="text-white text-lg font-semibold">This app is not intended for massive amounts of traffic as I pay for the resources.</p><p className="text-white text-lg font-semibold">I will delete user accounts if it becomes too much.</p><p className="text-white text-lg font-semibold">The designs came from a frontend mentor challenge!</p></>
  );
};

Disclaimer.getLayout = getLandingLayout;

export default Disclaimer;
