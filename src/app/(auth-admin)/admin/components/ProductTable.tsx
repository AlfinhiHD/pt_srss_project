"use client";

import React, { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";
import instance from "@/app/_utils/axios.instance";
import useSWR from "swr";
import { baseAPI } from "../../../../../constant/apis";
import { useRouter } from "next/navigation";
import Loader from "@/app/_components/Loader";

const fetcher = (url) => instance.get(url).then((res) => res.data);

export default function ProductTable() {
  const router = useRouter();

  const { data, error, isLoading, mutate } = useSWR(
    `${baseAPI}/product`,
    fetcher
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDetailClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleEditClick = (id) => {
    router.push(`/editform/${id}`);
  };

  const handleCloseModal = (isMutate) => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    if (isMutate) {
      mutate();
    }
  };

  const filteredProducts = data?.data?.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <Loader />;

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="px-1 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border p-2 mr-4 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          />
        </div>
      </div>

      <table className="min-w-full bg-white">
        <thead className="bg-blue-100">
          <tr>
            <th className="text-left py-2 px-4">No</th>
            <th className="text-left py-2 px-4">Nama Produk</th>
            <th className="text-left py-2 px-4">Harga</th>
            <th className="text-left py-2 px-4">Jumlah Stok</th>
            <th className="text-left py-2 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.product_name}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-14">{product.quantity}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDetailClick(product)}
                    className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => handleEditClick(product.id)}
                    className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 focus:outline-none"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-4 px-4 text-center text-gray-500">
                Tidak ada data yang ditampilkan
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}
