import { ReactElement } from "react";
import { LandingNav } from "./landingNav";

interface IProps {
  children: ReactElement;
}
 const LandingLayout = ({ children }:IProps) => {
  return (
    <>
      <LandingNav/>
      {children}
    </>
  );
};


export const getLandingLayout = (page: ReactElement) => {

return<LandingLayout>{page}</LandingLayout>};