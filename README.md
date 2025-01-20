# Aura Soluções - Consultoria em TI, Desenvolvimento Web e Segurança

O **Aura Soluções** é um projeto que combina um backend Python e um frontend Next.js. Ele oferece serviços de consultoria em TI, desenvolvimento de websites, análise de dados e segurança da informação. O frontend é construído usando o **Next.js** com **Tailwind CSS** para estilização e componentes personalizados. O backend pode incluir APIs, análise de dados e outras funcionalidades relacionadas à segurança da informação.

## Descrição
O **Aura Soluções** é um repositório para um projeto completo que integra backend e frontend para oferecer uma plataforma de soluções em tecnologia da informação. O backend é construído em Python e suporta APIs RESTful, análise de dados e recursos relacionados à segurança. O frontend é construído com **Next.js** e **Tailwind CSS**, fornecendo uma interface de usuário moderna e responsiva.

## Estrutura do Projeto (atualizada)

### Diretório Backend
- **backend/**
  - `app.py`: Código principal do backend.
  - `requirements.txt`: Dependências necessárias para o backend.
  - `Dockerfile`: Configuração Docker para o backend.

### Diretório Frontend
- **frontend/**
  - `.husky/`: Scripts Husky (hooks de pré-commit e pré-push).
  - `.next/`: Build gerado pelo Next.js (ignorar no Git).
  - `scripts/`: Scripts utilitários para manutenção e automação.
    - `maintenance.ts`: Script para manutenção automatizada do frontend.
  - `public/`: Arquivos públicos (imagens, favicon, etc.).
    - `images/`: Subpasta para imagens.
  - `src/`: Código fonte do projeto.
    - `app/`: Entrada principal do Next.js.
    - `layout.tsx`: Layout geral da aplicação.
    - `page.tsx`: Página principal.
    - `components/`: Componentes reutilizáveis.
      - `layout/`: Componentes de layout (header, footer).
      - `sections/`: Componentes seccionais da página.
      - `ui/`: Elementos básicos de UI.
      - `utils/`: Funções utilitárias.
    - `pages/`: Rotas da aplicação.
      - `api/`: API interna do Next.js.
      - `index.tsx`: Rota inicial.
    - `style/`: Arquivos de estilo.
      - `globals.css`: Estilos globais.
      - `variables.css`: Variáveis CSS (cores, fontes, etc.).
  - `.env`: Variáveis de ambiente.
  - `.eslintrc.js`: Configuração do ESLint.
  - `.prettierrc`: Configuração do Prettier.
  - `next-env.d.ts`: Tipagem para ambiente Next.js.
  - `next.config.js`: Configuração geral do Next.js.
  - `package.json`: Dependências do projeto.
  - `tsconfig.json`: Configuração do TypeScript.
  - `Dockerfile`: Configuração Docker para o frontend.
  - `tailwind.config.js`: Configuração do Tailwind CSS.

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/ViitorSousa01/aura-foundation.git
   cd aura-foundation
   ```

2. Navegue até o diretório frontend:

   ```
   cd frontend
   ```

3. Instale as dependências do Node.js:

   ```
   npm install
   ```

4. Instale as dependências do Python (caso esteja usando o backend Python):

   ```
   cd backend
   pip install -r requirements.txt
   ```

5. Inicie o desenvolvimento:

   ```
   npm run dev
   ```

6. Acesse o aplicativo em [http://localhost:3000](http://localhost:3000).

## Configuração do Docker (Opcional)

### Para o backend:
1. Navegue até o diretório backend.
2. Compile o Dockerfile com:

   ```
   docker build -t aura-backend .
   ```

3. Execute o contêiner:

   ```
   docker run -p 5000:5000 aura-backend
   ```

### Para o frontend:
1. Navegue até o diretório frontend.
2. Compile o Dockerfile com:

   ```
   docker build -t aura-frontend .
   ```

3. Execute o contêiner:

   ```
   docker run -p 3000:3000 aura-frontend
   ```

## Integração do Script de Manutenção

1. Crie o diretório `scripts/` dentro do diretório `frontend/`.
2. Adicione o arquivo `maintenance.ts` ao diretório `scripts/`.
3. Adicione o comando ao `package.json` do frontend:

   ```json
   {
     "scripts": {
       "maintenance": "ts-node scripts/maintenance.ts"
     }
   }
   ```

4. Instale as dependências necessárias para o script:

   ```
   npm install axios child_process crypto fs path os ts-node
   ```

5. Execute o script:

   ```
   npm run maintenance
   ```

## Estrutura de Arquivos
A estrutura do projeto foi atualizada para incluir o script de manutenção:

- **frontend/**
  - `scripts/`
    - `maintenance.ts`: Script para manutenção automatizada.
  - ... (outras pastas conforme descrito anteriormente)

## Contribuição
Se você deseja contribuir para o projeto, sinta-se à vontade para fazer um fork do repositório, criar uma nova branch, fazer suas modificações e enviar um pull request. Lembre-se de seguir as boas práticas de programação e manter a consistência com o restante do código.

## Contato
Se precisar de ajuda ou tiver dúvidas, sinta-se à vontade para me contatar:

- **Email**: Vitorrdr93@gmail.com
- **GitHub**: [ViitorSousa01](https://github.com/ViitorSousa01)

## Licença
Este projeto está licenciado sob a Licença XYZ - veja o arquivo LICENSE para mais detalhes.

