# ⚡ Aura Soluções — Consultoria em TI, Desenvolvimento Web e Segurança

O **Aura Soluções** é um projeto fullstack que une tecnologias modernas como **Next.js** e **Python/Flask** para oferecer soluções robustas em consultoria de TI, desenvolvimento web, segurança da informação e automações inteligentes.

---

## 🧠 Visão Geral

Este repositório combina backend em Python com frontend em Next.js, criando uma fundação sólida para aplicações modernas. O frontend segue as melhores práticas com App Router, componentes desacoplados e Tailwind. O backend é modular, pronto para escalabilidade, com autenticação, serviços de IA e testes automatizados.

---

## 🗂️ Estrutura do Projeto

```
aura/
├── backend/
│   ├── models/              # Modelos de dados (ex: user, assistant)
│   │   ├── __init__.py
│   │   ├── assistant.py
│   │   └── user.py
│   ├── routes/              # Rotas da API Flask
│   │   ├── __init__.py
│   │   ├── assistant.py
│   │   └── auth.py
│   ├── service/             # Lógicas de negócio (ex: IA, Auth)
│   │   ├── __init__.py
│   │   ├── assistant_ml.py
│   │   └── auth_service.py
│   ├── test/                # Testes automatizados
│   │   ├── test_assistant.py
│   │   └── test_auth.py
│   ├── app.py               # Entry point do backend
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── .github/workflows/   # CI para manutenção
│   │   └── frontend-maintenance.yml
│   ├── .husky/              # Pré-commit hooks
│   ├── config/              # Configurações gerais
│   │   ├── .eslintrc.js
│   │   └── next.config.js
│   ├── script/              # Scripts utilitários
│   │   └── maintenance.ts
│   ├── src/
│   │   ├── app/             # App Router com rotas
│   │   │   ├── sobre/
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── servicos/
│   │   │   │   └── page.tsx
│   │   │   ├── contato/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   └── theme-provider.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── public/
│   │   │   ├── placeholder-logo.svg
│   │   │   ├── placeholder-user.jpg
│   │   │   └── placeholder.svg
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── types/
│   │       └── index.d.ts
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── yarn.lock
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚀 Tecnologias Utilizadas

### 🔹 Frontend
- **Next.js 15+ (App Router)**
- **Tailwind CSS**
- **TypeScript**
- **shadcn/ui**
- ESLint + Prettier + Husky

### 🔹 Backend
- **Python 3.11+**
- **Flask**
- **Modularização com Blueprints**
- **Testes com `pytest`**
- **Docker Ready**

---

## ⚙️ Instalação

### 🔧 Clone o projeto
```bash
git clone https://github.com/ViitorSousa01/aura-foundation.git
cd aura-foundation
```

### 📦 Frontend
```bash
cd frontend
npm install
npm run dev
```

### 🧪 Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```

Acesse:
- http://localhost:3000 (Frontend)
- http://localhost:5000 (Backend)

---

## 🐳 Rodando com Docker

### 🔸 Backend
```bash
cd backend
docker build -t aura-backend .
docker run -p 5000:5000 aura-backend
```

### 🔸 Frontend
```bash
cd frontend
docker build -t aura-frontend .
docker run -p 3000:3000 aura-frontend
```

---

## 🛠️ Script de Manutenção Automatizada

Executa tarefas como análise de inconsistências e limpeza de arquivos desnecessários no frontend.

### Como usar:
```bash
cd frontend
npm install ts-node axios child_process crypto fs path os
npm run maintenance
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um fork
2. Crie uma branch (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: algo novo'`)
4. Push na sua branch (`git push origin minha-feature`)
5. Abra um Pull Request

---

## 📬 Contato

- **Email**: [vitorrdr93@gmail.com](mailto:vitorrdr93@gmail.com)  
- **GitHub**: [@ViitorSousa01](https://github.com/ViitorSousa01)

---

## 📄 Licença

Distribuído sob a **Licença XYZ**. Consulte o arquivo [`LICENSE`](./LICENSE) para mais detalhes.

---

Se quiser agora posso:
- Adicionar badges no topo (ex: `build`, `license`, `next.js`, `python`).
- Gerar um sumário clicável pro README.
- Criar uma imagem do projeto estilo "preview card" ou banner pro repositório.

Quer que eu adicione algum desses?
