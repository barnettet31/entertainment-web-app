import { ReactElement } from "react";
import { LandingNav } from "./landingNav";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { LandingFooter } from "./landingFooter";
import { LoadingPage } from "../../loadingPage/loadingPage.component";

interface IProps {
  children: ReactElement;
}
 const LandingLayout = ({ children }:IProps) => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();
  if (sessionData)
    router
      .push("/dashboard")
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
  if(status === 'loading') return <LoadingPage/>
  return (
    <>
      <LandingNav />
      <main className="w-full px-3 sm:pb-10 md:px-0">
        <div className="container mx-auto sm:px-6 lg:px-8 mb-8">{children}</div>
      </main>
      <LandingFooter/>
    </>
  );
};


export const getLandingLayout = (page: ReactElement) => {

return<LandingLayout>{page}</LandingLayout>};