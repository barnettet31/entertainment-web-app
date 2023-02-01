import { NextPage } from "next";
import { getAuthedLayout } from "../../components/layouts/authedLayout/authedLayout";
import { NextPageWithLayout } from "../_app";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Dashboard: NextPageWithLayout = () => {
    const router = useRouter()
    const {data:sessionData} = useSession();
    async function handleSignOut(){
       await signOut()
    }
  useEffect(()=>{
    if (!sessionData) router.push("/").catch(console.log);
  },[sessionData]);

  
  return (
      <><h1>This is my authed page {sessionData?.user.name}</h1><button onClick={()=>void handleSignOut()}>Sign Out</button></>
   
  );
};
Dashboard.getLayout = getAuthedLayout
export default Dashboard;
