import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps, type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";

import "../styles/globals.css";


export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?:(page:ReactElement) =>ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component:NextPageWithLayout;
}
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
