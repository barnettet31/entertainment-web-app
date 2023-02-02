import { signIn } from "next-auth/react";
import { getLandingLayout } from "../../components/layouts/landingLayout/landingLayout";
import { NextPageWithLayout } from "../_app";
import { Logo } from "../../components/logo/logo.component";

const SignIn: NextPageWithLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col gap-10 justify-center items-center">
        <Logo classes="mb-4" />
      <div className="flex flex-col gap-4 bg-semi-dark-blue px-8 md:w-1/4 rounded shadow py-8">
        <h1 className="text-white  text-2xl">Login</h1>
        <p className="text-gray-400 text-base">You will be prompted to authorize this application to your user data through discord. I promise not to use your data for nefarious purposes, but also I will probably delete you eventually.</p>
        <button
          type="button"
          onClick={() => void signIn("discord")}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red px-6 py-3 text-center text-lg font-medium text-white shadow-sm hover:bg-red/70"
        >
          Login with Discord
        </button>
      </div>
    </div>
  );
};

SignIn.getLayout = getLandingLayout;

export default SignIn;
