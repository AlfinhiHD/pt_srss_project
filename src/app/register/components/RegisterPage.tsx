"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { baseAPI } from "../../../../constant/apis";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "@/app/_components/Loader";
import { useState } from "react";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirmation password must match password"
    )
    .required("Confirmation password is required"),
});

export default function RegisterPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (values) => {
    const { username, email, password } = values;
    setIsSubmitting(true)
    try {
      const response = await axios.post(`${baseAPI}/user`, {
        username,
        email,
        password,
      });
      setIsSubmitting(false);
      Swal.fire("Success", "Berhasil register", "success").then(() => {
        router.push("/login");
      });
    } catch (error) {
      setIsSubmitting(false);
      console.error("Registration error:", error);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  if (isSubmitting) return <Loader />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="max-w-md w-full bg-blue-50 p-8 shadow-lg rounded-lg">
        <div className="flex justify-center text-center">
          <img
            src="/logosrss.png"
            alt="Company Logo"
            className="h-28 w-28 mb-4"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">
          Daftar Akun Admin
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ errors, touched }) => (
            <Form className="space-y-8">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-sm font-semibold">
                  Username
                </label>
                <Field
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  className={
                    "border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded " +
                    (errors.username && touched.username
                      ? "border-red-500"
                      : "border-gray-300")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className={
                    "border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded " +
                    (errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="flex flex-col mb-10">
                <label htmlFor="password" className="text-sm font-semibold">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={
                    "border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded " +
                    (errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="flex flex-col mb-10">
                <label
                  htmlFor="confirmpassword"
                  className="text-sm font-semibold"
                >
                  Konfirmasi Password
                </label>
                <Field
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  placeholder="Konfirmasi Password"
                  className={
                    "border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded " +
                    (errors.confirmpassword && touched.confirmpassword
                      ? "border-red-500"
                      : "border-gray-300")
                  }
                />
                <ErrorMessage
                  name="confirmpassword"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Daftar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
