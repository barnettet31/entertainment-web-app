import { getAuthedLayout } from "../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../_app";
const Dashboard: NextPageWithLayout = () => {

  return (
    
    <h1>landing</h1>
  );
};
Dashboard.getLayout = getAuthedLayout;
export default Dashboard;
