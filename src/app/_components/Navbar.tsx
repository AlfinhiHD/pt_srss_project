"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white px-24 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logosrss.png"
            alt="Company Logo"
            className="h-28 w-28 mr-2"
          />
          <span className="text-black text-lg font-bold">
            PT SUMBER REJEKI SUKSES SANTOSO
          </span>
        </div>
        <div className="flex space-x-4">
          <Link
            href="#profile"
            className="text-black text-lg hover:font-semibold hover:text-xl"
          >
            PROFIL
          </Link>
          <Link
            href="#mitra"
            className="text-black text-lg hover:font-semibold hover:text-xl"
          >
            MITRA
          </Link>
          <Link
            href="#products"
            className="text-black text-lg hover:font-semibold hover:text-xl"
          >
            PRODUK
          </Link>
          <Link
            href="#vision"
            className="text-black text-lg hover:font-semibold hover:text-xl"
          >
            VISI MISI
          </Link>
          <Link
            href="#location"
            className="text-black text-lg hover:font-semibold hover:text-xl"
          >
            LOKASI
          </Link>
        </div>
      </div>
    </nav>
  );
}
