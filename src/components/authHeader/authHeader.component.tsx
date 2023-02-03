import Link from "next/link";
import { Logo } from "../logo/logo.component";
import { AuthNavigation } from "../authNavLink/authNavigation.component";
import { ProfileButton } from "../profileButton/profileButton.component";



export function AuthHeader() {
  return (
    <header className="flex items-center justify-between bg-semi-dark-blue p-4 shadow-md md:mx-auto md:mt-6 md:w-11/12 md:rounded-xl lg:mx-8 lg:justify-start lg:relative lg:h-[95vh] lg:my-auto lg:gap-20 lg:w-24 lg:flex-col lg:py-9">
      <div className="flex items-center  justify-between lg:flex-col lg:gap-20">
        <Link className="hover:brightness-200" href="/dashboard">
          <Logo classes="w-6 h-5 md:w-auto md:h-auto" />
        </Link>
      </div>
        <AuthNavigation />
     <ProfileButton/>
    </header>
  );
}
