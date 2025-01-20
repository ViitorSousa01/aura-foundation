const path = require('path');

module.exports = {
  // Resolução de caminhos e aliases para maior legibilidade
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@app': path.resolve(__dirname, 'src/app'), // Alias adicional
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Extensões padrão para simplificar importações
  },

  // Configuração do servidor de desenvolvimento
  devServer: {
    historyApiFallback: true, // Necessário para roteamento do SPA
    proxy: {
      '/api': 'http://localhost:3000/api', // Proxy para chamadas de API
    },
    compress: true, // Habilita compressão gzip para melhorar desempenho
    port: 3000, // Define a porta do servidor de desenvolvimento
  },

  // Configuração de módulos e regras
  module: {
    rules: [
      // Suporte a TypeScript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },

      // Regras para CSS/SCSS com Tailwind CSS
      {
        test: /\.css$/,
        use: [
          'style-loader', // Injeta CSS no DOM
          'css-loader', // Interpreta @import e url()
          'postcss-loader', // Processa CSS com plugins (ex: Tailwind CSS)
        ],
      },

      // Regras para otimização de imagens
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
        type: 'asset', // Utiliza o tipo 'asset' para otimização
        parser: {
          dataUrlCondition: {
            maxSize: 8192, // Arquivos menores que 8 KB serão convertidos para base64
          },
        },
        generator: {
          filename: 'static/images/[name][hash][ext]', // Define o nome do arquivo otimizado
        },
      },

      // Regras para fontes
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][hash][ext]', // Define o nome do arquivo otimizado
        },
      },
    ],
  },

  // Configurações adicionais para melhorar a performance
  optimization: {
    splitChunks: {
      chunks: 'all', // Divisão de código para otimização
    },
    runtimeChunk: 'single', // Extrai runtime para um único arquivo
  },

  // Configurações para produção
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // Define modo com base no ambiente
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map', // Gerenciamento de source maps
};
