import dynamic from "next/dynamic";
const LandingPage = dynamic(() => import("./components/LandingPage"))

const page = () => {
  return <LandingPage />;
};

export default page;
