import React from 'react';
import { ContactInfo } from '../types';

interface ContactPageProps {
  contactInfo: ContactInfo[];
}

const ContactPage: React.FC<ContactPageProps> = ({ contactInfo }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-center py-16 px-8 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entre em Contacto</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Contacte a Ki Brindes para Brindes Promocionais Personalizados
        </p>
      </div>
      <div className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const isSvgIcon = item.icon.startsWith('<svg');
            const commonClasses = "bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center block";

            const content = (
              <>
                <div className="text-5xl mb-6 flex items-center justify-center h-16">
                  {isSvgIcon ? (
                    <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </>
            );

            if (item.link) {
              return (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={commonClasses}>
                  {content}
                </a>
              );
            }

            return (
              <div key={index} className={commonClasses}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;