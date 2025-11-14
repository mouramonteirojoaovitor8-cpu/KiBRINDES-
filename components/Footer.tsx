import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-red-400 transition-colors">Explore</button></li>
              <li><button className="text-gray-300 hover:text-red-400 transition-colors">Suporte</button></li>
              <li><button className="text-gray-300 hover:text-red-400 transition-colors">Ki Brindes</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-400">Subscrever</h3>
            <p className="text-gray-400 mb-4">Mantenha-se atualizado com as nossas últimas notícias e promoções.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-red-700 transition-colors">
                Subscrever
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-400">Siga-nos</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Siga-nos no ${social.name}`}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                  dangerouslySetInnerHTML={{ __html: social.icon }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Ki Brindes. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;