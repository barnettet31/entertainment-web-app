import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Logo } from "../../logo/logo.component";
import { Fragment } from "react";
import uuid from "react-uuid";
export interface ILinkData{
  text:string;
  destination:string;
}
const landingPages= [
  {
    text: "Sign In",
    destination: "/signin",
  },
  {
    text: "Disclaimer",
    destination: "/disclaimer",
  },
  {
    text: "Code",
    destination: "/code",
  },
];
interface ILinkProps {text:string; destination:string}
function DesktopLink({text,destination}:ILinkProps){
  return( <Link
            className="text-primary-white ease-in-out hover:text-red"
            href={destination}
          >{text}</Link>)
}
function MobileLink({text,destination}:ILinkProps){
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={destination}
          className={`${
            active ? "bg-grayish-blue text-white" : "text-white bg-dark-blue"
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
         {text}
        </Link>
      )}
    </Menu.Item>
  );
}
export function LandingNav() {
  return (
    <nav className="bg-tertiary-black py-4 px-4 md:px-0 mb-8">
      <div className="container mx-auto flex items-center justify-between gap-3 sm:px-6 lg:flex lg:px-8">
        <Link href="/">
          <Logo classes="w-5"/>
        </Link>
        <div className="hidden justify-end gap-6 self-end lg:flex">
         
            {landingPages.map(({text,destination})=><DesktopLink key={uuid()} text={text} destination={destination}/>)}
        </div>
        <div className="text-right lg:hidden">
          <Menu
            as="div"
            className="dark:bg-tertiary-black relative inline-block text-left "
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-semi-grayish-blue rounded-md bg-dark-blue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  {landingPages.map(({text, destination})=><MobileLink key={uuid()} text={text} destination={destination}/>)}
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
