'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import ParallaxSection from '@/components/ParallaxSection';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity, scale }}
          className="text-center z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 px-4"
          >
            <motion.img
              src="https://ugc.same-assets.com/9PU8kcANlYyLKuiV6_RbcuNELHNFEdFN.png"
              alt="QuazarCore Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex-shrink-0"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold glow-text text-center sm:text-left">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                QuazarCore
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Born from the Stars. Built for the Cloud.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold btn-glow-hover relative z-10"
            >
              Beam Us Up
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-blue-500 rounded-full text-white font-semibold hover:bg-blue-500/10 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section with Parallax */}
      <section className="relative py-32 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Enterprise Cloud Transformation
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-cosmic font-bold tracking-wide">QuazarCore</span> accelerates digital transformation for Fortune 500 companies and high-growth enterprises.
              We architect <span className="text-blue-400 font-cosmic font-semibold">Salesforce ecosystems</span> and <span className="text-blue-400 font-cosmic font-semibold">cloud-native solutions</span> that drive measurable ROI—
              <span className="font-cosmic font-bold text-white"> reducing operational costs by 40%</span> while <span className="font-cosmic font-bold text-white">increasing scalability by 10x</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section 0 - Supernova Explosion */}
      <ParallaxSection
        backgroundImage="/images/parallax/supernova1.jpg"
        height="tall"
        overlay="light"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-white">
          Beyond Boundaries
        </h2>
        <p className="text-xl md:text-2xl text-gray-200">
          Where technology meets infinite possibilities
        </p>
      </ParallaxSection>

      {/* Solutions Grid */}
      <section className="relative py-32 bg-black/80">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            Our Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Salesforce Excellence',
                description: 'Sales Cloud, Service Cloud, Marketing Cloud, and custom Lightning integrations for enterprise-scale CRM transformation',
                icon: '⚡',
              },
              {
                title: 'Digital Transformation',
                description: 'Driving end-to-end digital evolution with Salesforce, cloud, and data-first innovation.',
                icon: '🔄',
              },
              {
                title: 'Digital Innovation',
                description: 'AI/ML integration, automation workflows, and API-first architectures that modernize legacy systems',
                icon: '🚀',
              },
              {
                title: 'Industry Specific',
                description: 'Industry-specific innovation — transforming challenges into cloud-powered opportunities',
                icon: '🏭',
              },
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {solution.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{solution.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{solution.description}</p>
                  <div className="mt-6">
                    <Link
                      href="/services"
                      className="text-blue-400 hover:text-cyan-300 transition-colors inline-flex items-center group/link"
                    >
                      Learn More
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section 2 - Supernova Explosion */}
      <ParallaxSection
        backgroundImage="/images/parallax/supernova2.jpg"
        overlay="medium"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 glow-text text-white">
          Innovation at Lightspeed
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Partner with QuazarCore to accelerate your digital transformation journey with cutting-edge Salesforce and cloud solutions
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-lg btn-glow-hover"
        >
          Beam Us Up
        </Link>
      </ParallaxSection>

      {/* Industries Section */}
      <section className="relative py-32 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            Industries We Serve
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Services',
                description: 'SOC 2, PCI-DSS compliant platforms for banks and fintech—processing $50B+ in transactions annually',
              },
              {
                title: 'Healthcare & Life Sciences',
                description: 'HIPAA-certified patient data systems serving 2M+ patients with 99.99% uptime SLAs',
              },
              {
                title: 'Government & Public Sector',
                description: 'FedRAMP-authorized citizen portals reducing processing times by 65% for 10M+ constituents',
              },
              {
                title: 'Technology & SaaS',
                description: 'Multi-tenant architectures supporting 100K+ users with auto-scaling for unicorn startups',
              },
              {
                title: 'Manufacturing & IoT',
                description: 'Connected factory systems with real-time analytics reducing downtime by 45%',
              },
              {
                title: 'Retail & E-commerce',
                description: 'Omnichannel platforms processing 1M+ daily orders with personalized AI recommendations',
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{industry.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section 4 - Supernova */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80"
        height="tall"
        overlay="medium"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-white">
          The Future is Now
        </h2>
        <p className="text-xl md:text-2xl text-gray-200">
          Embrace the power of cloud transformation with QuazarCore
        </p>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-b from-transparent to-black/90">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 md:p-20 text-center backdrop-blur-sm"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text text-white">
              Ready to Scale at Cloud Speed?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join <span className="text-cyan-400 font-cosmic font-bold tracking-wide">200+ enterprise clients</span> who trust QuazarCore for their Salesforce and cloud infrastructure.
              <span className="block mt-2 text-white font-cosmic font-bold">Get a free architecture assessment</span>
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg btn-glow-hover"
            >
              Beam Us Up
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
