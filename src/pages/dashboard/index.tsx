import { NextPage } from "next";
import Image from 'next/image'
import { getAuthedLayout } from "../../components/layouts/authedLayout/authedLayout";
import { NextPageWithLayout } from "../_app";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import uuid from "react-uuid";
import { api } from "../../utils/api";
import { LoadingPage } from "../../components/loadingPage/loadingPage.component";
const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (!sessionData) router.push("/").catch(console.log);
  }, [sessionData]);
  return (
    <main className="flex flex-col gap-4 h-screen w-screen">
    
    </main>
  );
};
Dashboard.getLayout = getAuthedLayout;
export default Dashboard;
