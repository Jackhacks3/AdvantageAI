import { ArrowTrendingUpIcon, ChartBarIcon, CurrencyDollarIcon, BuildingOfficeIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const AIBusinessImpact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ChartBarIcon className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Impact of AI on Business Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A Comprehensive Analysis of AI's Transformative Power
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed">
                Discover how AI integration is delivering unprecedented business value across industries, 
                with companies reporting 29% higher revenue growth and $3.70 ROI for every dollar invested.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <ArrowTrendingUpIcon className="h-8 w-8 text-blue-600 mr-3" />
              Executive Summary
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Artificial Intelligence has emerged as the defining technology of our era, delivering unprecedented 
              business value across industries. This comprehensive analysis reveals that AI integration is not just 
              transforming operations—it's becoming essential for competitive survival.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Findings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">29%</span>
                    <span className="text-gray-700">Higher revenue growth for AI-adopting companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">$3.70</span>
                    <span className="text-gray-700">Average ROI for every dollar invested in AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">78%</span>
                    <span className="text-gray-700">Organizations now use AI in at least one function</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">2.5x</span>
                    <span className="text-gray-700">Higher revenue growth for AI-driven companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">$826.7B</span>
                    <span className="text-gray-700">Projected global AI market by 2030</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3 mt-1">27.67%</span>
                    <span className="text-gray-700">Compound annual growth rate (CAGR)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Market Growth */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Growth and Investment Trends</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global AI Market Expansion</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Year</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Market Size</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Growth Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">2024</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">$243.70B</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600">33% YoY</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">2025</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">$300B+</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600">27.67% CAGR</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">2030</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">$826.70B</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600">27.67% CAGR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Investment Highlights</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-blue-900">Global AI Spending 2024</span>
                      <span className="text-2xl font-bold text-blue-600">$500B</span>
                    </div>
                    <p className="text-sm text-blue-700">19% increase from 2023</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-green-900">Generative AI Investment</span>
                      <span className="text-2xl font-bold text-green-600">$30B</span>
                    </div>
                    <p className="text-sm text-green-700">Invested in generative AI companies in 2024</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-purple-900">U.S. Private Investment</span>
                      <span className="text-2xl font-bold text-purple-600">$109.1B</span>
                    </div>
                    <p className="text-sm text-purple-700">12x China's $9.3 billion investment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">Enterprise Adoption Rates</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-yellow-700 mb-2">Large Enterprises (1000+ employees)</h5>
                  <p className="text-sm text-yellow-600">42% active deployment, 40% exploring</p>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-700 mb-2">Fortune 500 Companies</h5>
                  <p className="text-sm text-yellow-600">80% have integrated ChatGPT by August 2023</p>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-700 mb-2">Small & Medium Businesses</h5>
                  <p className="text-sm text-yellow-600">51% already using AI, 27% plan adoption</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Performance Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <CurrencyDollarIcon className="h-8 w-8 text-green-600 mr-3" />
              Business Performance Impact
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue Growth</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">29%</div>
                    <div className="text-sm text-gray-600">Higher sales growth for AI adopters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">2.5x</div>
                    <div className="text-sm text-gray-600">Revenue growth for AI-driven companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">6-10%</div>
                    <div className="text-sm text-gray-600">Average revenue increase</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Productivity Gains</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Overall Productivity</span>
                    <span className="font-semibold text-purple-600">20-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Customer Service</span>
                    <span className="font-semibold text-blue-600">14%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Sales Productivity</span>
                    <span className="font-semibold text-green-600">3-5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Code Development</span>
                    <span className="font-semibold text-orange-600">126%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Document Creation</span>
                    <span className="font-semibold text-red-600">59%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Return on Investment</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">$3.70</div>
                    <div className="text-sm text-gray-600">Average ROI per dollar invested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">$10.30</div>
                    <div className="text-sm text-gray-600">Top performers ROI</div>
                  </div>
                                     <div className="text-center">
                     <div className="text-3xl font-bold text-yellow-600">330%</div>
                     <div className="text-sm text-gray-600">ROI with &lt;6 months payback</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <BuildingOfficeIcon className="h-8 w-8 text-indigo-600 mr-3" />
              Industry-Specific Impact
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Financial Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enhanced fraud detection accuracy</li>
                    <li>• Improved risk assessment capabilities</li>
                    <li>• 25% reduction in customer service escalations</li>
                    <li>• Potential $340B growth in U.S. banking sector</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Manufacturing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 40-50% reduction in equipment downtime</li>
                    <li>• 20% increase in production efficiency</li>
                    <li>• Enhanced quality control precision</li>
                    <li>• $1.2M annual cost savings per implementation</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Healthcare</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 223 AI-enabled medical devices approved in 2023</li>
                    <li>• Significant diagnostic accuracy improvements</li>
                    <li>• AI-driven personalized medicine advancing</li>
                    <li>• Market growth: $20.9B to $48.4B by 2029</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">Retail & E-commerce</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Amazon's AI drives 35% of revenue</li>
                    <li>• Optimized inventory management</li>
                    <li>• Enhanced customer satisfaction</li>
                    <li>• Market growth: $5.81B to $22.60B by 2032</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Productivity & Efficiency */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <ClockIcon className="h-8 w-8 text-blue-600 mr-3" />
              Productivity and Operational Efficiency
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Documented Time Savings</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Lumen Technologies</h4>
                    <p className="text-blue-700">Sales prep time: 4 hours → 15 minutes</p>
                    <p className="text-sm text-blue-600">$50M annual savings</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">Aberdeen City Council</h4>
                    <p className="text-green-700">Projected $3M annual savings</p>
                    <p className="text-sm text-green-600">From Copilot implementation</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900">Various Companies</h4>
                    <p className="text-purple-700">20 hours/month saved</p>
                    <p className="text-sm text-purple-600">On routine tasks</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Process Optimization Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Customer Service</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">60% faster response</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Data Analysis</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Real-time insights</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Supply Chain</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">25% cost reduction</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Quality Control</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Automated inspection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workforce Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <UserGroupIcon className="h-8 w-8 text-green-600 mr-3" />
              Workforce and Skills Impact
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Market Transformation (by 2025)</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-red-900">Jobs Displaced</span>
                      <span className="text-2xl font-bold text-red-600">85M</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-green-900">Jobs Created</span>
                      <span className="text-2xl font-bold text-green-600">97M</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-blue-900">Net Gain</span>
                      <span className="text-2xl font-bold text-blue-600">12M</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-purple-900">AI Specialist Roles</span>
                      <span className="text-2xl font-bold text-purple-600">40%</span>
                    </div>
                    <p className="text-sm text-purple-600 mt-1">Growth projected</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills and Training Investment</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">CEO Priorities</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• 81% believe AI skills are crucial for future success</li>
                      <li>• 78% plan to prioritize workforce development</li>
                      <li>• Focus on AI and automation training</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
                    <h4 className="font-semibold text-indigo-800 mb-2">Emerging Roles</h4>
                    <ul className="space-y-2 text-indigo-700">
                      <li>• AI compliance specialists</li>
                      <li>• AI ethics specialists</li>
                      <li>• AI integration managers</li>
                      <li>• Machine learning engineers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Success Factors */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Success Factors</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Best Practices for AI Adoption</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Strategic Integration</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• 49% have AI "fully integrated" into core strategy</li>
                      <li>• Clear roadmaps for phased rollouts</li>
                      <li>• Dedicated transformation teams</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-900 mb-2">Data Readiness</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Only 39% believe their data is AI-ready</li>
                      <li>• Investment in data quality and infrastructure</li>
                      <li>• Integration across business functions</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Risk Management</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Systematic approach to AI governance</li>
                      <li>• Regular performance monitoring</li>
                      <li>• Compliance and ethical considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Common Implementation Challenges</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Skills Gap</h4>
                    <p className="text-red-700 text-sm">30% of companies lack specialized AI talent</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Data Complexity</h4>
                    <p className="text-orange-700 text-sm">Poor data quality and integration challenges</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Change Management</h4>
                    <p className="text-yellow-700 text-sm">27% face organizational resistance</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Cost Considerations</h4>
                    <p className="text-blue-700 text-sm">Initial investment requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Projections */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Projections and Recommendations</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">2025-2030 Outlook</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Global Productivity Gains</h4>
                    <p className="text-2xl font-bold text-blue-600">$4.4 Trillion</p>
                    <p className="text-sm text-gray-600">Potential economic impact</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Manufacturing Sector</h4>
                    <p className="text-2xl font-bold text-green-600">$3.8 Trillion</p>
                    <p className="text-sm text-gray-600">Gains by 2035</p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li>• Continued acceleration in adoption rates</li>
                    <li>• Emergence of agentic AI as next frontier</li>
                    <li>• Industry-specific AI solutions proliferation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Strategic Recommendations</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Immediate Actions</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Assess current AI readiness and data quality</li>
                      <li>• Identify high-impact use cases for pilots</li>
                      <li>• Invest in workforce training and development</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Medium-term Strategy</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Develop comprehensive AI governance framework</li>
                      <li>• Scale successful pilots across organization</li>
                      <li>• Build strategic partnerships with AI vendors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Long-term Vision</h4>
                    <ul className="space-y-1 text-purple-700 text-sm">
                      <li>• Transform business models with AI integration</li>
                      <li>• Create AI-native competitive advantages</li>
                      <li>• Establish industry leadership in AI applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-blue-100">
                The evidence is overwhelming: AI integration is not optional for businesses seeking to remain competitive. 
                Organizations that embrace AI strategically are already seeing substantial returns in revenue growth, 
                operational efficiency, and market positioning.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Bottom Line</h3>
                <p className="text-blue-100 leading-relaxed">
                  Companies implementing AI report 29% higher revenue growth, $3.70 ROI per dollar invested, 
                  and significant productivity gains across all business functions. The question is no longer 
                  whether to adopt AI, but how quickly and effectively organizations can integrate these 
                  transformative technologies into their core operations.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Call to Action</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Organizations must move beyond experimentation to strategic, scaled AI implementation. 
                  Those who act decisively today will define tomorrow's market leaders, while those who 
                  delay risk being permanently left behind in the AI-driven economy.
                </p>
                
                <div className="text-center pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Start Your AI Transformation Today
                    <ArrowTrendingUpIcon className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Attribution */}
        <section className="mb-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-sm text-gray-600 italic text-center">
              This analysis is based on comprehensive research from leading institutions including McKinsey, IBM, PwC, 
              Stanford HAI, and numerous industry studies conducted in 2024-2025.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIBusinessImpact; 