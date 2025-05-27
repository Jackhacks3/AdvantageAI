import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Small Business Focus',
      description: 'We understand the unique challenges small businesses face and design solutions specifically for your needs.'
    },
    {
      icon: Heart,
      title: 'Genuine Partnership',
      description: 'We\'re not just vendors - we\'re partners invested in your long-term success and growth.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself: 100+ successful implementations with measurable ROI.'
    },
    {
      icon: Users,
      title: 'Human-Centered AI',
      description: 'We believe AI should enhance human capabilities, not replace them. Our solutions empower your team.'
    }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      title: 'CEO & AI Solutions Architect',
      credentials: 'Former Microsoft AI Engineer, 10+ years in business automation',
      focus: 'Specializes in custom AI implementations for small businesses'
    },
    {
      name: 'Sarah Kim',
      title: 'Head of Customer Success',
      credentials: 'MBA, 8 years in small business consulting',
      focus: 'Ensures seamless AI integration and ongoing optimization'
    },
    {
      name: 'Michael Chen',
      title: 'Lead AI Developer',
      credentials: 'PhD Computer Science, Former Google AI researcher',
      focus: 'Develops and fine-tunes AI agents for maximum effectiveness'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Trusted AI Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of AI experts and small business advocates dedicated to making 
            advanced technology accessible and profitable for businesses like yours.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To democratize AI technology for small businesses, providing enterprise-level 
              automation solutions that are affordable, easy to implement, and deliver 
              immediate value. We believe every small business deserves the competitive 
              advantage that AI can provide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">$2M+</div>
              <div className="text-gray-600">In Client Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <value.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Meet Your AI Success Team
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                
                <div className="text-primary-600 font-medium mb-2">
                  {member.title}
                </div>
                
                <p className="text-sm text-gray-600 mb-3">
                  {member.credentials}
                </p>
                
                <p className="text-sm text-gray-700">
                  {member.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Focus */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Committed to Small Business Success
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Unlike large consulting firms that focus on enterprise clients, we specialize 
            exclusively in small business AI solutions. We understand your budget constraints, 
            resource limitations, and the need for immediate ROI.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Why We Started Advantage AI
              </h4>
              <p className="text-gray-700">
                After seeing too many small businesses struggle with manual processes while 
                large corporations automated everything, we decided to level the playing field.
              </p>
            </div>
            
            <div className="bg-secondary-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Our Commitment to You
              </h4>
              <p className="text-gray-700">
                We're not satisfied until your AI solution is delivering measurable results. 
                Your success is our success, and we're with you for the long haul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 