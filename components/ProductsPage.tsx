import React, { useState } from 'react';
import { Product } from '../types';
import { WHATSAPP_LINK_BASE } from '../constants';

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleRequestQuote = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const getWhatsappUrl = (productTitle: string) => {
    const message = `Olá, Ki Brindes! Tenho interesse em um orçamento para o produto: "${productTitle}". Gostaria de mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    return `${WHATSAPP_LINK_BASE}?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="text-center py-16 px-8 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore nossa coleção de brindes personalizados de alta qualidade, perfeitos para eventos, campanhas e presentes corporativos.
        </p>
      </div>
      <div className="px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">{product.description}</p>
                <div className="mt-6">
                  {product.price && (
                    <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
                  )}
                  <button 
                    onClick={() => handleRequestQuote(product)}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 shadow transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
                    </svg>
                    Pedir Orçamento
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
                {selectedProduct.title}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.title} 
              className="w-full h-64 object-contain rounded-lg mb-6 bg-gray-100"
            />

            <p className="text-gray-700 mb-6" id="modal-description">
              Preparamos uma mensagem para você começar! Clique abaixo para ser direcionado ao WhatsApp.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-200">
              <p className="text-gray-800 font-mono text-sm">
                {`Olá, Ki Brindes! Tenho interesse em um orçamento para o produto: "${selectedProduct.title}". Gostaria de mais informações.`}
              </p>
            </div>
            
            <div className="flex">
              <a
                href={getWhatsappUrl(selectedProduct.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
                </svg>
                Ir para o WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;