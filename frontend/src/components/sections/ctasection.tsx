import { Button } from 'src/components/ui/button';

export default function CTASection() {
  return (
    <section className="w-full py-16 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para transformar sua empresa?
        </h2>
        <p className="text-xl mb-8">
          Entre em contato conosco e descubra como podemos ajudar a otimizar os
          processos da sua empresa com soluções de TI inovadoras.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" variant="secondary">
            Solicite um Orçamento
          </Button>
          <Button size="lg" variant="outline">
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
}
