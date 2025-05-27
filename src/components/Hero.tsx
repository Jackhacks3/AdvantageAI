import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'Save 10+ hours per week on repetitive tasks',
    'Increase customer satisfaction with 24/7 support',
    'Boost revenue with automated lead management',
    'Scale your business without hiring more staff'
  ];

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Give Your Small Business an{' '}
              <span className="text-primary-600">AI Advantage</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop losing time on repetitive tasks. Our AI agents handle customer service, 
              lead management, and admin work so you can focus on growing your business.
            </p>

            {/* Benefits List */}
            <div className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Get Your Free AI Assessment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                See How AI Can Help
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Trusted by 100+ small businesses</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">95%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">3x</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">AI Agent Online</span>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">Customer Inquiry</div>
                  <div className="text-gray-900">"What are your business hours?"</div>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-sm text-primary-600 mb-2">AI Response (Instant)</div>
                  <div className="text-gray-900">
                    "We're open Monday-Friday 9AM-6PM EST. I can also schedule a consultation 
                    for you right now if you'd like to discuss your specific needs!"
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Response time: 0.3 seconds</span>
                  <span>Customer satisfaction: 98%</span>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 