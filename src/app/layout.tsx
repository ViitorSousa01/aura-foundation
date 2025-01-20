import '../styles/globals.css';  // Ajustado para o caminho correto, considerando que o arquivo está na pasta 'styles'
import { Inter, Hepta_Slab } from 'next/font/google';
import Header from '../components/Header';  // Usando alias configurado
import Footer from '../components/Footer';  // Usando alias configurado

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const heptaSlab = Hepta_Slab({ subsets: ['latin'], variable: '--font-hepta-slab' });

export const metadata = {
  title: 'Aura Soluções - Consultoria em TI, Desenvolvimento Web e Segurança',
  description:
    'Consultoria, desenvolvimento de sites, análise de dados e segurança da informação para transformar sua empresa com soluções de TI personalizadas.',
  robots: 'index, follow', // Certifique-se de que os motores de busca possam indexar suas páginas
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${heptaSlab.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
