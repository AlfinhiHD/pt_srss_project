import { useState } from "react";
import useSWR from "swr";
import { baseAPI } from "../../../constant/apis";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Carousel() {
  const { data, error } = useSWR(`${baseAPI}/product`, fetcher);
  const [index, setIndex] = useState(0);

  const products = data?.data || [];
  const itemsPerPage = 4;

  const handleNext = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? Math.max(products.length - itemsPerPage, 0) : newIndex;
    });
  };

  const visibleProducts = products.slice(index, index + itemsPerPage);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(index / itemsPerPage) * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/4 flex-shrink-0 p-2">
              <img
                src={product.product_image}
                alt={product.product_name}
                className="w-full h-64 object-cover"
              />
              <p className="mt-2">{product.product_name}</p>
            </div>
          ))}
        </div>
      </div>
      {products.length > itemsPerPage && (
        <>
          <button
            onClick={handlePrev}
            className="-ml-4 absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-400 text-white text-3xl px-3 py-1 rounded-full flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="-mr-4 absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-400 text-white text-3xl px-3 py-1 rounded-full flex items-center justify-center"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
}
