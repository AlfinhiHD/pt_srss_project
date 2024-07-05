"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import instance from "@/app/_utils/axios.instance";
import { baseAPI } from "../../../../../constant/apis";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Loader from "@/app/_components/Loader";

const ProductForm = ({
  editValue,
}: {
  editValue?: {
    id?: string;
    product_name: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
  };
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddProduct = async (values) => {
    const formData = new FormData();
    formData.append("product_name", values.product_name);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);
    formData.append("Image", values.image);
    setIsSubmitting(true);
    try {
      const response = await instance.post(`${baseAPI}/product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsSubmitting(false);
      Swal.fire("Success", "Product added successfully", "success").then(() => {
        router.push("/admin");
      });
      console.log("Product added successfully:", response.data);
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire("Error", error.response?.data || error.message, "error");
      console.error(
        "Error adding product:",
        error.response?.data || error.message
      );
    }
  };

  const initialValues = {
    product_name: editValue?.product_name || "",
    price: editValue?.price || null,
    quantity: editValue?.quantity || null,
    description: editValue?.description || "",
    image: null,
  };

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/gif",
  ];


  const validationSchema = Yup.object().shape({
    product_name: Yup.string().required("Nama produk diperlukan"),
    price: Yup.number()
      .required("Harga produk diperlukan")
      .positive("Harga harus positif"),
    quantity: Yup.number()
      .required("Quantity diperlukan")
      .positive("Quantity harus positif"),
    description: Yup.string().required("Deskripsi diperlukan"),
    image: Yup.mixed()
      .required("Gambar produk diperlukan")
      .test("fileFormat", "Format file tidak valid", (value) => {
        return (
          value &&
          value instanceof File &&
          SUPPORTED_FORMATS.includes(value.type)
        );
      }),
  });

  if (isSubmitting) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleAddProduct}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="space-y-4 mt-14">
          <div className="flex flex-col">
            <label htmlFor="product_name" className="text-sm font-semibold">
              Nama Produk
            </label>
            <Field
              id="product_name"
              name="product_name"
              type="text"
              placeholder="Nama Produk"
              className="border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            />
            <ErrorMessage
              name="product_name"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-semibold">
              Harga Produk
            </label>
            <Field
              id="price"
              name="price"
              type="number"
              placeholder="Harga Produk"
              className="border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            />
            <ErrorMessage
              name="price"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity" className="text-sm font-semibold">
              Quantity
            </label>
            <Field
              id="quantity"
              name="quantity"
              type="number"
              placeholder="Quantity"
              className="border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            />
            <ErrorMessage
              name="quantity"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-semibold">
              Deskripsi
            </label>
            <Field
              id="description"
              name="description"
              type="text"
              placeholder="Deskripsi"
              className="border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            />
            <ErrorMessage
              name="description"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image" className="text-sm font-semibold">
              Gambar Produk
            </label>
            <input
              id="image"
              name="image"
              type="file"
              onChange={(event) =>
                setFieldValue("image", event.currentTarget.files[0])
              }
              className="border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            />
            <ErrorMessage
              name="image"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
