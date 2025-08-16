import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Building2,
  HeadphonesIcon,
  MessageSquare,
  Star,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    contactType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'sales', label: 'Sales & Partnerships', icon: Building2 },
    { value: 'support', label: 'Technical Support', icon: HeadphonesIcon },
    { value: 'enterprise', label: 'Enterprise Solutions', icon: Users }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@copym.ai', 'support@copym.ai'],
      description: 'Get in touch via email for any inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Speak directly with our team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'San Francisco, CA 94105'],
      description: 'Drop by our office for a meeting'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM-6PM PST', 'Sat: 10AM-4PM PST'],
      description: 'We\'re here when you need us'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Communication',
      description: 'All communications are encrypted and secure'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'We typically respond within 24 hours'
    },
    {
      icon: Star,
      title: 'Expert Support',
      description: 'Get help from our experienced team'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        contactType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickContact = (type) => {
    const emails = {
      sales: 'sales@copym.ai',
      support: 'support@copym.ai',
      general: 'hello@copym.ai'
    };
    
    const subjects = {
      sales: 'Sales Inquiry',
      support: 'Support Request',
      general: 'General Inquiry'
    };

    window.location.href = `mailto:${emails[type]}?subject=${subjects[type]}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path
            d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
          <path
            d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-black"
          />
        </svg>
      </div>

      {/* Gradient Shapes */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-[60px] opacity-20"></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-tr from-green-400 to-blue-400 rounded-full blur-[50px] opacity-20"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h1 className="brand-title text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 text-[#255f99]">
            Get in{' '}
            <span className="relative text-[#15a36e]">
              Touch
            </span>
          </h1>
          <p className="brand-description text-base sm:text-xl max-w-3xl mx-auto">
            We're here to help! Whether you have questions about our platform, need technical support, 
            or want to explore partnership opportunities, our team is ready to assist you.
          </p>
        </motion.div>

        {/* Quick Contact Cards */}
        <motion.div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12" variants={itemVariants}>
          {contactTypes.map((type) => (
            <motion.div
              key={type.value}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#15a36e] hover:transform hover:-translate-y-1"
              onClick={() => handleQuickContact(type.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#255f99] mb-2">{type.label}</h3>
                <p className="text-sm text-gray-600">Quick contact via email</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#255f99] mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-red-800">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#15a36e] focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#15a36e] focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15a36e] focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Type
                    </label>
                    <select
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15a36e] focus:border-transparent transition-all duration-200"
                    >
                      {contactTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#15a36e] focus:border-transparent transition-all duration-200 ${
                      errors.subject ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#15a36e] focus:border-transparent transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#255f99] to-[#15a36e] text-white font-semibold py-4 px-6 rounded-lg hover:from-[#1e4c80] hover:to-[#0f8a5a] transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#255f99] mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                      ))}
                      <p className="text-gray-500 text-xs mt-2">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-4">Why Choose Us</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-white/80" />
                    <div>
                      <p className="font-medium text-sm">{feature.title}</p>
                      <p className="text-white/70 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#255f99] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days."
              },
              {
                question: "Do you offer enterprise solutions?",
                answer: "Yes, we provide customized enterprise solutions. Contact our sales team for details."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer comprehensive technical support, documentation, and training resources."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! Contact us to schedule a personalized demo of our platform."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-[#255f99] mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
