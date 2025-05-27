import React from 'react';
import { MessageSquare, Settings, GraduationCap, Headphones } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Free Consultation & Assessment',
      description: 'We analyze your business needs and identify the best AI solutions for your specific challenges.',
      details: [
        'Business process analysis',
        'Pain point identification',
        'Custom solution design',
        'ROI projection'
      ],
      duration: '30-60 minutes'
    },
    {
      icon: Settings,
      title: 'Custom AI Agent Setup',
      description: 'Our team configures and customizes your AI agent to work seamlessly with your existing systems.',
      details: [
        'AI agent configuration',
        'System integration',
        'Custom training data',
        'Testing & optimization'
      ],
      duration: '1-2 weeks'
    },
    {
      icon: GraduationCap,
      title: 'Training & Integration',
      description: 'We train your team and ensure smooth integration with your current workflow and tools.',
      details: [
        'Team training sessions',
        'Workflow integration',
        'Best practices guide',
        'Performance monitoring'
      ],
      duration: '1 week'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support & Optimization',
      description: 'Continuous monitoring, updates, and optimization to ensure your AI agent performs at its best.',
      details: [
        '24/7 technical support',
        'Regular performance reviews',
        'Continuous improvements',
        'Feature updates'
      ],
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple 4-Step Process to AI Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make AI implementation easy and stress-free. From initial consultation 
            to ongoing support, we're with you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg card-hover h-full">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary-600" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-700 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="bg-primary-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold text-primary-600">
                    Timeline: {step.duration}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* What Makes Us Different */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Makes Our Process Different
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                No Technical Jargon
              </h4>
              <p className="text-gray-600">
                We explain everything in plain English and focus on business outcomes, not technical complexity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Tailored Solutions
              </h4>
              <p className="text-gray-600">
                Every AI agent is customized for your specific business needs, not a one-size-fits-all approach.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Ongoing Partnership
              </h4>
              <p className="text-gray-600">
                We don't just set up and leave. We're your long-term AI partner, ensuring continued success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Book your free consultation and see how AI can transform your business
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process; 