import dynamic from "next/dynamic";
const ProductForm = dynamic(() => import("./components/ProductForm"));

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Form Produk</h1>
      <ProductForm />
    </div>
  );
};

export default page;
