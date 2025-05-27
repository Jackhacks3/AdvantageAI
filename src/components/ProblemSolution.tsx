import React from 'react';
import { Clock, DollarSign, Users, TrendingUp, ArrowRight } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Drowning in Repetitive Tasks',
      description: 'Spending hours on data entry, scheduling, and routine customer inquiries instead of growing your business.',
      impact: 'Lost 15+ hours/week'
    },
    {
      icon: Users,
      title: 'Inconsistent Customer Service',
      description: 'Customers wait for responses, get different answers from different staff, and some inquiries fall through the cracks.',
      impact: 'Customer complaints up 40%'
    },
    {
      icon: DollarSign,
      title: 'Missed Revenue Opportunities',
      description: 'Leads go cold while waiting for follow-up, and you can\'t respond to inquiries outside business hours.',
      impact: 'Lost 30% of potential sales'
    }
  ];

  const solutions = [
    {
      icon: Clock,
      title: 'Automated Task Management',
      description: 'AI handles data entry, scheduling, and routine communications automatically, freeing up your time for strategic work.',
      impact: 'Save 15+ hours/week'
    },
    {
      icon: Users,
      title: '24/7 Consistent Support',
      description: 'AI provides instant, accurate responses to customer inquiries around the clock with consistent quality.',
      impact: 'Customer satisfaction up 60%'
    },
    {
      icon: TrendingUp,
      title: 'Never Miss a Lead',
      description: 'AI qualifies leads instantly, schedules appointments, and follows up automatically to maximize conversions.',
      impact: 'Increase sales by 45%'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stop Losing Time and Money on Manual Tasks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Small businesses waste countless hours on repetitive work. Our AI agents solve these problems 
            so you can focus on what matters most - growing your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems Column */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-2">Before AI</h3>
              <p className="text-gray-600">Common small business struggles</p>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <problem.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-gray-700 mb-3">
                        {problem.description}
                      </p>
                      <div className="text-sm font-medium text-red-600">
                        {problem.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="text-center">
              <ArrowRight className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-lg font-semibold text-primary-600">
                AI Transformation
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">After AI</h3>
              <p className="text-gray-600">Your business with AI automation</p>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <solution.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-700 mb-3">
                        {solution.description}
                      </p>
                      <div className="text-sm font-medium text-green-600">
                        {solution.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Arrow */}
        <div className="lg:hidden flex justify-center my-8">
          <div className="text-center">
            <ArrowRight className="h-8 w-8 text-primary-600 mx-auto mb-2 rotate-90" />
            <div className="text-sm font-semibold text-primary-600">
              AI Transformation
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6">
            See exactly how AI can solve your specific business challenges
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

export default ProblemSolution; 