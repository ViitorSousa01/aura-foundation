import '../style/globals.css';
import { Inter, Hepta_Slab } from 'next/font/google'
import Header from '@/components/layout/header'; // ou o caminho correto do seu componente
import Footer from '@/components/layout/footer'; // ou o caminho correto do seu componente Footer

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const heptaSlab = Hepta_Slab({ subsets: ['latin'], variable: '--font-hepta-slab' })

export const metadata = {
  title: 'Aura Soluções - Consultoria em TI, Desenvolvimento Web e Segurança',
  description: 'Transforme sua empresa com soluções de TI personalizadas. Consultoria, desenvolvimento de sites, análise de dados e segurança da informação para levar seu negócio ao próximo nível.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${heptaSlab.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

