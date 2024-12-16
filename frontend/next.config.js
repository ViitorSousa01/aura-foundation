/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa o modo estrito do React para detectar problemas durante o desenvolvimento
  reactStrictMode: true,

  // Configurações de imagens (adapte conforme a necessidade do seu projeto)
  images: {
    domains: ['example.com'], // Substitua pelo domínio das suas imagens ou remova se não for necessário
    formats: ['image/avif', 'image/webp'], // Formatos de imagem otimizados
  },

  // Configurações de variáveis de ambiente (se houver)
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000/api', // Substitua pela sua URL de API
  },

  // Configuração do ESLint
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de ESLint durante a construção
  },

  // Configuração do Webpack para facilitar a resolução de caminhos
  webpack: (config) => {
    // Adiciona alias para facilitar as importações no projeto
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': './src/components',
      '@utils': './src/utils',
      '@styles': './src/styles', // Corrigido para o diretório correto
    };

    // Você pode adicionar mais configurações de Webpack conforme necessário
    return config;
  },

  // Configuração de internacionalização, se você for usar múltiplos idiomas
  i18n: {
    locales: ['pt-BR'], // Defina os idiomas necessários
    defaultLocale: 'pt-BR', // Idioma padrão
  },
};

module.exports = nextConfig;
