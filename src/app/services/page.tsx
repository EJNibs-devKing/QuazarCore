'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';

export default function ServicesPage() {
  const services = [
    {
      id: 'salesforce',
      title: 'Salesforce Solutions',
      description: 'Comprehensive Salesforce consulting, implementation, and optimization services to transform your customer relationships.',
      details: [
        'Sales Cloud & Service Cloud Implementation',
        'Marketing Cloud & Commerce Cloud',
        'Custom Application Development',
        'Integration & Data Migration',
        'Salesforce Health Checks & Optimization',
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud Architecture',
      description: 'Design, build, and migrate to scalable cloud infrastructure tailored to your business needs.',
      details: [
        'Cloud Strategy & Roadmap Development',
        'AWS, Azure & Google Cloud Solutions',
        'Cloud Migration & Modernization',
        'Infrastructure as Code (IaC)',
        'Cloud Security & Compliance',
      ],
    },
    {
      id: 'digital',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies that modernize your business operations and customer experiences.',
      details: [
        'Digital Strategy Consulting',
        'Process Automation & Optimization',
        'Legacy System Modernization',
        'API Development & Integration',
        'Change Management & Adoption',
      ],
    },
    {
      id: 'ai',
      title: 'AI & Data Analytics',
      description: 'Leverage artificial intelligence and advanced analytics to unlock insights and drive intelligent decision-making.',
      details: [
        'AI Strategy & Implementation',
        'Einstein Analytics & AI',
        'Predictive Analytics & ML Models',
        'Data Warehouse & ETL Solutions',
        'Business Intelligence Dashboards',
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80)',
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
              Our Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive solutions for your digital transformation journey
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-20 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex gap-12 items-center`}
            >
              <motion.div
                className="lg:w-1/2 mb-8 lg:mb-0"
                whileHover={{
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <div className="lg:w-1/2">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: index === 0
                        ? 'url(/images/services/salesforce.jpg)'
                        : index === 1
                        ? 'url(/images/services/cloud.jpg)'
                        : index === 2
                        ? 'url(/images/services/digital.jpg)'
                        : 'url(/images/services/ai.jpg)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-600/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Parallax - Cosmic Excellence */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&q=80"
        height="screen"
        overlay="light"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-white">
          Excellence in Every Solution
        </h2>
        <p className="text-xl md:text-2xl text-gray-200">
          Delivering transformative results through proven methodologies
        </p>
      </ParallaxSection>

      {/* Process Section */}
      <section className="relative py-32 overflow-hidden bg-black">

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 glow-text text-white">
              Our Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', description: 'Understand your business goals and challenges' },
              { step: '02', title: 'Design', description: 'Architect tailored solutions for your needs' },
              { step: '03', title: 'Deliver', description: 'Implement with excellence and precision' },
              { step: '04', title: 'Optimize', description: 'Continuous improvement and support' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold mb-4 glow-text bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
