import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you are looking for could not be found. Return to the BEET POS homepage to explore our point of sale solutions.",
  robots: {
    index: false,
    follow: true,
  },
};

const ErrorPage = () => {
  return (
    <>
      <HeroSub
        title="404"
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
