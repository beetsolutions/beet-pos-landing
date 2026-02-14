import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your BEET POS account and start transforming your business today. Join thousands of businesses that trust BEET POS for their operations.",
  openGraph: {
    title: "Sign Up - BEET POS",
    description: "Create your BEET POS account and start transforming your business today.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <SignUp />
    </>
  );
};

export default SignupPage;
