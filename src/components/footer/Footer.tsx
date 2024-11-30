import React from 'react';
import { FooterColumn } from './FooterColumn';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';
import { Sprout } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-white">Agrinova</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering farmers and distributors through technology.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          {/* Legal */}
          <FooterColumn title="Legal">
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </FooterColumn>

          {/* Connect With Us */}
          <FooterColumn title="Connect With Us">
            <SocialLinks />
            <div className="mt-6 space-y-4">
              <a href="#" className="block">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Agrinova. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <select
                className="bg-gray-800 text-gray-400 rounded px-2 py-1 text-sm"
                defaultValue="IN"
              >
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
              <select
                className="bg-gray-800 text-gray-400 rounded px-2 py-1 text-sm"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}