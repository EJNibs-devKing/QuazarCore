'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Financial Services',
      description: 'Transform banking and financial operations with secure, compliant cloud solutions that enhance customer experience and operational efficiency.',
      features: [
        'Secure customer data management',
        'Regulatory compliance (SOX, PCI-DSS)',
        'Real-time fraud detection',
        'Digital banking platforms',
        'Wealth management solutions',
      ],
    },
    {
      title: 'Health Cloud',
      description: 'Unite clinical and nonclinical data to create personalized patient experiences and improve care coordination across the healthcare ecosystem.',
      features: [
        'Patient 360-degree view with care timeline',
        'Care plan management and coordination',
        'Provider collaboration tools',
        'Telehealth and virtual care integration',
        'HIPAA-compliant patient engagement',
      ],
    },
    {
      title: 'Government & Public Sector',
      description: 'Modernize citizen services through digital transformation, improving accessibility and efficiency in public services.',
      features: [
        'Citizen engagement platforms',
        'Case management systems',
        'Grant management solutions',
        'FedRAMP compliance',
        'Digital service delivery',
      ],
    },
    {
      title: 'Communications Cloud',
      description: 'Accelerate digital transformation for communications service providers with industry-specific solutions for order management and customer experience.',
      features: [
        'Product catalog and configure-price-quote (CPQ)',
        'Order management and fulfillment',
        'Service activation and provisioning',
        'Customer lifecycle management',
        'Partner ecosystem collaboration',
      ],
    },
    {
      title: 'Automotive Cloud',
      description: 'Transform driver, dealer, and vehicle experiences with a connected automotive platform that unifies data across the entire customer journey.',
      features: [
        'Connected vehicle data integration',
        'Dealer and franchise management',
        'Service scheduling and maintenance',
        'Fleet and mobility services',
        'Driver personalization and engagement',
      ],
    },
    {
      title: 'Manufacturing Cloud',
      description: 'Enable smart manufacturing with visibility into sales agreements, forecasting, and account-based planning to optimize production.',
      features: [
        'Sales agreement lifecycle management',
        'Demand forecasting and planning',
        'Account-based forecasting',
        'Partner and distributor portals',
        'Service lifecycle management',
      ],
    },
    {
      title: 'Energy and Utilities Cloud',
      description: 'Modernize utility operations with AI-powered solutions for customer service, field operations, and grid management.',
      features: [
        'Customer service and billing',
        'Field service optimization',
        'Asset and grid management',
        'Energy trading and risk management',
        'Renewable energy program management',
      ],
    },
    {
      title: 'Media Cloud',
      description: 'Streamline advertising sales and revenue management for media companies with industry-tailored tools for monetization.',
      features: [
        'Advertising sales management',
        'Media planning and campaign management',
        'Revenue recognition and billing',
        'Audience and content management',
        'Multi-channel distribution',
      ],
    },
    {
      title: 'Insurance',
      description: 'Accelerate digital transformation in insurance with end-to-end policy lifecycle management and claims processing.',
      features: [
        'Policy administration and management',
        'Claims intake and processing',
        'Underwriting and risk assessment',
        'Agent and broker portals',
        'Customer self-service capabilities',
      ],
    },
    {
      title: 'Loyalty Management',
      description: 'Build lasting customer relationships with intelligent loyalty programs that drive engagement and increase customer lifetime value.',
      features: [
        'Multi-tier loyalty program management',
        'Points, benefits, and rewards tracking',
        'Member segmentation and personalization',
        'Partner network management',
        'Analytics and insights dashboards',
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 glow-text"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Industries & Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Industry-specific solutions tailored to your unique challenges
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Deep Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              With expertise across public and private sectors, QuazarCore helps organizations modernize and transform.
              We lead with outcomes, providing configurable, agile solution design and implementation that gives your
              organization a competitive edge.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold mb-4 text-white">{industry.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{industry.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Key Solutions</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section - Crab Nebula */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1920&q=80"
        overlay="light"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 glow-text text-white">
          Your Industry, Our Expertise
        </h2>
        <p className="text-xl md:text-2xl text-gray-200">
          No matter your sector, QuazarCore delivers solutions that drive measurable business outcomes
        </p>
      </ParallaxSection>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Why Industry Expertise Matters
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Successfully delivered solutions across diverse industries with measurable ROI',
                icon: '🏆',
              },
              {
                title: 'Regulatory Compliance',
                description: 'Deep understanding of industry-specific regulations and compliance requirements',
                icon: '🔒',
              },
              {
                title: 'Best Practices',
                description: 'Leverage industry best practices and accelerators to speed time-to-value',
                icon: '⚡',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
