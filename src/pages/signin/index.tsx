import { signIn } from "next-auth/react";
import { getLandingLayout } from "../../components/layouts/landingLayout/landingLayout";
import { NextPageWithLayout } from "../_app";

const SignIn: NextPageWithLayout = () => {
  return (
    <div className="grid h-screen place-items-center">
      <button
        type="button"
        onClick={() => void signIn("discord")}
        className="inline-flex items-center rounded-sm border border-transparent bg-red px-6 py-3 text-center text-lg font-medium text-white shadow-sm hover:bg-red/70 md:w-1/4"
      >
       Login with Discord
      </button>
    </div>
  );
};

SignIn.getLayout = getLandingLayout;

export default SignIn;
