export type PageId = 'home' | 'products' | 'projects' | 'about' | 'contact';

export interface Page {
  id: PageId;
  label: string;
}

export interface Product {
  title: string;
  description: string;
  image: string;
  price?: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  text: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}