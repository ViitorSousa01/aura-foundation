import React from 'react';
import Link from 'next/link';
import { Button } from '@/ui/button';

const ChatBotSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Fale com o Assistente Virtual</h2>
        <p className="text-xl mb-6">
          Precisa de ajuda? Pergunte ao nosso assistente virtual sobre nossos serviços e obtenha respostas instantâneas!
        </p>
        <Link href="/src/app/AuraChat">
          <Button variant="primary">Conversar Agora</Button>
        </Link>
      </div>
    </section>
  );
};

export default ChatBotSection;
