"use client";

import Carousel from "@/app/_components/Carousel";
import Navbar from "@/app/_components/Navbar";



export default function Home() {
  return (
    <div>
    <Navbar />
    <section className="relative" id="profile">
      <img
        src="/backgroundtoko.png"
        alt="Store Background"
        className="w-full h-72 object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">TENTANG KAMI</h1>
      </div>
    </section>
    <section className="p-8 bg-blue-100 font-medium text-lg text-justify">
      <p>
        PT Sumber Rejeki Sukses Santoso merupakan perusahaan yang bergerak di
        bidang distribusi lampu Philips dengan cabang di Solo dan Yogyakarta.
        PT Sumber Rejeki Sukses Santoso juga dikenal sebagai Distributor Resmi
        Philips dan mendistribusikan produk Philips di dalam wilayahnya.
      </p>
      <p className="mt-10">
        Sejak awal, PT Sumber Rejeki Sukses Santoso telah berupaya menjalankan
        bisnis dengan integritas, inovasi dan fokus pada kepuasan pelanggan.
        Dengan semangat kewirausahaan dan ketekunan, perusahaan telah berhasil
        memperluas bisnisnya dari lokal ke nasional.
      </p>
    </section>
    <section className="p-8 text-center" id="mitra">
      <h2 className="text-black text-3xl mt-5 mb-12 font-bold">MITRA KAMI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <img src="/mitra1.png" alt="Partner 1" className="h-16 m-8 mx-auto" />
        <img src="/mitra2.png" alt="Partner 2" className="h-16 m-8 mx-auto" />
        <img src="/mitra3.jpg" alt="Partner 3" className="h-16 m-8 mx-auto" />
        <img src="/mitra4.png" alt="Partner 4" className="h-16 m-8 mx-auto" />
      </div>
    </section>
    <section className="p-8 text-center mt-5 bg-blue-100" id="products">
      <h2 className="text-3xl mt-5 mb-12 font-bold">PRODUK KAMI</h2>
      <Carousel />
    </section>
    <section className="py-8 px-44 flex flex-wrap items-center justify-between mb-10" id="vision"> 
      <div className="w-full text-center mb-8">
        <h2 className="text-black text-3xl font-bold mb-12">VISI & MISI</h2>
      </div>

      <div className="max-w-md px-4 py-8 bg-blue-100 rounded-lg shadow-lg text-center">
        <h2 className="text-black text-2xl font-bold mb-4">Visi</h2>
        <p className="text-gray-700">
          Menjadi perusahaan manufaktur lampu elektronik Indonesia yang
          terkemuka dan terpercaya kepada pelanggan.
        </p>
      </div>

      <div className="max-w-md px-4 py-8 bg-blue-100 rounded-lg shadow-lg text-center mt-8 md:mt-0 md:ml-8">
        <h2 className="text-black text-2xl font-bold mb-4">Misi</h2>
        <div className="text-left">
          <p className="text-gray-700 flex items-center">
            <span className="font-bold mr-2">1.</span> Memperluas jaringan
            penjualan di setiap kota
          </p>
          <p className="text-gray-700 flex mt-2">
            <span className="font-bold mr-2">2.</span> Memberikan kualitas
            pelayanan dan produk terbaik untuk mencapai kepuasan pelanggan.
          </p>
        </div>
      </div>
    </section>
    <section className="relative" id="location">
      <img
        src="/backgroundtoko.png"
        alt="Store Background"
        className="w-full h-96 object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950 bg-opacity-50 text-white">
        <h2 className="text-3xl font-bold mb-6">LOKASI KAMI</h2>
        <div className="text-center text-white mt-14">
          <p className="text-gray-200 font-semibold mb-2">
            PT Sumber Rejeki Sukses Santoso
          </p>
          <p className="text-gray-200 mb-2">
            Jl. Widoharjo No.66-68 Rejomulyo, Kec. Semarang Tim., Kota
            Semarang, Jawa Tengah 50123
          </p>
          <a
            href="https://maps.app.goo.gl/JWfNhNuhBSt5vb3A9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-200 hover:bg-blue-400 text-black py-2 px-4 rounded-lg transition duration-300 ease-in-out inline-block mt-4"
          >
            Lihat di Google Maps
          </a>
        </div>
      </div>
    </section>
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 PT Sumber Rejeki Sukses Santoso. All rights reserved.</p>
    </footer>
  </div>
  );
}
