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
    }, [sessionData]);
  return <div className="lg:flex"><AuthHeader/><main className="flex flex-col gap-4 h-screen pt-8">{children}</main></div>;
};
export const getAuthedLayout = (page: ReactElement) => {
  return <AuthedLayout>{page}</AuthedLayout>;
};