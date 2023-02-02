import { getLandingLayout } from "../../components/layouts/landingLayout/landingLayout";
import { NextPageWithLayout } from "../_app";

const SignIn:NextPageWithLayout = ()=>{
    return <h1 className="text-red-600 text-3xl font-bold">This is my login page</h1>
}

SignIn.getLayout = getLandingLayout

export default SignIn