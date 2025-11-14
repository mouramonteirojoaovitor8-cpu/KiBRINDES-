import React, { useState } from 'react';
import { PageId } from './types';
import { PAGES, PRODUCTS, PROJECTS, CONTACT_INFO } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLoginSuccess = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    setActivePage('products');
  };

  const handleNavigation = (pageId: PageId) => {
    if (pageId === 'products' && !isAuthenticated) {
      alert('Por favor, faça login para acessar os produtos.');
      return;
    }
    setActivePage(pageId);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onLoginSuccess={handleLoginSuccess} />;
      case 'products':
        if (!isAuthenticated) {
          return <HomePage onLoginSuccess={handleLoginSuccess} />;
        }
        return <ProductsPage products={PRODUCTS} />;
      case 'projects':
        return <ProjectsPage projects={PROJECTS} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage contactInfo={CONTACT_INFO} />;
      default:
        return <HomePage onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header
        pages={PAGES}
        activePage={activePage}
        setActivePage={handleNavigation}
        isAuthenticated={isAuthenticated}
      />
      <main className="pt-20 flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;