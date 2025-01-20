'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Quem Somos</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto text-center">
          A Aura Soluções é uma empresa especializada em consultoria de TI, desenvolvimento e manutenção de sites, análise de dados e segurança da informação. Nosso time de especialistas está pronto para oferecer soluções inovadoras e sob medida para atender às necessidades tecnológicas do seu negócio.
        </p>
        <div className="text-center">
          <Link href="/sobre" className="text-primary font-semibold hover:underline">
            Saiba mais sobre nossa história
          </Link>
        </div>
      </div>
    </section>
  );
}
