import { ReactElement } from "react";
import { AuthNav } from "./authNav";

interface IProps {
  children: ReactElement;
}
const AuthedLayout = ({ children }: IProps) => {
  return <><AuthNav/>{children}</>;
};
export const getAuthedLayout = (page: ReactElement) => {
  return <AuthedLayout>{page}</AuthedLayout>;
};