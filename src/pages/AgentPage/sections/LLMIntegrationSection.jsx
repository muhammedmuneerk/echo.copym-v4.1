import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Psychology,
  Security,
  Analytics,
  AutoAwesome,
  Memory,
  Code,
  Cloud,
  Shield
} from '@mui/icons-material';

const LLMIntegrationSection = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const integrationFeatures = [
    {
      number: "01",
      title: "AI-Powered Asset Intelligence",
      description: "Advanced AI algorithms analyze 10,000+ data points to verify asset authenticity and predict market performance",
      icon: <Analytics className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "Instant Tokenization Engine",
      description: "Convert real-world assets into blockchain tokens in under 3 minutes with AI-powered smart contracts",
      icon: <AutoAwesome className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "AI Fraud Detection System", 
      description: "Multi-layered AI security with 99.7% fraud detection accuracy and real-time threat monitoring",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "Predictive Portfolio AI",
      description: "AI predicts market trends with 23% better accuracy than traditional methods and optimizes your portfolio",
      icon: <Psychology className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Rectangle Container */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-100/90 border border-gray-300/50 rounded-2xl p-8 lg:p-12 shadow-xl w-full max-w-5xl min-h-[600px] flex flex-col justify-center">
            {/* Header Section */}
                          <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                 CopymAgent AI Capabilities
               </h2>

               <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                 Experience the power of advanced AI technology revolutionizing real-world asset investment
               </p>
            </motion.div>

                         {/* Centered Hero Section AI Image */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={isInView ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex justify-center items-center mb-8"
             >
               <motion.img 
                 src="/assets/Images/hero-section-ai.png" 
                 alt="AI Hero Section" 
                 className="w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-80"
                 animate={{ 
                   y: [0, -10, 0],
                   rotate: [0, 1, -1, 0]
                 }}
                 transition={{
                   y: {
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut"
                   },
                   rotate: {
                     duration: 6,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }
                 }}
               />
             </motion.div>

            {/* Info Boxes */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {integrationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                                     <div className="flex items-start gap-4">
                     {/* Number Badge */}
                     <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold text-lg rounded-lg">
                       {feature.number}
                     </div>
                     
                     {/* Content */}
                     <div className="flex-1">
                       <h3 className="text-xl font-bold text-gray-800 mb-3">
                         {feature.title}
                       </h3>
                       <p className="text-gray-600 leading-relaxed mb-4">
                         {feature.description}
                       </p>
                       
                       {/* Try Demo Button */}
                       <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                         Try Demo
                       </button>
                     </div>
                   </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLMIntegrationSection;
