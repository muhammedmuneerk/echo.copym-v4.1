import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '../../../components/gsap/GSAPAnimations.jsx';
import {
  SmartToy,
  Psychology,
  Security,
  Speed,
  Analytics,
  AutoAwesome,
  Memory,
  Language,
  Code,
  Cloud,
  Shield,
  Bolt,
  TrendingUp,
  CheckCircle,
  PlayArrow
} from '@mui/icons-material';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const features = [
    {
      icon: <SmartToy className="w-8 h-8" />,
      title: 'Intelligent Automation',
      description: 'AI agents that learn from your workflows and automate complex tasks with human-like understanding.',
      benefits: ['Reduces manual work by 80%', 'Learns and improves over time', 'Handles complex decision-making'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Psychology className="w-8 h-8" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and nuance in human communication.',
      benefits: ['Multi-language support', 'Context-aware responses', 'Sentiment analysis'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Psychology className="w-8 h-8" />,
      title: 'Cognitive Computing',
      description: 'AI agents that think, reason, and solve problems like humans using advanced cognitive architectures.',
      benefits: ['Logical reasoning', 'Pattern recognition', 'Creative problem-solving'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Security className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with AI-powered threat detection and compliance management.',
      benefits: ['SOC 2 Type II certified', 'End-to-end encryption', 'AI threat detection'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Speed className="w-8 h-8" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing that delivers instant responses and real-time insights.',
      benefits: ['Sub-second response times', 'Real-time analytics', 'Scalable infrastructure'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Analytics className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive models that forecast trends and optimize decision-making.',
      benefits: ['95% prediction accuracy', 'Real-time forecasting', 'Actionable insights'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="features-section" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <AutoAwesome className="w-4 h-4" />
            <span>Advanced AI Capabilities</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Powerful AI Features
            </span>
            <br />
            <span className="text-white">That Transform Your Work</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI agents combine cutting-edge technology with intuitive design to deliver 
            intelligent solutions that adapt to your needs and grow with your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                activeFeature === index ? 'border-purple-500/50 bg-purple-500/10' : 'hover:border-purple-500/30'
              }`}
              onClick={() => setActiveFeature(index)}
                >
                  {/* Feature Icon */}
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Feature Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                        {feature.description}
                      </p>

              {/* Benefits List */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

        {/* Interactive Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              See AI Agents in Action
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of our AI agents with interactive demos and real-world use cases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                <PlayArrow className="w-5 h-5" />
                Watch Live Demo
              </button>
              
              <button className="px-8 py-4 border-2 border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-200 transition-all duration-300">
                Try AI Agent
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 