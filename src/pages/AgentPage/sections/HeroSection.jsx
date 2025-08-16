// c:\Users\muham\Desktop\echo.copym-v4.1\src\pages\AgentPage\sections\HeroSection.jsx
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedText, FloatingElement } from '../../../components/gsap/GSAPAnimations.jsx';
import useGSAP from '../../../hooks/useGSAPAnimations';

// icons (kept from original file)
import {
  AttachMoney,
  AcUnit,
  Psychology,
  SmartToy,
  CheckCircle,
  Percent,
  Assessment,
  Security,
  TrendingUp,
  AccountBalance,
  Diamond,
  AutoAwesome,
  Group,
  Launch,
  MyLocation,
  PhoneAndroid,
  Language,
  Public,
  Handshake,
  BarChart,
  Token,
  Storefront
} from '@mui/icons-material';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  /* --------------------------------------------------------------------- */
  /*                          Scroll progress bar                          */
  /* --------------------------------------------------------------------- */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  /* --------------------------------------------------------------------- */
  /*                       Floating background elements                    */
  /* --------------------------------------------------------------------- */
  const bgRef = React.useRef();
  useGSAP(bgRef, () => {
    gsap.utils.toArray('.floating-bg').forEach((el, i) => {
      gsap.to(el, {
        y: 30,
        x: i % 2 === 0 ? 20 : -20,
        duration: 6 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  });

  /* --------------------------------------------------------------------- */
  /*                          Redirect handlers                            */
  /* --------------------------------------------------------------------- */
  const handleInvestRedirect = () => window.open('https://copymai.ai/invest', '_blank');
  const handleContactRedirect = () => window.open('https://copymai.ai/contact', '_blank');

  /* --------------------------------------------------------------------- */
  /*                               Data                                    */
  /* --------------------------------------------------------------------- */
  const problems = [
    {
      icon: <AttachMoney sx={{ fontSize: 40, color: '#ef4444' }} />,
      title: 'Too Expensive',
      description: "Most people can't afford the high minimum investment (e.g., $10,000+)"
    },
    {
      icon: <AcUnit sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Illiquid',
      description: "You can't buy or sell easily; it takes weeks/months"
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#8b5cf6' }} />,
      title: 'Complex',
      description: 'Requires deep knowledge and manual analysis'
    }
  ];

  const solutions = [
    {
      icon: <Token sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'AI Tokenization Engine',
      description: 'Converts real-world assets into secure, blockchain-based tokens using advanced AI'
    },
    {
      icon: <Storefront sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Integrated Marketplace',
      description: 'Buy/sell/trade fractional ownership instantly with AI-powered matching'
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'CopymAgent Advisor',
      description: 'Our AI agent recommends the best assets for you using smart analytics'
    }
  ];

  const features = [
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Smart Asset Verification',
      description: "CopymAI + human experts verify every asset's value and authenticity"
    },
    {
      icon: <Percent sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Fractional Ownership',
      description: 'Start investing with as little as $100 through AI-powered tokenization'
    },
    {
      icon: <Assessment sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Predictive AI Analytics',
      description: 'Our AI predicts which assets will grow in value with 23% better accuracy'
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#ef4444' }} />,
      title: 'Secure AI Wallet',
      description: 'Bank-level security for storing your tokens with AI-powered fraud detection'
    }
  ];

  const marketStats = [
    { number: '$16T', label: 'Total RWA Value by 2025' },
    { number: '43%', label: 'CAGR Growth Rate' },
    { number: '$1.5B', label: 'Year 1 Target Market' },
    { number: '23%', label: 'Better AI Accuracy' }
  ];

  /* --------------------------------------------------------------------- */
  /*                               Render                                  */
  /* --------------------------------------------------------------------- */
  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-blue-600 origin-left z-50 shadow-lg shadow-green-400/50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section
        id="hero"
        ref={bgRef}
        className="min-h-screen flex items-center justify-center text-center px-8 mx-4 my-4 mt-8 md:mt-2  py-16 rounded-2xl relative overflow-hidden"
        style={{ background: 'black' }}
      >
        {/* Floating background particles */}
        <FloatingElement className="floating-bg" size={14} color="#4ade8015" style={{ top: '20%', left: '15%' }} />
        <FloatingElement className="floating-bg" size={18} color="#3b82f615" style={{ top: '70%', left: '70%' }} />
        <FloatingElement className="floating-bg" size={12} color="#f59e0b20" style={{ top: '40%', left: '80%' }} />

        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <AnimatedText
            text="Introducing CopymAI"
            className="brand-title mb-6 leading-tight tracking-tight"
          />

          <h2 className="brand-section-title mb-10 text-green-400 leading-tight tracking-tight">
            Revolutionizing Real-World Asset Investment
          </h2>

          <p className="brand-description mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wide">
            We're building a next-gen AI-powered investment platform that uses artificial intelligence and blockchain to make investing in high-value real-world assets
            (like real estate, art, or rare collectibles) easy, accessible, and profitable — even for everyday investors.
          </p>

          <div className="flex gap-6 justify-center mb-20 flex-wrap group">
            <button
              onClick={handleInvestRedirect}
              className="btn-gradient min-w-[200px] relative overflow-hidden transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-green-400/40 active:scale-95"
            >
              <span className="relative z-10">Invest in Assets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-full" />
            </button>

            <button
              className="btn-gradient-secondary min-w-[200px] relative overflow-hidden transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:scale-95"
              onClick={handleContactRedirect}
            >
              <span className="relative z-10">Partner With CopymAI</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-full" />
            </button>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes heroTitleGlow {
          0% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
          }
          100% {
            filter: drop-shadow(0 0 40px rgba(74, 222, 128, 0.5));
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;