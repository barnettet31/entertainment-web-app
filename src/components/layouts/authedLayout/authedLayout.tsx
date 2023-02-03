import { ReactElement, useEffect } from "react";
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
  return <><AuthHeader/>{children}</>;
};
export const getAuthedLayout = (page: ReactElement) => {
  return <AuthedLayout>{page}</AuthedLayout>;
};