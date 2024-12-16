// chatBotSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

const ChatBotSection: React.FC = () => {
  const handleChatClick = () => {
    console.log('Abrir chatbot');
    // Aqui você pode adicionar lógica para abrir um chatbot, por exemplo, usando uma biblioteca de chat ou um modal.
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Fale com o Assistente Virtual</h2>
        <p className="text-xl mb-6">
          Precisa de ajuda? Pergunte ao nosso assistente virtual sobre nossos serviços e obtenha respostas instantâneas!
        </p>
        <Button onClick={handleChatClick} variant="primary">
          Conversar Agora
        </Button>
      </div>
    </section>
  );
};

export default ChatBotSection;
