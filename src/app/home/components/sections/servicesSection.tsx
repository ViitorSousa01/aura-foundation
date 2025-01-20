import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card';
import { Button } from '@/ui/button'; // Corrigido a importação do Button

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <Card className="flex flex-col items-center text-center">
    <CardHeader>
      <i className={`icon-${icon} text-4xl mb-4`}></i>
    </CardHeader>
    <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
    <CardContent>
      <p className="text-lg">{description}</p>
    </CardContent>
  </Card>
);

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Nossos Serviços</h2>
        <p className="text-xl mb-10 text-center">Soluções completas para sua empresa.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ServiceCard
            title="Consultoria Estratégica"
            description="Desenvolvemos planos personalizados para otimizar processos empresariais, aumentar a eficiência e impulsionar os resultados dos negócios."
            icon="laptop"
          />
          <ServiceCard
            title="Desenvolvimento Web"
            description="Criamos sites responsivos, modernos e seguros que atendem às suas necessidades e expectativas, proporcionando uma excelente experiência ao usuário."
            icon="code"
          />
          <ServiceCard
            title="Análise Avançada de Dados"
            description="Utilizamos técnicas avançadas para transformar dados em insights valiosos, ajudando a tomar decisões informadas e estratégicas para o crescimento sustentável da empresa."
            icon="bar-chart"
          />
          <ServiceCard
            title="Segurança Cibernética"
            description="Protegemos seus sistemas e dados contra ameaças cibernéticas, garantindo a continuidade dos negócios e a conformidade com as melhores práticas de segurança."
            icon="shield"
          />
        </div>
        <div className="text-center mt-12">
          <Button href="/servicos" variant="primary">
            Descubra nossos serviços completos
          </Button>
        </div>
      </div>
    </section>
  );
}
