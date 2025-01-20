// config/optimization.config.js

module.exports = {
    performance: {
      maxAssetSize: 512000, // Limite de tamanho dos arquivos (em bytes)
      maxEntrypointSize: 512000, // Tamanho máximo para pontos de entrada
      hints: 'warning', // Exibe avisos quando os limites são ultrapassados
    },
    caching: {
      longTermCache: true, // Ativa cache de longo prazo para ativos estáticos
      cacheControl: {
        public: true,
        maxAge: 31536000, // Um ano em segundos
      },
    },
  };
  