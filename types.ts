
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductItem {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
