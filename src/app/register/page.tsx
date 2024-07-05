import dynamic from "next/dynamic";
const RegisterPage = dynamic(() => import("./components/RegisterPage"))

const page = () => {
  return <RegisterPage />;
};

export default page;
