import React from 'react';
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Customer Service AI', href: '#services' },
      { name: 'Sales & Lead Management', href: '#services' },
      { name: 'Administrative AI', href: '#services' },
      { name: 'Marketing AI', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Process', href: '#process' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Free AI Assessment', href: '#contact' },
      { name: 'ROI Calculator', href: '#benefits' },
      { name: 'Case Studies', href: '#testimonials' },
      { name: 'FAQ', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold">Advantage AI Solutions</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering small businesses with AI automation that saves time, 
                reduces costs, and drives growth. Your success is our mission.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-300">hello@advantageai.solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                  <span className="text-gray-300">
                    123 Business Ave, Suite 100<br />
                    Your City, ST 12345
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <div className="mt-6 p-4 bg-primary-900 rounded-lg">
                <h4 className="font-semibold text-primary-100 mb-2">
                  Ready to Get Started?
                </h4>
                <p className="text-primary-200 text-sm mb-3">
                  Get your free AI assessment today
                </p>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Advantage AI Solutions. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Trusted by 100+ small businesses across the country
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-500">
              <div className="text-xs">
                <div className="font-semibold">98%</div>
                <div>Client Satisfaction</div>
              </div>
              <div className="text-xs">
                <div className="font-semibold">$2M+</div>
                <div>Client Savings</div>
              </div>
              <div className="text-xs">
                <div className="font-semibold">24/7</div>
                <div>AI Support</div>
              </div>
              <div className="text-xs">
                <div className="font-semibold">1-2 Weeks</div>
                <div>Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 