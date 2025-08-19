import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayArrow,
  Pause,
  Refresh,
  SmartToy,
  Psychology,
  Analytics,
  Security,
  AutoAwesome,
  CheckCircle,
  TrendingUp,
  Speed,
  Memory
} from '@mui/icons-material';

const DemoSection = () => {
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [demoData, setDemoData] = useState(null);
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

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

  const demoSteps = [
    {
      title: "AI Agent Initialization",
      description: "Loading neural networks and establishing secure connections",
      icon: <SmartToy className="w-6 h-6" />,
      duration: 2000,
      data: { status: "Initializing", progress: "25%", connections: "12/12" }
    },
    {
      title: "Context Analysis",
      description: "Processing user intent and analyzing historical data patterns",
      icon: <Psychology className="w-6 h-6" />,
      duration: 2500,
      data: { status: "Analyzing", progress: "50%", patterns: "1,247 detected" }
    },
    {
      title: "Predictive Modeling",
      description: "Running advanced algorithms for real-time predictions",
      icon: <Analytics className="w-6 h-6" />,
      duration: 3000,
      data: { status: "Modeling", progress: "75%", accuracy: "94.2%" }
    },
    {
      title: "Response Generation",
      description: "Generating intelligent responses with confidence scoring",
      icon: <AutoAwesome className="w-6 h-6" />,
      duration: 2000,
      data: { status: "Generating", progress: "100%", confidence: "98.7%" }
    }
  ];

  const startDemo = async () => {
    setIsDemoRunning(true);
    setCurrentStep(0);
    setDemoData(null);

    for (let i = 0; i < demoSteps.length; i++) {
      setCurrentStep(i);
      setDemoData(demoSteps[i].data);
      
      await new Promise(resolve => setTimeout(resolve, demoSteps[i].duration));
    }

    // Demo completed
    setTimeout(() => {
      setIsDemoRunning(false);
      setCurrentStep(0);
      setDemoData(null);
    }, 2000);
  };

  const stopDemo = () => {
    setIsDemoRunning(false);
    setCurrentStep(0);
    setDemoData(null);
  };

  const performanceMetrics = [
    { label: "Response Time", value: "0.8s", icon: <Speed className="w-5 h-5" /> },
    { label: "Accuracy", value: "94.2%", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Memory Usage", value: "2.1GB", icon: <Memory className="w-5 h-5" /> },
    { label: "Throughput", value: "1.2K req/s", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <section id="demo-section" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
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
            <span>Live AI Demonstration</span>
            </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              See AI Agents
            </span>
            <br />
            <span className="text-white">In Action</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the power of our AI agents with real-time demonstrations 
            showcasing intelligent automation and decision-making capabilities.
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-sm">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">AI Agent Demo</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>Status: {isDemoRunning ? 'Running' : 'Idle'}</span>
              </div>
        </div>

        {/* Demo Content */}
              <div className="space-y-6">
                {/* Current Step Display */}
                <AnimatePresence mode="wait">
                  {isDemoRunning && demoSteps[currentStep] && (
            <motion.div
                      key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <div className="text-white">
                            {demoSteps[currentStep].icon}
                          </div>
                      </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {demoSteps[currentStep].title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {demoSteps[currentStep].description}
                          </p>
                    </div>
              </div>
                  
                  {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                      <motion.div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                          animate={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                  </div>

                      {/* Live Data */}
                      {demoData && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {Object.entries(demoData).map(([key, value]) => (
                            <div key={key} className="bg-gray-800/50 rounded-lg p-3">
                              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                {key}
                        </div>
                              <div className="text-lg font-bold text-white">
                                {value}
                        </div>
                      </div>
                    ))}
                  </div>
              )}
            </motion.div>
          )}
                </AnimatePresence>

                {/* Demo Controls */}
                <div className="flex items-center justify-center gap-4">
                  {!isDemoRunning ? (
                    <button
                      onClick={startDemo}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <PlayArrow className="w-5 h-5" />
                      Start Demo
                    </button>
                  ) : (
                    <button
                      onClick={stopDemo}
                      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300"
                    >
                      <Pause className="w-5 h-5" />
                      Stop Demo
                    </button>
                  )}
                  
                  <button
                    onClick={startDemo}
                    className="flex items-center gap-2 px-4 py-3 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-200 transition-all duration-300"
                  >
                    <Refresh className="w-4 h-4" />
                    Reset
                  </button>
                        </div>
                </div>
              </div>
            </motion.div>

          {/* Right: Performance Metrics */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Real-Time Performance
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our AI agents deliver exceptional performance with sub-second response times, 
                high accuracy rates, and efficient resource utilization.
              </p>
                      </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                      {metric.icon}
                              </div>
                    <h4 className="text-lg font-semibold text-white">
                      {metric.label}
                    </h4>
                              </div>
                  <div className="text-3xl font-bold text-purple-400">
                    {metric.value}
                            </div>
                </motion.div>
              ))}
                </div>

            {/* Feature Highlights */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">
                Key Capabilities
                  </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Natural language understanding and processing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Real-time decision making and automation</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Advanced pattern recognition and learning</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Secure and compliant operations</span>
                </li>
              </ul>
              </div>
            </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
            <SmartToy className="w-6 h-6 text-purple-400" />
            <span className="text-purple-300 font-medium">Ready to experience AI agents?</span>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Try Now
          </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection; 