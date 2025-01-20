const path = require("path");

const nextConfig = {
  reactStrictMode: true, // Habilita o modo estrito do React

  webpack: (config) => {
    // Configuração de alias de caminho
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/app/components"),
      "@sections": path.resolve(__dirname, "src/app/home/components"),
      "@ui": path.resolve(__dirname, "src/app/ui"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "public"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    };

    // Adiciona suporte para arquivos .mjs
    config.module.rules.push({
      test: /\.mjs$/,
      type: "javascript/auto",
      include: /node_modules/,
    });

    return config;
  },

  images: {
    domains: ["example.com", "outrodominio.com"], // Domínios permitidos para otimização de imagens
    deviceSizes: [640, 750, 1080, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
        ],
      },
    ];
  },
  // Certifique-se de que a compilação está habilitada para variáveis de ambiente, caso necessário
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
