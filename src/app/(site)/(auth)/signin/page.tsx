import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your BEET POS account to access your dashboard, manage your business, view reports, and configure your point of sale system.",
  openGraph: {
    title: "Sign In - BEET POS",
    description: "Sign in to your BEET POS account to manage your business.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
