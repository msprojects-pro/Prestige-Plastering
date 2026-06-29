/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Rendering' | 'Plastering' | 'Refurbishment';
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  projectSize: string;
  message: string;
  location: string;
  timeframe: string;
}
