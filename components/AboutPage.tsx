import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-20 px-8 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          A Arte de Transformar Marcas em Memórias
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Vamos além do brinde. Criamos pontos de contato que contam a sua história e fortalecem laços.
        </p>
      </div>

      {/* Nossa Missão */}
      <div className="py-20 px-8 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          A Ki Brindes nasceu de uma paixão: a de materializar ideias e fortalecer conexões. Acreditamos que um brinde bem pensado é mais do que um objeto; é um mensageiro da sua marca, um elo que cria laços duradouros com clientes, parceiros e colaboradores. Nossa missão é ser a ponte entre a sua visão e um produto final que inspire, encante e, acima de tudo, gere resultados.
        </p>
      </div>

      {/* Nossos Pilares */}
      <div className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-3xl font-bold text-gray-900 mb-12">Nossos Pilares</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Pilar 1: Criatividade */}
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white rounded-full p-5 mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Criatividade Sem Limites</h4>
              <p className="text-gray-700">Desafiamos o convencional para criar brindes que surpreendem e se destacam, garantindo que sua marca seja sempre lembrada.</p>
            </div>
            {/* Pilar 2: Qualidade */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full p-5 mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Qualidade que se Sente</h4>
              <p className="text-gray-700">Somos obcecados por detalhes. Dos materiais à impressão, cada produto reflete o padrão de excelência que sua marca merece.</p>
            </div>
            {/* Pilar 3: Parceria */}
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-5 mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Parceria Estratégica</h4>
              <p className="text-gray-700">Mais que fornecedores, somos parceiros. Mergulhamos no seu negócio para entender suas metas e entregar soluções que geram valor real.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testemunho */}
      <div className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Parceiros</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A confiança que construímos é o nosso maior ativo.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl relative border-t-4 border-red-500">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl text-yellow-400">★</span>
              ))}
            </div>
            <blockquote className="text-xl text-gray-800 mb-8 leading-relaxed italic">
              "A nossa experiência com a Ki Brindes foi fantástica. Entregaram brindes personalizados de alta qualidade que corresponderam perfeitamente às nossas necessidades de branding. A equipa foi profissional, pontual e atenta aos detalhes, tornando o nosso evento corporativo verdadeiramente especial."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">Laura Martins</div>
            <div className="text-gray-600">Diretora de Marketing, Tech Innovators Inc.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
