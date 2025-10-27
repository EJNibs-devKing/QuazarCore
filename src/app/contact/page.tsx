'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    try {
      // Submit to Netlify
      const formDataObj = new FormData(form);
      const formDataEntries: Record<string, string> = {};
      formDataObj.forEach((value, key) => {
        formDataEntries[key] = value.toString();
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataEntries).toString(),
      });

      if (response.ok) {
        console.log('Form submitted successfully to Netlify!');
        setSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
      } else {
        console.error('Form submission failed');
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
      borderColor: 'rgba(59, 130, 246, 1)',
      transition: { duration: 0.3 }
    },
    unfocused: {
      scale: 1,
      boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.3 }
    }
  };

  const labelVariants = {
    focused: {
      y: -24,
      scale: 0.85,
      color: '#60A5FA',
      transition: { duration: 0.3 }
    },
    unfocused: (hasValue: boolean) => ({
      y: hasValue ? -24 : 0,
      scale: hasValue ? 0.85 : 1,
      color: hasValue ? '#60A5FA' : '#9CA3AF',
      transition: { duration: 0.3 }
    })
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&q=80)',
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
              Beam Us Up
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Let's start your digital transformation journey together
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Connect with QuazarCore
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Give us a few details, and we'll get back to you soon! Our team of experts is ready to help you transform your business.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    title: 'Email',
                    value: 'contact@quazarcore.com'
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
                    title: 'Global Presence',
                    value: 'Serving clients worldwide'
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    title: 'Response Time',
                    value: 'Within 24 hours'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 cursor-pointer"
                  >
                    <motion.div
                      className="bg-blue-500/20 p-4 rounded-lg"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(59, 130, 246, 0.3)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form with Animations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-cyan-600/90 backdrop-blur-sm z-50 flex items-center justify-center rounded-2xl"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-blue-100">We'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify Forms hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                {/* Name Field */}
                <div className="relative">
                  <motion.label
                    htmlFor="name"
                    custom={!!formData.name}
                    variants={labelVariants}
                    animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                    className="absolute left-4 top-3 text-gray-400 font-semibold pointer-events-none origin-left"
                  >
                    Full Name *
                  </motion.label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                    className="w-full bg-gray-900/50 border border-blue-500/30 rounded-lg px-4 py-3 pt-6 text-white focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.label
                    htmlFor="email"
                    custom={!!formData.email}
                    variants={labelVariants}
                    animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                    className="absolute left-4 top-3 text-gray-400 font-semibold pointer-events-none origin-left"
                  >
                    Email Address *
                  </motion.label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                    className="w-full bg-gray-900/50 border border-blue-500/30 rounded-lg px-4 py-3 pt-6 text-white focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company Field */}
                <div className="relative">
                  <motion.label
                    htmlFor="company"
                    custom={!!formData.company}
                    variants={labelVariants}
                    animate={focusedField === 'company' ? 'focused' : 'unfocused'}
                    className="absolute left-4 top-3 text-gray-400 font-semibold pointer-events-none origin-left"
                  >
                    Company
                  </motion.label>
                  <motion.input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'company' ? 'focused' : 'unfocused'}
                    className="w-full bg-gray-900/50 border border-blue-500/30 rounded-lg px-4 py-3 pt-6 text-white focus:outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.label
                    htmlFor="message"
                    custom={!!formData.message}
                    variants={labelVariants}
                    animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                    className="absolute left-4 top-3 text-gray-400 font-semibold pointer-events-none origin-left"
                  >
                    Message *
                  </motion.label>
                  <motion.textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                    className="w-full bg-gray-900/50 border border-blue-500/30 rounded-lg px-4 py-3 pt-6 text-white focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    initial={false}
                    whileHover={{
                      scale: [1, 1.5],
                      opacity: [0, 0.2, 0],
                      transition: { duration: 0.6 }
                    }}
                  />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/images/parallax/earth-sunrise.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-black/90" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 glow-text text-white">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Whether you're looking to implement Salesforce, migrate to the cloud, or transform your entire digital infrastructure,
              QuazarCore is here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
