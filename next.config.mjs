/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://doubtful-leoine-upnveteran-71c2c91d.koyeb.app:path*",
      },
    ];
  },
};

export default nextConfig;
