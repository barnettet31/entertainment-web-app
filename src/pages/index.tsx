import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import { getLandingLayout } from "../components/layouts/landingLayout/landingLayout";

const Home: NextPageWithLayout = () => {
    const router = useRouter();
    const { data: sessionData } = useSession();
    if (sessionData)
      router
        .push("/dashboard")
        .then((d) => console.log(d))
        .catch((e) => console.log(e));
    return (
        <button onClick={()=>void signIn('discord')}>Login</button>
    );
};
Home.getLayout = getLandingLayout


export default Home;


