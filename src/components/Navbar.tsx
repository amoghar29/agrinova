import React, { useState } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { AuthModal } from './auth/AuthModal';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'signin' | 'signup' }>({
    isOpen: false,
    type: 'signin',
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Agrinova</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            <a href="#features" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#services" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <button
              onClick={() => setAuthModal({ isOpen: true, type: 'signin' })}
              className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Features
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setAuthModal({ isOpen: true, type: 'signin' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setAuthModal({ isOpen: true, type: 'signup' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
    </nav>
  );
}