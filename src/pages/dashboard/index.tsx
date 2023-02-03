import { getAuthedLayout } from "../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../_app";
const Dashboard: NextPageWithLayout = () => {

  return (
    <main className="flex flex-col gap-4 h-screen w-screen pt-8">
    <h1>landing</h1>
    </main>
  );
};
Dashboard.getLayout = getAuthedLayout;
export default Dashboard;
