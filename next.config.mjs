/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate unique build IDs to help with cache busting
  generateBuildId: async () => {
    // Use timestamp to ensure unique builds
    return `build-${Date.now()}`;
  },
  
  // Add headers to help with caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
