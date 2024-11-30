import React from 'react';
import { TrendingDown, Users, AlertTriangle } from 'lucide-react';

const problems = [
  {
    title: 'Market Access',
    description: 'Farmers struggle to find reliable buyers and fair prices for their produce.',
    icon: Users,
  },
  {
    title: 'Unpredictable Pricing',
    description: 'Price fluctuations and market volatility affect farmer income stability.',
    icon: TrendingDown,
  },
  {
    title: 'Ineffective Platforms',
    description: 'Existing solutions lack long-term commitment and sustainable partnerships.',
    icon: AlertTriangle,
  },
];

export function Problems() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">The Challenge</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Problems We're Solving
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <problem.icon className="h-5 w-5 flex-none text-green-600" />
                  {problem.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{problem.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}