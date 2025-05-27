import React from 'react';
import { MessageCircle, Users, FileText, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Customer Service AI Agent',
      description: 'Handle customer inquiries 24/7 with instant, accurate responses',
      features: [
        'Answers common questions instantly',
        'Escalates complex issues to humans',
        'Reduces response time by 95%',
        'Available in multiple languages'
      ],
      benefits: 'Save 20+ hours/week on customer support',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Sales & Lead Management AI',
      description: 'Qualify leads automatically and schedule appointments seamlessly',
      features: [
        'Qualifies leads with smart questions',
        'Schedules appointments automatically',
        'Follows up with prospects',
        'Integrates with your CRM'
      ],
      benefits: 'Increase conversion rates by 40%',
      color: 'secondary'
    },
    {
      icon: FileText,
      title: 'Administrative AI Agent',
      description: 'Automate data entry, scheduling, and routine communications',
      features: [
        'Processes forms and documents',
        'Manages calendar scheduling',
        'Handles routine emails',
        'Updates databases automatically'
      ],
      benefits: 'Eliminate 15+ hours of admin work weekly',
      color: 'accent'
    },
    {
      icon: TrendingUp,
      title: 'Marketing AI Agent',
      description: 'Create content, manage campaigns, and analyze customer data',
      features: [
        'Generates social media content',
        'Manages email campaigns',
        'Analyzes customer behavior',
        'Optimizes marketing spend'
      ],
      benefits: 'Boost marketing ROI by 60%',
      color: 'primary'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-50',
          border: 'border-primary-200',
          icon: 'bg-primary-100 text-primary-600',
          accent: 'text-primary-600'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-50',
          border: 'border-secondary-200',
          icon: 'bg-secondary-100 text-secondary-600',
          accent: 'text-secondary-600'
        };
      case 'accent':
        return {
          bg: 'bg-accent-50',
          border: 'border-accent-200',
          icon: 'bg-accent-100 text-accent-600',
          accent: 'text-accent-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'bg-gray-100 text-gray-600',
          accent: 'text-gray-600'
        };
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Agents That Actually Work for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our proven AI solutions designed specifically for small businesses. 
            Each agent is trained to handle your industry's unique challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-xl p-8 card-hover`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${colors.icon} p-3 rounded-lg`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`${colors.accent} font-semibold text-lg`}>
                  {service.benefits}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Preview */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How Our AI Agents Work
            </h3>
            <p className="text-gray-600">
              Simple, seamless integration that works with your existing systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Instant Setup
              </h4>
              <p className="text-gray-600">
                We configure your AI agent to understand your business and integrate with your tools
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-secondary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Smart Responses
              </h4>
              <p className="text-gray-600">
                Your AI agent handles inquiries, processes requests, and escalates when needed
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Continuous Learning
              </h4>
              <p className="text-gray-600">
                The AI improves over time, learning from interactions to serve your customers better
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Which AI Agent Is Right for Your Business?
          </h3>
          <p className="text-gray-600 mb-6">
            Get a personalized recommendation based on your specific needs
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get Your Free AI Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 