// c:\Users\muham\Desktop\echo.copym-v4.1\src\pages\AgentPage\sections\HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedText, FloatingElement } from '../../../components/gsap/GSAPAnimations.jsx';
import useGSAP from '../../../hooks/useGSAPAnimations';

// Modern AI-focused icons
import {
  SmartToy,
  Psychology,
  AutoAwesome,
  RocketLaunch,
  TrendingUp,
  Security,
  Speed,
  Analytics,
  CheckCircle,
  PlayArrow,
  ArrowForward
} from '@mui/icons-material';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef();
  const videoRef = useRef();

  useGSAP(heroRef, () => {
    // Animate progress bar
    gsap.to('#progress-bar', {
      scaleX: scaleX,
      duration: 0.1,
      ease: 'none'
    });

    // Floating elements animation
    gsap.utils.toArray('.floating-element').forEach((el, i) => {
      gsap.to(el, {
        y: 30,
        x: i % 2 === 0 ? 20 : -20,
        duration: 6 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Hero text animation
    gsap.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.hero-cta', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out'
    });
  });

  const handleDemoClick = () => {
    // Scroll to demo section
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    // Scroll to features section
    document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const aiFeatures = [
    {
      icon: <SmartToy className="text-purple-400" />,
      title: 'Intelligent Automation',
      description: 'AI-powered workflows that adapt and learn'
    },
    {
      icon: <Psychology className="text-blue-400" />,
      title: 'Cognitive Processing',
      description: 'Advanced reasoning and decision-making capabilities'
    },
    {
      icon: <Security className="text-green-400" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime'
    }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
             {/* Animated Background */}
       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
         <div className="absolute inset-0 opacity-30" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
         }} />
       </div>

      {/* Floating Elements */}
      <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
      <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
      <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8"
        >
          <AutoAwesome className="w-4 h-4" />
          <span>Next-Generation AI Agents</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI Agents
          </span>
          <br />
          <span className="text-white">That Think Like You</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the future of artificial intelligence with our advanced AI agents that understand context, 
          learn from interactions, and deliver intelligent solutions across any domain.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
            <button
            onClick={handleDemoClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <span className="flex items-center gap-2">
              <PlayArrow className="w-5 h-5" />
              Watch Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
            </button>

            <button
            onClick={handleLearnMore}
            className="group px-8 py-4 border-2 border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-200 transition-all duration-300 flex items-center gap-2"
          >
            Learn More
            <ArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* AI Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4 group-hover:bg-purple-500/30 transition-colors">
                {React.cloneElement(feature.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10x</div>
            <div className="text-gray-400 text-sm">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm">AI Support</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>
  );
};

export default HeroSection;