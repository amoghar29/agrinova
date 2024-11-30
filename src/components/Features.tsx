import React from 'react';
import { DollarSign, LineChart, ShieldCheck, Truck, LeafyGreen, Users } from 'lucide-react';

const farmerFeatures = [
  { name: 'Stable Income', description: 'Guaranteed payments and long-term contracts', icon: DollarSign },
  { name: 'Direct Sales', description: 'Skip intermediaries and maximize profits', icon: Truck },
  { name: 'Market Insights', description: 'Data-driven decisions for better yields', icon: LineChart },
];

const businessFeatures = [
  { name: 'Quality Assurance', description: 'Premium produce with quality guarantees', icon: ShieldCheck },
  { name: 'Reliable Supply', description: 'Consistent supply chain management', icon: LeafyGreen },
  { name: 'Sustainability', description: 'Support local farmers and sustainable practices', icon: Users },
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Benefits for Everyone
          </p>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">For Farmers</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {farmerFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">For Businesses</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {businessFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}