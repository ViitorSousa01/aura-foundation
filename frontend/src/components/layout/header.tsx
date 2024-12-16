import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Corrigido a importação do Button

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 mr-8">
          Aura Soluções
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/sobre" className="hover:underline text-gray-600">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="hover:underline text-gray-600">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline text-gray-600">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto">
          <Button variant="outline">Entrar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;