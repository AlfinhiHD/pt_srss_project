"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { baseAPI } from "../../../../constant/apis";
import { useAuth } from "@/app/_hooks/useAuth";
import Swal from "sweetalert2";
import Loader from "@/app/_components/Loader";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const [authError, setAuthError] = useState("");
  const auth = useAuth();
  const { login } = auth;

  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const response = await axios.post(`${baseAPI}/user/login`, {
        email,
        password,
      });
      if (response.data.token) {
        login(response.data.token);
        Swal.fire("Success", "Berhasil login", "success");
      } else {
        setAuthError("Email atau password ada yang salah!");
      }
    } catch (error) {
      setAuthError("Email atau password ada yang salah!");
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

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
          Masuk ke Admin Page
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form className="space-y-8">
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

              {authError && <p className="text-red-500 text-sm">{authError}</p>}

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-3 text-center">
          <Link href="/register" className="text-blue-500 hover:underline">
            Belum punya akun admin?
          </Link>
        </div>
      </div>
    </div>
  );
}
