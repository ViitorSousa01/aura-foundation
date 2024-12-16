# Usa uma imagem do Node.js
FROM node:18 AS build

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos do projeto
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Executa o build
RUN npm run build

# Produção
FROM node:18-alpine
WORKDIR /app

# Copia o build do estágio anterior
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./

# Instala dependências apenas para produção
RUN npm install --only=production

# Porta de execução
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]
