'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ParallaxSection from '@/components/ParallaxSection';

export default function CompanyPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=80)',
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
              About QuazarCore
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering the Future of Enterprise Technology
          </motion.p>
        </div>
      </section>

      {/* Why QuazarCore Section */}
      <section id="why-quazarcore" className="py-32 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Why QuazarCore
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We are a global technology consulting firm that enables organizations to modernize through digital transformation.
              With deep expertise in Salesforce and cloud architecture, QuazarCore transforms long-term strategy with outcomes in
              mind around innovation, efficiency, and sustainable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We leverage cutting-edge technologies and best practices to deliver solutions that keep you ahead of the curve.',
              },
              {
                title: 'Client-Centric',
                description: 'Your success is our mission. We partner closely with you to understand your unique challenges and goals.',
              },
              {
                title: 'Proven Expertise',
                description: 'Our team of certified experts brings decades of combined experience in Salesforce and cloud platforms.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax - Colorful Space Nebula */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&q=80"
        height="tall"
        overlay="light"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-white">
          Building Tomorrow's Teams
        </h2>
        <p className="text-xl md:text-2xl text-gray-200">
          Join the QuazarCore mission to transform enterprise technology
        </p>
      </ParallaxSection>

      {/* Careers Section */}
      <section id="careers" className="relative py-32 overflow-hidden bg-black">

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 glow-text text-white">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We're building a team of exceptional professionals who are passionate about transforming the future of enterprise technology.
              Explore opportunities to grow your career at QuazarCore.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 glow-box"
            >
              Discover Opportunities
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: 'Salesforce Architects',
                description: 'Design and implement scalable Salesforce solutions for enterprise clients',
              },
              {
                title: 'Cloud Engineers',
                description: 'Build robust cloud infrastructure and migration strategies',
              },
              {
                title: 'Solution Consultants',
                description: 'Partner with clients to deliver transformative digital solutions',
              },
              {
                title: 'Technical Leaders',
                description: 'Lead teams in delivering innovative technology projects',
              },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-3 text-white">{role.title}</h3>
                <p className="text-gray-400">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-32 bg-gradient-to-b from-black/90 to-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              At QuazarCore, we foster a culture of innovation, collaboration, and continuous learning.
              We believe in empowering our team to push boundaries and deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', icon: '💡' },
              { title: 'Collaboration', icon: '🤝' },
              { title: 'Excellence', icon: '⭐' },
              { title: 'Growth', icon: '🚀' },
              { title: 'Integrity', icon: '🎯' },
              { title: 'Diversity', icon: '🌈' },
              { title: 'Impact', icon: '💫' },
              { title: 'Balance', icon: '⚖️' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="text-5xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 md:p-20 text-center backdrop-blur-sm"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text text-white">
              Ready to Join QuazarCore?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Become part of a team that's shaping the future of enterprise technology
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 glow-box"
            >
              Beam Us Up
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
