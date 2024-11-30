import React from 'react';
import { Handshake, LineChart, ShieldCheck, Truck, Users, Leaf } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'Direct Farm-to-Business Sales',
    description: 'Connect directly with businesses and establish long-term partnerships.',
    Icon: Handshake,
  },
  {
    title: 'Market Analytics',
    description: 'Access real-time market data and pricing insights.',
    Icon: LineChart,
  },
  {
    title: 'Quality Certification',
    description: 'Get your produce certified and maintain high standards.',
    Icon: ShieldCheck,
  },
  {
    title: 'Logistics Support',
    description: 'Efficient transportation and storage solutions.',
    Icon: Truck,
  },
  {
    title: 'Community Network',
    description: 'Join a network of farmers and businesses.',
    Icon: Users,
  },
  {
    title: 'Sustainable Practices',
    description: 'Guidance on sustainable farming methods.',
    Icon: Leaf,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for farmers and businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}