// config/security.config.js

module.exports = {
    headers: [
      {
        source: '/(.*)', // Aplica as regras a todas as rotas
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' https:; script-src 'self'; style-src 'self' 'unsafe-inline'",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ],
  };
  