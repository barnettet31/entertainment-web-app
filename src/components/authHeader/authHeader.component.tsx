import Link from "next/link";
import { Logo } from "../logo/logo.component";
import { AuthNavigation } from "../authNavLink/authNavigation.component";



export function AuthHeader() {
  return (
    <header className="bg-semi-dark-blue p-4 shadow-md">
      <div className="flex items-center justify-between">
        <Link className="hover:brightness-200" href="/dashboard">
          <Logo classes="w-6 h-5 md:w-auto md:h-auto" />
        </Link>
        <AuthNavigation/>
        <div className="w-6 h-6 rounded-full border border-white"></div>
      </div>
    </header>
  );
}
