'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Link from 'next/link';
import { useState } from 'react';

export default function CloudsToolsPage() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const cloudsAndTools = [
    {
      id: 'sales-cloud',
      title: 'Sales Cloud',
      description: 'The world\'s #1 AI CRM platform that empowers sales teams to sell faster and smarter with AI-powered insights, automation, and collaboration tools.',
      features: [
        'Lead and opportunity management',
        'AI-powered forecasting with Einstein',
        'Mobile CRM for on-the-go selling',
        'Pipeline and territory management',
        'Sales analytics and reporting',
      ],
      businessImpact: {
        description: 'Companies using Sales Cloud report transformative improvements across key sales metrics:',
        metrics: [
          { label: 'Sales Productivity Increase', value: 38, suffix: '%', color: 'from-blue-500 to-cyan-500' },
          { label: 'Faster Deal Cycles', value: 43, suffix: '%', color: 'from-cyan-500 to-blue-400' },
          { label: 'Customer Satisfaction', value: 36, suffix: '%', color: 'from-blue-400 to-cyan-400' },
        ],
      },
      icon: '💼',
    },
    {
      id: 'service-cloud',
      title: 'Service Cloud',
      description: 'Deliver exceptional customer service at scale with AI-powered case management, omnichannel support, and field service capabilities.',
      features: [
        'Omnichannel case management',
        'AI-powered chatbots and virtual agents',
        'Knowledge base and self-service portals',
        'Field service management',
        'Service analytics and workforce optimization',
      ],
      businessImpact: {
        description: 'Organizations achieve significant operational improvements:',
        metrics: [
          { label: 'Reduction in Support Costs', value: 27, suffix: '%', color: 'from-green-500 to-emerald-500' },
          { label: 'Faster Case Resolution', value: 32, suffix: '%', color: 'from-emerald-500 to-green-400' },
          { label: 'First-Contact Resolution', value: 45, suffix: '%', color: 'from-green-400 to-emerald-400' },
        ],
      },
      icon: '🎧',
    },
    {
      id: 'experience-cloud',
      title: 'Experience Cloud',
      description: 'Build branded digital experiences including portals, websites, and mobile apps that connect customers, partners, and employees.',
      features: [
        'Pre-built templates and drag-and-drop builder',
        'Self-service customer portals',
        'Partner relationship management',
        'Employee collaboration spaces',
        'Integration with CRM data',
      ],
      businessImpact: {
        description: 'Businesses see dramatic improvements in engagement:',
        metrics: [
          { label: 'Reduction in Support Tickets', value: 40, suffix: '%', color: 'from-purple-500 to-pink-500' },
          { label: 'Partner Sales Increase', value: 35, suffix: '%', color: 'from-pink-500 to-purple-400' },
          { label: 'Customer Satisfaction Boost', value: 50, suffix: '%', color: 'from-purple-400 to-pink-400' },
        ],
      },
      icon: '🌐',
    },
    {
      id: 'marketing-cloud',
      title: 'Marketing Cloud',
      description: 'Deliver personalized customer journeys across email, mobile, social, advertising, and web with AI-powered marketing automation.',
      features: [
        'Email studio and journey builder',
        'Mobile messaging and push notifications',
        'Social media marketing and listening',
        'Advertising studio for cross-channel campaigns',
        'AI-powered personalization and analytics',
      ],
      businessImpact: {
        description: 'Marketers see exceptional campaign performance:',
        metrics: [
          { label: 'Email Engagement Increase', value: 28, suffix: '%', color: 'from-orange-500 to-amber-500' },
          { label: 'ROI on Marketing Spend', value: 3, suffix: 'x', color: 'from-amber-500 to-orange-400' },
          { label: 'Customer Retention Improvement', value: 42, suffix: '%', color: 'from-orange-400 to-amber-400' },
        ],
      },
      icon: '📧',
    },
    {
      id: 'commerce-cloud',
      title: 'Commerce Cloud',
      description: 'Deliver unified, intelligent commerce experiences across all channels with AI-powered personalization, flexible order management, and seamless customer journeys.',
      features: [
        'B2C and B2B commerce storefronts',
        'AI-powered product recommendations',
        'Order management and fulfillment',
        'Mobile-first shopping experiences',
        'Headless commerce APIs',
      ],
      businessImpact: {
        description: 'E-commerce leaders achieve exceptional growth:',
        metrics: [
          { label: 'Increase in Conversion Rate', value: 30, suffix: '%', color: 'from-violet-500 to-purple-500' },
          { label: 'Higher Average Order Value', value: 25, suffix: '%', color: 'from-purple-500 to-violet-400' },
          { label: 'Mobile Revenue Growth', value: 45, suffix: '%', color: 'from-violet-400 to-purple-400' },
        ],
      },
      icon: '🛒',
    },
    {
      id: 'agentforce',
      title: 'Agentforce',
      description: 'AI agents that autonomously handle customer inquiries, qualify leads, and complete complex tasks 24/7 across any channel.',
      features: [
        'Autonomous AI agents for sales and service',
        'Natural language understanding',
        'Multi-channel deployment (web, mobile, messaging)',
        'Integration with CRM data and workflows',
        'Continuous learning and improvement',
      ],
      businessImpact: {
        description: 'Companies achieve unprecedented automation levels:',
        metrics: [
          { label: 'Automation of Routine Inquiries', value: 80, suffix: '%', color: 'from-indigo-500 to-violet-500' },
          { label: 'Customer Support Availability', value: 24, suffix: '/7', color: 'from-violet-500 to-indigo-400' },
          { label: 'Reduction in Handling Time', value: 60, suffix: '%', color: 'from-indigo-400 to-violet-400' },
        ],
      },
      icon: '🤖',
    },
    {
      id: 'einstein',
      title: 'Einstein',
      description: 'Salesforce AI platform that delivers predictive and generative AI capabilities across every cloud, enabling smarter decisions and automated workflows.',
      features: [
        'Predictive analytics and forecasting',
        'Generative AI for content creation',
        'Natural language processing',
        'Computer vision and image recognition',
        'AI-powered automation and recommendations',
      ],
      businessImpact: {
        description: 'Organizations harness AI for competitive advantage:',
        metrics: [
          { label: 'Increase in Lead Conversion', value: 35, suffix: '%', color: 'from-cyan-500 to-blue-500' },
          { label: 'Time Saved with Automation', value: 50, suffix: '%', color: 'from-blue-500 to-cyan-400' },
          { label: 'Prediction Accuracy', value: 92, suffix: '%', color: 'from-cyan-400 to-blue-400' },
        ],
      },
      icon: '🧠',
    },
    {
      id: 'data-cloud',
      title: 'Data Cloud',
      description: 'Unify all your customer data in real-time to create a single source of truth, enabling personalized experiences and AI-powered insights across every touchpoint.',
      features: [
        'Real-time data ingestion and harmonization',
        'Customer 360-degree unified profile',
        'AI-powered analytics and predictions',
        'Zero-copy data sharing and federation',
        'Privacy and consent management',
      ],
      businessImpact: {
        description: 'Organizations unlock the full potential of their data:',
        metrics: [
          { label: 'Improvement in Data Quality', value: 95, suffix: '%', color: 'from-emerald-500 to-teal-500' },
          { label: 'Faster Time to Insights', value: 70, suffix: '%', color: 'from-teal-500 to-emerald-400' },
          { label: 'Increase in Personalization', value: 85, suffix: '%', color: 'from-emerald-400 to-teal-400' },
        ],
      },
      icon: '☁️',
    },
    {
      id: 'omnistudio',
      title: 'OmniStudio',
      description: 'Low-code development platform with declarative tools for building industry-specific applications, guided processes, and dynamic user interfaces.',
      features: [
        'FlexCards for responsive UI components',
        'OmniScripts for guided processes',
        'Integration Procedures for data integration',
        'DataRaptors for data transformation',
        'Industry-specific templates and accelerators',
      ],
      businessImpact: {
        description: 'Development teams accelerate delivery:',
        metrics: [
          { label: 'Faster Application Development', value: 60, suffix: '%', color: 'from-pink-500 to-rose-500' },
          { label: 'Reduction in Code Required', value: 70, suffix: '%', color: 'from-rose-500 to-pink-400' },
          { label: 'Improved Developer Productivity', value: 55, suffix: '%', color: 'from-pink-400 to-rose-400' },
        ],
      },
      icon: '🔧',
    },
    {
      id: 'industries-order-management',
      title: 'Industries Order Management',
      description: 'Industry-specific order capture, orchestration, and fulfillment designed for complex B2B and B2C scenarios across communications, manufacturing, and more.',
      features: [
        'Configure, price, quote (CPQ) integration',
        'Complex order decomposition',
        'Multi-system orchestration',
        'Real-time inventory management',
        'Industry-specific workflows',
      ],
      businessImpact: {
        description: 'Enterprises achieve operational excellence:',
        metrics: [
          { label: 'Faster Order Processing', value: 50, suffix: '%', color: 'from-teal-500 to-cyan-500' },
          { label: 'Reduction in Order Errors', value: 70, suffix: '%', color: 'from-cyan-500 to-teal-400' },
          { label: 'On-Time Delivery Rate', value: 95, suffix: '%', color: 'from-teal-400 to-cyan-400' },
        ],
      },
      icon: '📦',
    },
    {
      id: 'salesforce-cpq',
      title: 'Salesforce CPQ',
      description: 'Configure, Price, Quote solution that helps sales teams generate accurate quotes quickly with guided selling, pricing optimization, and discount management.',
      features: [
        'Product and bundle configuration',
        'Dynamic pricing and discounting',
        'Quote generation and e-signature',
        'Contract and renewal management',
        'Subscription and usage-based pricing',
      ],
      businessImpact: {
        description: 'Sales teams accelerate revenue generation:',
        metrics: [
          { label: 'Faster Deal Closure', value: 28, suffix: '%', color: 'from-rose-500 to-red-500' },
          { label: 'Reduction in Quote Errors', value: 85, suffix: '%', color: 'from-red-500 to-rose-400' },
          { label: 'Increase in Deal Sizes', value: 105, suffix: '%', color: 'from-rose-400 to-red-400' },
        ],
      },
      icon: '💰',
    },
    {
      id: 'epc',
      title: 'Enterprise Product Catalog (EPC)',
      description: 'Centralized product information management system that maintains consistent product data across all channels and systems.',
      features: [
        'Single source of truth for product data',
        'Product lifecycle management',
        'Multi-dimensional product hierarchy',
        'Version control and change management',
        'API-driven product distribution',
      ],
      businessImpact: {
        description: 'Organizations achieve data excellence:',
        metrics: [
          { label: 'Reduction in Data Errors', value: 90, suffix: '%', color: 'from-lime-500 to-green-500' },
          { label: 'Faster Time-to-Market', value: 60, suffix: '%', color: 'from-green-500 to-lime-400' },
          { label: 'Unified Customer Experience', value: 100, suffix: '%', color: 'from-lime-400 to-green-400' },
        ],
      },
      icon: '📚',
    },
    {
      id: 'enterprise-sales-management',
      title: 'Enterprise Sales Management',
      description: 'Advanced sales planning and execution tools for managing complex sales agreements, forecasts, and account-based strategies at enterprise scale.',
      features: [
        'Sales agreement lifecycle management',
        'Territory and quota planning',
        'Account-based forecasting',
        'Incentive compensation management',
        'Sales performance analytics',
      ],
      businessImpact: {
        description: 'Enterprises optimize revenue operations:',
        metrics: [
          { label: 'Forecast Accuracy Improvement', value: 35, suffix: '%', color: 'from-sky-500 to-blue-500' },
          { label: 'Annual Revenue Leakage Saved', value: 2, suffix: 'M+', color: 'from-blue-500 to-sky-400' },
          { label: 'Rep Productivity Increase', value: 40, suffix: '%', color: 'from-sky-400 to-blue-400' },
        ],
      },
      icon: '📊',
    },
    {
      id: 'asset-lifecycle',
      title: 'Asset Service Lifecycle Management',
      description: 'End-to-end asset tracking and service management from installation through maintenance, warranty, and decommissioning.',
      features: [
        'Asset tracking and genealogy',
        'Preventive maintenance scheduling',
        'Warranty and entitlement management',
        'Service history and documentation',
        'IoT sensor integration',
      ],
      businessImpact: {
        description: 'Companies maximize asset value and uptime:',
        metrics: [
          { label: 'Reduction in Asset Downtime', value: 45, suffix: '%', color: 'from-fuchsia-500 to-pink-500' },
          { label: 'Extended Equipment Lifespan', value: 30, suffix: '%', color: 'from-pink-500 to-fuchsia-400' },
          { label: 'Decreased Maintenance Costs', value: 25, suffix: '%', color: 'from-fuchsia-400 to-pink-400' },
        ],
      },
      icon: '⚙️',
    },
    {
      id: 'tableau',
      title: 'Tableau',
      description: 'Leading analytics platform that helps people see and understand data with powerful visualization, interactive dashboards, and AI-driven insights.',
      features: [
        'Drag-and-drop visual analytics',
        'Interactive dashboards and reports',
        'AI-powered insights and predictions',
        'Real-time data connectivity',
        'Embedded analytics capabilities',
      ],
      businessImpact: {
        description: 'Organizations unlock data-driven value:',
        metrics: [
          { label: 'Faster Data-Driven Decisions', value: 5, suffix: 'x', color: 'from-yellow-500 to-amber-500' },
          { label: 'Increase in Data Literacy', value: 60, suffix: '%', color: 'from-amber-500 to-yellow-400' },
          { label: 'Annual Business Value', value: 10, suffix: 'M+', color: 'from-yellow-400 to-amber-400' },
        ],
      },
      icon: '📈',
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
              Clouds & Tools
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Powerful Salesforce platforms and tools that transform how businesses operate and grow
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
              The Salesforce Ecosystem
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              QuazarCore leverages the complete Salesforce platform to deliver integrated solutions that drive real business outcomes.
              From sales automation to AI-powered service, our expertise spans the entire ecosystem of clouds and enterprise tools.
            </p>
            <p className="text-cyan-400 font-semibold">Hover over cards to see capabilities</p>
          </motion.div>

          {/* Flippable Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudsAndTools.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="h-[500px] perspective-1000"
                onMouseEnter={() => setFlippedCards(prev => ({ ...prev, [item.id]: true }))}
                onMouseLeave={() => setFlippedCards(prev => ({ ...prev, [item.id]: false }))}
                onClick={() => toggleCard(item.id)}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedCards[item.id] ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                >
                  {/* Front of Card - Business Impact */}
                  <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex flex-col">
                      {/* Icon and Title */}
                      <div className="text-center mb-4">
                        <span className="text-5xl mb-3 block">{item.icon}</span>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                      </div>

                      {/* Business Impact */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
                          <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Business Impact
                        </h4>

                        <div className="space-y-4">
                          {item.businessImpact.metrics.map((metric, metricIndex) => (
                            <motion.div
                              key={metric.label}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-gray-300 text-sm font-medium">{metric.label}</span>
                                <motion.span
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{ duration: 0.5, delay: metricIndex * 0.1 + 0.2 }}
                                  viewport={{ once: true }}
                                  className={`text-xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                                >
                                  {metric.value}{metric.suffix}
                                </motion.span>
                              </div>
                              <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${metric.suffix === '%' ? metric.value : metric.value > 100 ? 100 : metric.value * 10}%` }}
                                  transition={{ duration: 1, delay: metricIndex * 0.1 + 0.3, ease: "easeOut" }}
                                  viewport={{ once: true }}
                                  className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Hint */}
                      <div className="text-center mt-4 text-gray-500 text-xs">
                        Hover to see capabilities →
                      </div>
                    </div>
                  </div>

                  {/* Back of Card - Capabilities */}
                  <div
                    className="absolute inset-0 backface-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full bg-gradient-to-br from-blue-900/90 to-cyan-900/90 backdrop-blur-sm border border-cyan-500/40 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col">
                      {/* Icon and Title */}
                      <div className="text-center mb-4">
                        <span className="text-5xl mb-3 block">{item.icon}</span>
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>

                      {/* Capabilities */}
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-cyan-300 mb-4 text-center">Capabilities</h4>
                        <ul className="space-y-3">
                          {item.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-200 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Back Hint */}
                      <div className="text-center mt-4 text-cyan-300 text-xs">
                        ← Hover away to see impact
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection
        backgroundImage="/images/parallax/eso-nebula.jpg"
        height="tall"
        overlay="light"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 glow-text text-white">
          Unlock Your Business Potential
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Harness the power of the Salesforce ecosystem with QuazarCore's expert implementation and optimization services
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-lg btn-glow-hover"
        >
          Beam Us Up
        </Link>
      </ParallaxSection>

      {/* Integration Section */}
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
              Seamlessly Integrated Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All Salesforce clouds and tools work together on a unified platform, giving you a complete view of your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Unified Data',
                description: 'Single source of truth across all clouds with Customer 360',
                icon: (
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
              },
              {
                title: 'AI-Powered',
                description: 'Einstein AI built into every cloud for intelligent insights',
                icon: (
                  <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: 'Scalable',
                description: 'Grow from startup to enterprise on the same platform',
                icon: (
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
