import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import instance from "@/app/_utils/axios.instance";
import { baseAPI } from "../../../../../constant/apis";
import Swal from "sweetalert2";
import Loader from "@/app/_components/Loader";
import { useRouter } from "next/navigation";

export default function ProductDetailModal({ isOpen, onClose, product}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const DeleteProduct = async () => {
    setIsSubmitting(true);
    try {
      const response = await instance.delete(
        `${baseAPI}/product/${product.id}`
      );
      setIsSubmitting(false);
      onClose(true);
      Swal.fire("Success", "Product deleted successfully", "success")
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire("Error", "Can't deleted product", "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitting) return <Loader />;
  if (!product) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Product Details
                </DialogTitle>
                <div className="mt-2">
                  <img
                    src={product.product_image}
                    alt={product.product_name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <p>
                    <strong>Name:</strong> {product.product_name}
                  </p>
                  <p>
                    <strong>Price:</strong> {product.price}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                  <p>
                    <strong>Description:</strong> {product.description}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onClose(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="inline-flex ms-2 justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={DeleteProduct}
                  >
                    Delete
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
