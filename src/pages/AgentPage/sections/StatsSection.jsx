// c:\Users\muham\Desktop\echo.copym-v4.1\src\pages\AgentPage\sections\StatsSection.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from '@mui/icons-material';
import { useGSAP } from '../../../hooks/useGSAPAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AnimatedCard, AnimatedText } from '../../../components/gsap/GSAPAnimations.jsx';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef();

  const marketStats = [
    { number: '$16T', label: 'Total RWA Value by 2025' },
    { number: '43%', label: 'CAGR Growth Rate' },
    { number: '$1.5B', label: 'Year 1 Target Market' },
    { number: '23%', label: 'Better AI Accuracy' }
  ];

  // stagger entrance animation via gsap
  useGSAP(sectionRef, (ctx) => {
    gsap.fromTo(
      ctx.selector('.stat-card'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true
        }
      }
    );
  });

  return (
    <section ref={sectionRef} className="bg-black py-12 md:py-20 overflow-hidden relative">
      {/* floating icons */}
      <div className="absolute -right-10 -top-10 opacity-5">
        <TrendingUp style={{ fontSize: 200 }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="brand-section-title mb-4 text-white flex items-center justify-center">
            <TrendingUp className="mr-4 text-green-400" />
            <AnimatedText text="Massive Market Potential" />
          </h2>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 md:gap-8">
          {marketStats.map((stat, idx) => (
            <AnimatedCard key={idx} className="stat-card text-center p-6 md:p-8 bg-gray-900 rounded-xl border border-gray-700">
              <div className="brand-card-title text-green-400 mb-2">{stat.number}</div>
              <div className="brand-description text-gray-300">{stat.label}</div>
            </AnimatedCard>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="block lg:hidden">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4">
            {marketStats.map((stat, idx) => (
              <AnimatedCard key={idx} className="stat-card text-center p-6 bg-gray-900 rounded-xl border border-gray-700 flex-shrink-0 w-64">
                <div className="brand-card-title text-green-400 mb-2">{stat.number}</div>
                <div className="brand-description text-gray-300">{stat.label}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;