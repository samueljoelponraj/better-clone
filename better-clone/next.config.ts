import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ Enable SSR for styled-components
  },
};

export default nextConfig;
