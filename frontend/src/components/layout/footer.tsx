import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p>Telefone: (11) 1234-5678</p>
            <p>E-mail: contato@aurasolucoes.com</p>
            <p>Endereço: Rua Joaõ robalo, 215 - São Paulo, SP</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul>
              <li>
                <Link href="/privacidade">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="/termos">Termos de Serviço</Link>
              </li>
              <li>
                <Link href="/blog">Github</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter />
              </Link>
              <Link href="https://www.linkedin.com/in/vitor-manuel-84a848165/" aria-label="LinkedIn">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Aura Soluções - Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
