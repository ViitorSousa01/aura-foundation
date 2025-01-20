// src/components/TestimonialsSection.tsx

'use client'; // Indica que o componente é um Client Component

import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'; // Importação corrigida

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Depoimentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>Jane Doe</CardHeader>
            <CardTitle>CEO, Empresa Exemplo</CardTitle>
            <CardContent>
              <p>Essa empresa fez um ótimo trabalho ao implementar nossa nova infraestrutura de TI.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>John Smith</CardHeader>
            <CardTitle>CTO, Outra Empresa</CardTitle>
            <CardContent>
              <p>Excelente suporte e orientação estratégica. Recomendo!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Susan Lee</CardHeader>
            <CardTitle>Gerente de TI, Uma Empresa</CardTitle>
            <CardContent>
              <p>Soluções eficazes e equipe profissional. Muito satisfeito com os resultados.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
