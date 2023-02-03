import {  useEffect } from "react";
import type {ReactElement} from 'react';
import {  AuthHeader } from "../../authHeader/authHeader.component";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface IProps {
  children: ReactElement;
}
const AuthedLayout = ({ children }: IProps) => {
    const router = useRouter();
    const { data: sessionData } = useSession();

    useEffect(() => {
      if (!sessionData) router.push("/").catch(console.log);
    }, []);
  return <div className="lg:flex"><AuthHeader/><main className="flex flex-col gap-4 h-screen pt-8 px-4 md:px-0 md:w-11/12 lg:w-full mx-auto">{children}</main></div>;
};
export const getAuthedLayout = (page: ReactElement) => {
  return <AuthedLayout>{page}</AuthedLayout>;
};