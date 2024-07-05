"use client"

import React from "react";
import Link from "next/link";
import { useAuth } from "../_hooks/useAuth";

export default function Sidebar() {

  const auth = useAuth();
  const { logout } = auth;

  const handleLogout = () => {
    logout()
  };

  return (
    <div className="bg-blue-100 w-64 min-h-screen fixed left-0 top-0 z-50">
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center text-center">
            <img
              src="/logosrss.png"
              alt="Company Logo"
              className="h-28 w-28 mb-4"
            />
          </div>
          <ul className="mt-2">
            <li className="mb-2">
              <Link
                href="/admin"
                className="text-left w-full py-2 px-4 hover:bg-blue-300 rounded-lg font-medium focus:outline-none"
              >
                Data Produk
              </Link>
            </li>
            <li className="mb-2 mt-5">
              <Link
                href="/productform"
                className="text-left w-full py-2 px-4 hover:bg-blue-300 rounded-lg font-medium focus:outline-none"
              >
                Tambah Produk
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="bottom-4 absolute w-5/6">
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 rounded-lg text-center bg-gray-500 text-white hover:bg-gray-600 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
