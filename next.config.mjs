/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'commondatastorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'commondatastorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'ensemble-website-assets.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
     {
        protocol: "https",
        hostname: "etedge-insights.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "indiacsr.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ensemble-website-assets.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
