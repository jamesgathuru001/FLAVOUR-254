/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    
    images: {
        domains: ["keqlcbtbliegkgzbrzdu.supabase.co"]
      }
};

export default nextConfig;
