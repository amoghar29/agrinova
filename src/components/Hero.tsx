import React from 'react';
import { ArrowRight, Sprout, Building2, HandshakeIcon } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Savor the Harvest, Support the Grower
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From Farms to Businesses, Ensuring Freshness and Lasting Partnerships
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#farmer-signup" className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                I'm a Farmer
              </a>
              <a href="#business-signup" className="rounded-md bg-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
                I'm a Business
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
              alt="Farm landscape"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}