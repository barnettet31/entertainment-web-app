import { Menu, Transition } from "@headlessui/react";
import { api } from "../../utils/api";
import Image from "next/image";
import { Fragment } from "react";
import { signOut } from "next-auth/react";
export const ProfileButton = () => {
  const { data: userProfile, isLoading } = api.me.getProfileData.useQuery();

  return (
    <Menu
      as="div"
      className="relative flex items-center justify-end lg:absolute lg:bottom-9"
    >
      <Menu.Button className="h-6 w-6 overflow-hidden rounded-full border border-white lg:h-10 lg:w-10">
        {userProfile?.image ? (
          <Image src={userProfile.image} alt="profile" width="50" height="50" />
        ) : (
          <div className="h-full w-full bg-grayish-blue" />
        )}
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        as={Fragment}
      >
        <Menu.Items className="absolute right-0 top-5 lg:left-10 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-lg bg-grayish-blue text-center  shadow-lg focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active ? "bg-grayish-blue/75 text-white" : "bg-transparent"
                  } group flex w-full items-center justify-center rounded-md px-2 py-2 gap-2 text-sm hover:opacity-75`}
                  onClick={() => void signOut()}
                >
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
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  <span>Logout</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
