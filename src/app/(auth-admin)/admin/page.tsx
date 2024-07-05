import dynamic from "next/dynamic";
const AdminPage = dynamic(() => import("./components/AdminPage"))

const page = () => {
  return <AdminPage />;
};

export default page;
