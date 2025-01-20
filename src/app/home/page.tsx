'use client'; // Indica que o componente é um Client Component

import Image from 'next/image'; // Importação padrão para imagens no Next.js
import Link from 'next/link'; // Importação padrão para navegação no Next.js

// Importações de componentes personalizados
import Button from '@/ui/button';
import HeroSection from '@/sections/heroSection';
import AboutSection from '@/sections/aboutSection';
import ServicesSection from '@/sections/servicesSection';
import ChatBotSection from '@/sections/chatBotSection';
import TestimonialsSection from '@/sections/testimonialsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* AI Chatbot Section */}
      <ChatBotSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua empresa?</h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e descubra como podemos ajudar a otimizar os processos da sua empresa com soluções de TI inovadoras.
          </p>
          <div className="flex justify-center space-x-4">
            <Button href="/contato" variant="secondary">
              Solicite um Orçamento
            </Button>
            <Button href="/contato" variant="outline">
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
