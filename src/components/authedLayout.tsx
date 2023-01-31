interface IProps {
  children: React.ReactNode;
}
function Header() {
  return (
    <header className="rounded-md bg-semi-dark-blue p-6 shadow-md">
      <nav></nav>
    </header>
  );
}
export const AuthedLayout = ({ children }: IProps) => {
  return <><Header/>{children}</>;
};
