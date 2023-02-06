import { ReactElement, ReactNode, useEffect } from "react";
import { AppProps, type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";

import "../styles/globals.css";
import { NextPage } from "next";
import Head from "next/head";
// No changes to this type
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Add generic type
type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};



function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Front End Mentor - Entertainment App</title>
        <link rel="shortcut icon" href="/favicon-32x32.png"/>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
