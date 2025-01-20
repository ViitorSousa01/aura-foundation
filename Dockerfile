# Base da imagem Node.js
FROM node:18 AS build

# Define o diretório de trabalho no container
WORKDIR /app

# Copia arquivos de configuração e instala dependências
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Executa o build
RUN npm run build

# Produção
FROM node:18-alpine
WORKDIR /app

# Copia o build
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./

# Instala dependências de produção
RUN npm install --only=production

# Define porta
EXPOSE 3000

# Inicia o servidor
CMD ["npm", "start"]
