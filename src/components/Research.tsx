import { ChevronRightIcon, DocumentTextIcon, ArrowTrendingUpIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Research = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <DocumentTextIcon className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Driven Transformation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Optimizing Processes and Enhancing Effectiveness for Small Businesses
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed">
                A comprehensive analysis of how artificial intelligence is revolutionizing small and medium-sized businesses, 
                with a focus on AI agents as the key to sustainable competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Executive Summary", section: "executive" },
              { title: "Introduction: AI's Ascendance", section: "introduction" },
              { title: "Market Adoption & Investment Trends", section: "market" },
              { title: "Process Optimization with AI", section: "optimization" },
              { title: "Strategic Advantage of AI Agents", section: "agents" },
              { title: "Real-World Impact & Success Stories", section: "impact" },
              { title: "Navigating AI Adoption", section: "adoption" },
              { title: "Conclusion", section: "conclusion" }
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.section}`}
                className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <ChevronRightIcon className="h-5 w-5 text-blue-600 mr-3 group-hover:translate-x-1 transition-transform" />
                <span className="text-gray-700 group-hover:text-blue-600">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Executive Summary */}
        <section id="executive" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <ArrowTrendingUpIcon className="h-8 w-8 text-blue-600 mr-3" />
              Executive Summary
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Artificial intelligence (AI) has transitioned from a futuristic concept to a present-day operational reality, 
                offering substantial and tangible benefits for small and medium-sized businesses (SMBs). The integration of AI 
                into business processes is demonstrably driving significant optimization, enhancing overall effectiveness, and 
                leading to critical outcomes such as cost savings, improved customer satisfaction, and a strengthened competitive posture.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Findings</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• AI agents represent a pivotal technological leap for SMBs</li>
                  <li>• 40% of small businesses now use generative AI (2024)</li>
                  <li>• 73% annualized growth rate in AI adoption among SMBs</li>
                  <li>• AI is a fundamental catalyst for efficiency and competitiveness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction: AI's Ascendance in the Small Business Landscape
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Current AI Revolution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The contemporary business world is undergoing a profound transformation, largely propelled by the rapid 
                  advancements and increasing integration of Artificial Intelligence. This AI revolution is no longer confined 
                  to the domain of large enterprises with extensive resources; it has become increasingly accessible and 
                  critically impactful for small and medium-sized businesses (SMBs).
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Defining AI Agents: Beyond Basic Automation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  An AI agent is a software system that utilizes artificial intelligence to actively pursue predefined goals 
                  and complete tasks on behalf of users. What distinguishes AI agents is their capacity for reasoning, planning, 
                  and memory, coupled with a significant degree of autonomy that allows them to make decisions, learn from 
                  experience, and adapt their strategies over time.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <CogIcon className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Reasoning</h4>
                    <p className="text-sm text-gray-600">Advanced problem-solving capabilities</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Planning</h4>
                    <p className="text-sm text-gray-600">Strategic task management</p>
                  </div>
                                     <div className="text-center p-4 bg-white rounded-lg">
                     <ArrowTrendingUpIcon className="h-12 w-12 text-green-600 mx-auto mb-2" />
                     <h4 className="font-semibold text-gray-800">Learning</h4>
                     <p className="text-sm text-gray-600">Continuous improvement from experience</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Adoption */}
        <section id="market" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Market Adoption and Investment Trends
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Current Adoption Rates</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-blue-900">2024 Adoption</span>
                      <span className="text-2xl font-bold text-blue-600">40%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <p className="text-sm text-blue-700 mt-2">Small businesses using generative AI</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-green-900">Growth Rate</span>
                      <span className="text-2xl font-bold text-green-600">73%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{width: '73%'}}></div>
                    </div>
                    <p className="text-sm text-green-700 mt-2">Annualized growth in AI adoption</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Investment Patterns</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">$29B</span>
                    <span className="text-gray-700">Global AI investment in 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">75%</span>
                    <span className="text-gray-700">SMBs actively investing in AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">92%</span>
                    <span className="text-gray-700">Companies planning to increase AI investment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">Key Adoption Drivers</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-yellow-700">
                  <li>• Cost reduction and process automation (42%)</li>
                  <li>• Technology accessibility improvements (43%)</li>
                </ul>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Integration into standard applications (37%)</li>
                  <li>• Competitive pressure (31%)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Optimization */}
        <section id="optimization" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Unlocking Process Optimization with AI
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Customer Engagement</h3>
                <ul className="space-y-3 text-blue-800">
                  <li>• 24/7 AI chatbot support</li>
                  <li>• Reduced response times</li>
                  <li>• Personalized recommendations</li>
                  <li>• Predictive customer analytics</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <p className="text-sm text-blue-700">
                    <strong>Impact:</strong> 40% reduction in service calls, 25% increase in satisfaction
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Marketing & Sales</h3>
                <ul className="space-y-3 text-green-800">
                  <li>• Precision targeting</li>
                  <li>• Automated content creation</li>
                  <li>• Personalization at scale</li>
                  <li>• Intelligent lead scoring</li>
                </ul>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <p className="text-sm text-green-700">
                    <strong>Impact:</strong> 30% increase in sales, 25% more repeat customers
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Operations</h3>
                <ul className="space-y-3 text-purple-800">
                  <li>• Administrative automation</li>
                  <li>• Inventory optimization</li>
                  <li>• Financial management</li>
                  <li>• Predictive analytics</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <p className="text-sm text-purple-700">
                    <strong>Impact:</strong> 50% time savings, 30% inventory reduction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Advantage */}
        <section id="agents" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Strategic Advantage of AI Agents
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Bot</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AI Assistant</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AI Agent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Purpose</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Simple task automation</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Assist users with tasks</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm bg-blue-50">
                      <strong>Autonomous goal achievement</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Autonomy</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Rule-based</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Requires user direction</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm bg-blue-50">
                      <strong>Highest independence</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Learning</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Limited/none</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Some capabilities</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm bg-blue-50">
                      <strong>Continuous improvement</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Complexity</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Simple interactions</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Moderate tasks</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm bg-blue-50">
                      <strong>Complex workflows</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Practical Use Cases</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Customer Service:</strong> End-to-end journey management</li>
                  <li>• <strong>Sales & Marketing:</strong> Autonomous campaign optimization</li>
                  <li>• <strong>Operations:</strong> Supply chain monitoring and adjustment</li>
                  <li>• <strong>Administration:</strong> Executive assistant capabilities</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Competitive Advantages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Autonomy:</strong> Minimal human oversight required</li>
                  <li>• <strong>Adaptability:</strong> Dynamic response to changes</li>
                  <li>• <strong>Scalability:</strong> Handle increasing complexity</li>
                  <li>• <strong>Learning:</strong> Continuous performance improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Impact */}
        <section id="impact" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Real-World Impact: Success Stories
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Case Study Highlights</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800">Fashion SME</h4>
                    <p className="text-gray-600">AI chatbot implementation</p>
                    <p className="text-sm text-blue-600">40% reduction in service calls, 25% increase in satisfaction</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800">Logistics Company</h4>
                    <p className="text-gray-600">AI inventory management</p>
                    <p className="text-sm text-green-600">30% reduction in excess inventory, 20% lower storage costs</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800">Restaurant</h4>
                    <p className="text-gray-600">Predictive marketing</p>
                    <p className="text-sm text-purple-600">25% increase in repeat customer visits</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800">CPA Practice</h4>
                    <p className="text-gray-600">AI email automation</p>
                    <p className="text-sm text-orange-600">9 hours saved per week, 70% faster responses</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quantifiable Benefits</h3>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">67%</div>
                      <div className="text-sm text-gray-600">Increase in sales with chatbots</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">66%</div>
                      <div className="text-sm text-gray-600">Average productivity increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">44%</div>
                      <div className="text-sm text-gray-600">Report cost savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">92%</div>
                      <div className="text-sm text-gray-600">Experience significant benefits</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> These figures represent reported outcomes from specific case studies. 
                    Results may vary based on implementation and business context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adoption Guide */}
        <section id="adoption" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Navigating AI Adoption: Practical Steps
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">1. Identify High-Impact Areas</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Assess current processes</li>
                  <li>• Find repetitive tasks</li>
                  <li>• Identify bottlenecks</li>
                  <li>• Measure potential ROI</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">2. Start Small & Scale</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Use existing AI features</li>
                  <li>• Try free/low-cost tools</li>
                  <li>• Leverage cloud solutions</li>
                  <li>• Track performance metrics</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">3. Address Challenges</h3>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li>• Ensure data security</li>
                  <li>• Consider ethical implications</li>
                  <li>• Bridge skill gaps</li>
                  <li>• Maintain human oversight</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Considerations</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Security & Ethics</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Data privacy compliance</li>
                    <li>• Ethical AI deployment</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Human Element</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI augments, doesn't replace</li>
                    <li>• Maintain creative oversight</li>
                    <li>• Focus on strategic planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">
              Conclusion: Embracing AI Agents for a Competitive Future
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-blue-100">
                The evidence presented throughout this analysis converges on a clear conclusion: Artificial Intelligence 
                is a transformative force with the power to fundamentally reshape how small and medium-sized businesses 
                operate, compete, and grow.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• AI agents provide sustainable competitive advantages through autonomy and learning</li>
                  <li>• Strategic implementation matters more than simple adoption</li>
                  <li>• The time to act is now - tools are accessible and rewards are significant</li>
                  <li>• Success requires a long-term perspective and continuous improvement mindset</li>
                </ul>
              </div>
              
              <div className="text-center pt-6">
                <p className="text-xl font-semibold text-blue-200 mb-4">
                  Ready to transform your business with AI?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research; 