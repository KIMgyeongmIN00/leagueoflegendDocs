/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
        port: '',
        search: '',
      },
    ],
  },
  experimentalRuntimeJSBundles: false,
};

export default nextConfig;
