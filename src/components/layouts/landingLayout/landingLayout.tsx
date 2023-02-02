import { ReactElement } from "react";
import { LandingNav } from "./landingNav";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface IProps {
  children: ReactElement;
}
 const LandingLayout = ({ children }:IProps) => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  if (sessionData)
    router
      .push("/dashboard")
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
  return (
    <>
      <LandingNav />
      <main className="w-full px-3 sm:pb-8 md:px-0">
        <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
};


export const getLandingLayout = (page: ReactElement) => {

return<LandingLayout>{page}</LandingLayout>};