import React from 'react';
import { Project } from '../types';
import { PROJECT_IMAGES } from '../constants';

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-center py-16 px-8 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projetos em Destaque: Chaveiros</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Veja como nossos chaveiros personalizados se tornam peças centrais em campanhas de sucesso. Um pequeno objeto, um grande impacto na visibilidade da marca.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">#Chaveiros</span>
          <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">#BrindesCriativos</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">#Marketing</span>
        </div>
      </div>
      <div className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-center text-3xl font-bold text-gray-900 mb-12">Nossa Galeria de Chaveiros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROJECT_IMAGES.map((src, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <img 
                  src={src} 
                  alt={`Exemplo de chaveiro personalizado ${index + 1}`}
                  className="w-full h-full object-cover aspect-square transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;