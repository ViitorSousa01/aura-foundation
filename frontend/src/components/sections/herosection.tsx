'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary-dark to-secondary-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Transforme sua empresa com soluções de TI personalizadas
            </h1>
            <p className="text-xl mb-6">
              Consultoria, desenvolvimento de sites, análise de dados e segurança da informação para levar seu negócio ao próximo nível.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="secondary">
                Saiba Mais Sobre Nossos Serviços
              </Button>
              <Button variant="outline">
                Fale Conosco
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Substituímos a imagem por um fundo gradiente */}
            <div className="w-full h-auto bg-cover bg-center bg-no-repeat"
                 style={{ backgroundImage: 'url(/img/hero-background.jpg)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
