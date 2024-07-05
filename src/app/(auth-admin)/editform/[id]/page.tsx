import dynamic from "next/dynamic";
const EditProductForm = dynamic(() => import("../components/EditProductForm"));

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Edit Produk</h1>
      <EditProductForm />
    </div>
  );
};

export default page;
