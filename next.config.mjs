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
      {
        protocol: "https",
        hostname: "online.fliphtml5.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    // NOTE: `statusCode: 301` is used (instead of `permanent: true`, which
    // would emit 308) to return an explicit HTTP 301 for legacy-SEO equity.
    // Order matters: specific sources must come before wildcard catch-alls.
    return [
      // --- Old slug variants → current equivalent page ---
      { source: '/contact-us', destination: '/contactus', statusCode: 301 },
      { source: '/about-us', destination: '/aboutus', statusCode: 301 },
      { source: '/insights', destination: '/blogs', statusCode: 301 },
      { source: '/blogs/undefined', destination: '/blogs', statusCode: 301 },

      // --- Old Design-Build section → best current match ---
      { source: '/design-build', destination: '/services', statusCode: 301 },
      { source: '/d-b', destination: '/services', statusCode: 301 },
      { source: '/design-build-approach', destination: '/services', statusCode: 301 },
      { source: '/design-build-about-us', destination: '/aboutus', statusCode: 301 },
      { source: '/design-build-projects', destination: '/projects', statusCode: 301 },
      { source: '/fitout-projects-corporate-office-design-and-interiors', destination: '/services', statusCode: 301 },

      // --- Old standalone project/content pages → Projects listing ---
      { source: '/commercial-office-building', destination: '/projects', statusCode: 301 },
      { source: '/perforated-steel-facade-lokmanya-bank', destination: '/projects', statusCode: 301 },
      { source: '/nine-months-of-happiness', destination: '/blogs', statusCode: 301 },

      // --- Careers (no such route exists) → Contact ---
      { source: '/career', destination: '/contactus', statusCode: 301 },
      { source: '/careers', destination: '/contactus', statusCode: 301 },

      // --- Thank-you page → Homepage ---
      { source: '/ensemble-thank-you', destination: '/', statusCode: 301 },

      // --- Old WordPress portfolio items with an EXACT current project match ---
      { source: '/portfolio-item/zydus', destination: '/projects/project-3', statusCode: 301 },
      { source: '/portfolio-item/tata-consultancy-services-mumbai', destination: '/projects/project-5', statusCode: 301 },

      // --- Remaining portfolio items (airtel, givenchy, kirloskar, maersk,
      //     pepe-jeans, workwise, tata-auto-components, ...) → Projects listing ---
      { source: '/portfolio-item/:slug*', destination: '/projects', statusCode: 301 },

      // --- Dead WordPress media assets → Homepage ---
      { source: '/wp-content/uploads/:path*', destination: '/', statusCode: 301 },
    ];
  },
};

export default nextConfig;
