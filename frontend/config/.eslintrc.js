module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json', // Faz com que o ESLint use o tsconfig.json
      },
      alias: {
        map: [
          ['@components', './src/app/components'],
          ['@sections', './src/app/home/components/sections'],
          ['@ui', './src/app/ui'],
          ['@styles', './src/styles'],
          ['@assets', './public'],
          ['@lib', './src/lib'],
          ['@hooks', './src/hooks'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Não precisa de React em JSX no Next.js
    '@typescript-eslint/no-unused-vars': ['warn'], // Alerta para variáveis não utilizadas
    'prettier/prettier': ['error'], // Enforce Prettier rules
    'react/prop-types': 'off', // Desativa verificação de prop-types, já que estamos usando TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Desativa a exigência de tipos de funções exportadas
    '@typescript-eslint/no-explicit-any': 'warn', // Alerta sobre o uso de "any"
    'no-console': 'warn', // Alerta sobre o uso de "console"
    'no-debugger': 'warn', // Alerta sobre o uso de "debugger"
  },
};
