'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';

export default function ThoughtLeadershipPage() {
  const articles = [
    {
      title: 'The Future of Salesforce in the AI Era',
      excerpt: 'Exploring how AI and Einstein are transforming the Salesforce ecosystem and what it means for enterprise organizations.',
      category: 'Salesforce',
      date: 'Oct 10, 2025',
    },
    {
      title: 'Cloud Migration Best Practices for 2025',
      excerpt: 'A comprehensive guide to planning and executing successful cloud migrations with minimal disruption.',
      category: 'Cloud Architecture',
      date: 'Oct 5, 2025',
    },
    {
      title: 'Digital Transformation: Beyond the Buzzword',
      excerpt: 'Understanding what true digital transformation means and how to achieve measurable business outcomes.',
      category: 'Digital Transformation',
      date: 'Sep 28, 2025',
    },
    {
      title: 'Salesforce Data Cloud: Unlocking Customer Insights',
      excerpt: 'How Data Cloud is revolutionizing customer data platforms and enabling real-time personalization.',
      category: 'Salesforce',
      date: 'Sep 20, 2025',
    },
    {
      title: 'Securing Your Cloud Infrastructure',
      excerpt: 'Essential security practices and frameworks for protecting cloud-based enterprise systems.',
      category: 'Cybersecurity',
      date: 'Sep 15, 2025',
    },
    {
      title: 'The Rise of Composable Commerce',
      excerpt: 'How modern commerce platforms are evolving to meet changing customer expectations.',
      category: 'E-commerce',
      date: 'Sep 8, 2025',
    },
  ];

  const insights = [
    {
      stat: '25+',
      label: 'Projects Delivered',
    },
    {
      stat: '100%',
      label: 'Client Satisfaction',
    },
    {
      stat: '10+',
      label: 'Industries Served',
    },
    {
      stat: '10+',
      label: 'Salesforce Certifications',
    },
  ];

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
              Insights
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Insights and innovations shaping the future of enterprise technology
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 glow-text bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {insight.stat}
                </div>
                <div className="text-gray-400 text-lg">{insight.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-32 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="grid lg:grid-cols-2">
              <div
                className="h-80 lg:h-auto bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80)',
                }}
              />
              <div className="p-10">
                <div className="text-blue-400 text-sm font-semibold mb-3">FEATURED ARTICLE</div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Transforming Enterprise Architecture with Salesforce
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Discover how leading enterprises are leveraging Salesforce as their core platform for digital transformation,
                  integrating AI, automation, and analytics to drive unprecedented business value.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">October 15, 2025</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section - Cosmic Insights */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
        height="tall"
        overlay="light"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 glow-text text-white">
          Driving Innovation Forward
        </h2>
        <p className="text-xl md:text-2xl text-gray-200">
          Exploring the technologies and strategies that shape tomorrow's enterprises
        </p>
      </ParallaxSection>

      {/* Articles Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with our latest articles on Salesforce, cloud architecture, and digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center">
                  <div className="text-6xl">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-xs font-semibold uppercase">{article.category}</span>
                    <span className="text-gray-500 text-xs">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center text-sm font-semibold">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-black/90" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-6 glow-text text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Subscribe to our newsletter for the latest insights on Salesforce, cloud architecture, and digital transformation
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/50 border border-blue-500/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 glow-box"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
