
import React from 'react';
import { 
  Recycle, 
  Globe2, 
  Leaf, 
  ShieldCheck, 
  Zap, 
  Users, 
  BarChart3,
  Factory
} from 'lucide-react';
import { NavItem, ServiceItem, ProductItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Circular Polymer Supply',
    description: 'High-quality recycled polymers (HDPE, LDPE, PP, PET) engineered for performance and reliability across global industries.',
    icon: <Recycle className="w-8 h-8 text-emerald-500" />
  },
  {
    title: 'Global Logistics Hub',
    description: 'Strategically based in Somerton, Melbourne, managing a complex international supply chain for seamless plastic redistribution.',
    icon: <Globe2 className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'Recycling Infrastructure',
    description: 'Advanced processing facilities transforming industrial plastic waste back into valuable, reusable raw materials.',
    icon: <Factory className="w-8 h-8 text-emerald-400" />
  },
  {
    title: 'Material Science R&D',
    description: 'Tailoring polymer properties to meet specific industrial requirements while maintaining 100% recyclability.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    name: 'HDPE Granules',
    category: 'High-Density Polyethylene',
    description: 'Used for bottles, containers, and piping. Highly durable and chemical resistant.',
    imageUrl: 'https://picsum.photos/seed/hdpe/800/600'
  },
  {
    name: 'LDPE Pellets',
    category: 'Low-Density Polyethylene',
    description: 'Perfect for films, bags, and flexible packaging solutions with high transparency.',
    imageUrl: 'https://picsum.photos/seed/ldpe/800/600'
  },
  {
    name: 'PP Resins',
    category: 'Polypropylene',
    description: 'Ideal for automotive parts, textiles, and food packaging needing heat resistance.',
    imageUrl: 'https://picsum.photos/seed/pp/800/600'
  },
  {
    name: 'rPET Flakes',
    category: 'Recycled Polyethylene Terephthalate',
    description: 'Food-grade recycled PET for the next generation of beverage and food containers.',
    imageUrl: 'https://picsum.photos/seed/pet/800/600'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Traceability',
    description: 'End-to-end transparency in our supply chain, ensuring ethical sourcing and material purity.',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: 'Eco-Standard',
    description: 'Exceeding global environmental compliance benchmarks and reducing carbon footprints.',
    icon: <Leaf className="w-6 h-6" />
  },
  {
    title: 'Quality Control',
    description: 'Rigorous laboratory testing for every batch to ensure consistent mechanical properties.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Global Network',
    description: 'Connecting manufacturers and recyclers across 40+ countries for a truly global impact.',
    icon: <Users className="w-6 h-6" />
  }
];
