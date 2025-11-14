import { Page, Product, Project, ContactInfo, SocialLink } from './types';

export const PAGES: Page[] = [
  { id: 'home', label: 'Início' },
  { id: 'products', label: 'Produtos' },
  { id: 'projects', label: 'Projetos' },
  { id: 'about', label: 'Sobre Nós' },
  { id: 'contact', label: 'Contato' }
];

export const PRODUCTS: Product[] = [
  {
    title: 'Chaveiros Personalizados',
    description: 'Chaveiros personalizados em formato de camiseta, disponíveis em preto e branco. Uma forma criativa e memorável de promover a sua marca em eventos e como brindes corporativos.',
    image: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/0.jpeg',
    price: 'R$00,00'
  },
  {
    title: 'Chaveiros de Acrílico Personalizados',
    description: 'Chaveiros de acrílico personalizados com impressão de alta qualidade. Um brinde moderno e durável, perfeito para eventos, grupos e para fortalecer a identidade da sua marca.',
    image: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/chaveiro-adr.jpeg'
  },
  {
    title: 'Chaveiros Promocionais para Marcas',
    description: 'Transforme sua logomarca em um brinde memorável. Chaveiros promocionais que carregam a identidade da sua empresa, ideais para feiras, eventos e ações de marketing.',
    image: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/image_0.jpeg'
  },
  {
    title: 'Chaveiros de Acrílico com Formato Especial',
    description: 'Liberdade para criar. Desenvolvemos chaveiros de acrílico em formatos totalmente personalizados, com impressão digital de alta definição. Perfeito para logotipos e designs únicos.',
    image: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/image_1.jpeg'
  },
  {
    title: 'Chaveiros Emborrachados de Alto Relevo',
    description: 'Destaque o seu time, marca ou evento com chaveiros emborrachados de alto relevo. Design robusto, cores vibrantes e um acabamento premium que causa impacto imediato.',
    image: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/image_2.jpeg'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Feira de Automóveis',
    description: 'Criamos chaveiros de metal personalizados em formato de pistão para uma grande montadora, distribuídos em seu stand. O resultado foi um brinde único que gerou grande engajamento com os visitantes.'
  },
  {
    title: 'Lançamento Imobiliário',
    description: 'Para uma construtora, desenvolvemos elegantes chaveiros em formato de casa com o logo do novo empreendimento. Foram entregues aos primeiros visitantes, associando a marca a um momento especial.'
  },
  {
    title: 'Campanha para Cafeteria',
    description: 'Produzimos chaveiros criativos em formato de xícara de café para uma rede de cafeterias. A campanha "Leve nosso café com você" foi um sucesso, fidelizando clientes e aumentando a visibilidade da marca.'
  }
];

export const WHATSAPP_PHONE_NUMBER = '5519997505503';
export const WHATSAPP_LINK_BASE = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: '✉️',
    title: 'Envie-nos um E-mail',
    text: 'Envie-nos um e-mail para contato@kibrindes.com para dúvidas e encomendas. Respondemos prontamente para o ajudar.',
    link: 'mailto:contato@kibrindes.com'
  },
  {
    icon: '📞',
    title: 'Ligue-nos',
    text: 'Ligue para o nosso escritório através do +55 19 99750-5503 para assistência imediata ou para discutir as suas necessidades.',
    link: 'tel:+5519997505503'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500 mx-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/></svg>`,
    title: 'WhatsApp',
    text: 'Converse conosco no WhatsApp para um atendimento rápido e personalizado. Toque para iniciar a conversa!',
    link: WHATSAPP_LINK_BASE
  },
  {
    icon: '📍',
    title: 'Visite-nos',
    text: 'Encontre-nos na Avenida Paulista, 1578, São Paulo. Venha ver as nossas amostras de produtos.'
  }
];

export const PROJECT_IMAGES: string[] = [
  'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/5.jpeg',
  'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/6.jpeg',
  'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/0.jpeg',
  'https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/8.jpeg',
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'WhatsApp',
    url: WHATSAPP_LINK_BASE,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/></svg>`
  },
  {
    name: 'Facebook',
    url: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"/></svg>`
  },
  {
    name: 'Instagram',
    url: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>`
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
  }
];