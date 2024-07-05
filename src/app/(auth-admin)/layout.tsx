import Sidebar from "../_components/Sidebar";

interface IAdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 ml-64 p-8">
        <div className="justify-between items-center mb-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
