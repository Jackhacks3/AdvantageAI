import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Owner, Johnson\'s Home Services',
      content: 'Our AI agent handles 80% of customer inquiries automatically. We\'ve saved 25 hours per week and our customers love the instant responses. Revenue is up 35% since implementation.',
      rating: 5,
      results: 'Saved 25 hours/week, Revenue up 35%'
    },
    {
      name: 'Mike Chen',
      title: 'CEO, TechRepair Solutions',
      content: 'The lead qualification AI has been a game-changer. It schedules appointments automatically and follows up with prospects. Our conversion rate increased from 15% to 28%.',
      rating: 5,
      results: 'Conversion rate: 15% → 28%'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Director, Rodriguez Marketing',
      content: 'I was skeptical about AI, but the results speak for themselves. The administrative AI handles all our data entry and scheduling. We\'ve eliminated overtime and reduced errors by 90%.',
      rating: 5,
      results: 'Eliminated overtime, 90% fewer errors'
    },
    {
      name: 'David Thompson',
      title: 'Owner, Thompson Consulting',
      content: 'The customer service AI works 24/7 and never gets tired. Our client satisfaction scores improved from 3.2 to 4.8 stars. The ROI was clear within the first month.',
      rating: 5,
      results: 'Satisfaction: 3.2 → 4.8 stars'
    },
    {
      name: 'Jennifer Walsh',
      title: 'Manager, Walsh Real Estate',
      content: 'Our AI agent qualifies leads and schedules viewings automatically. We\'re handling 3x more inquiries with the same team size. Best investment we\'ve made for our business.',
      rating: 5,
      results: 'Handling 3x more inquiries'
    },
    {
      name: 'Robert Kim',
      title: 'Owner, Kim\'s Auto Shop',
      content: 'The AI handles appointment scheduling and sends reminders automatically. No more double bookings or missed appointments. Our efficiency has improved dramatically.',
      rating: 5,
      results: 'Zero double bookings, 40% efficiency gain'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how small businesses like yours are 
            saving time, reducing costs, and growing revenue with our AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 card-hover border border-gray-200 relative"
            >
              <Quote className="h-8 w-8 text-primary-200 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="bg-primary-50 rounded-lg p-3 mb-4">
                <div className="text-sm font-semibold text-primary-600">
                  Key Results: {testimonial.results}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Preview */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Featured Case Study: Johnson's Home Services
            </h3>
            <p className="text-gray-600">
              How a small home services company transformed their operations with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">The Challenge</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700 flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Overwhelmed with customer calls during peak hours
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Missing leads outside business hours
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Staff spending 30+ hours/week on scheduling
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">The Solution</h4>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  24/7 customer service AI agent
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Automated scheduling and follow-up
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Lead qualification and routing
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Results After 3 Months
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time Saved Weekly</span>
                  <span className="text-2xl font-bold text-green-600">25 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Increase</span>
                  <span className="text-2xl font-bold text-green-600">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="text-2xl font-bold text-green-600">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Annual Savings</span>
                  <span className="text-2xl font-bold text-green-600">$62,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-gray-600 mb-6">
            Get your free assessment and see how AI can transform your business
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

export default Testimonials; 