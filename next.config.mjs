/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: { optimizeCss: true },
    compiler: {
        styledComponents: true,
    }
};

export default nextConfig;
