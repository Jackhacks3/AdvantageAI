import React from 'react';
import { DollarSign, Clock, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Significant Cost Savings',
      description: 'Reduce operational costs by automating repetitive tasks',
      examples: [
        'Save $50,000+ annually on admin costs',
        'Reduce customer service expenses by 60%',
        'Eliminate overtime for routine tasks'
      ],
      stat: '$50K+',
      statLabel: 'Annual Savings'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Capture more opportunities and serve customers better',
      examples: [
        'Never miss a lead with 24/7 response',
        'Increase conversion rates by 40%',
        'Upsell opportunities identified automatically'
      ],
      stat: '40%',
      statLabel: 'Revenue Increase'
    },
    {
      icon: Clock,
      title: 'Time Freedom',
      description: 'Get your time back to focus on strategic growth',
      examples: [
        'Save 20+ hours per week on admin',
        'Instant customer responses',
        'Automated follow-up sequences'
      ],
      stat: '20+',
      statLabel: 'Hours Saved Weekly'
    },
    {
      icon: Users,
      title: 'Better Customer Experience',
      description: 'Provide consistent, high-quality service around the clock',
      examples: [
        '24/7 customer support availability',
        'Consistent responses every time',
        'Faster resolution times'
      ],
      stat: '98%',
      statLabel: 'Customer Satisfaction'
    },
    {
      icon: Shield,
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge AI technology',
      examples: [
        'Respond faster than competitors',
        'Scale without hiring limitations',
        'Professional image enhancement'
      ],
      stat: '3x',
      statLabel: 'Faster Response'
    },
    {
      icon: Zap,
      title: 'Easy Scalability',
      description: 'Grow your business without proportional cost increases',
      examples: [
        'Handle 10x more inquiries',
        'No additional hiring needed',
        'Instant capacity expansion'
      ],
      stat: '10x',
      statLabel: 'Capacity Increase'
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Benefits That Impact Your Bottom Line
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions deliver measurable results that small business owners can see 
            immediately. Here's what you can expect when you implement AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 card-hover border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>

              <ul className="space-y-2">
                {benefit.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="text-sm text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ROI Calculator Preview */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Calculate Your Potential ROI
            </h3>
            <p className="text-gray-600">
              See how much time and money you could save with AI automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">$75,000</div>
              <div className="text-gray-600 mb-2">Current Annual Cost</div>
              <div className="text-sm text-gray-500">
                Admin tasks, customer service, lead management
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">$25,000</div>
              <div className="text-gray-600 mb-2">With AI Automation</div>
              <div className="text-sm text-gray-500">
                Reduced operational costs, increased efficiency
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">$50,000</div>
              <div className="text-gray-600 mb-2">Annual Savings</div>
              <div className="text-sm text-gray-500">
                Plus increased revenue from better service
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              *Based on average small business with 5-10 employees
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get Your Custom ROI Analysis
            </button>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Join 100+ Businesses Already Saving Time and Money
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Reduction in response time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">$50K+</div>
              <div className="text-gray-600">Average annual savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer support coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 