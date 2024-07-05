import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("./components/LoginPage"))

const page = () => {
  return <LoginPage />;
};

export default page;
