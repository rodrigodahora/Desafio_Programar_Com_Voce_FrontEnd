import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['blogger.googleusercontent.com', 'oreinodopeixe.com.br', 'static.wixstatic.com', 'images.tcdn.com.br', 'orcapescados.com.br', 'img77.uenicdn.com'],
  },
  webpack(config) {
    // Personalizações de Webpack podem ser feitas aqui se necessário
    return config;
  },
};

export default nextConfig;