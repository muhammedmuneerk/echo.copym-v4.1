import React, { useEffect, useState, useRef } from "react";
import { Wallet, LayoutGrid, LineChart, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup from "../../../components/PhoneMockup";

const mediaItems = [
  {
    id: "wallet",
    screenshot: "/assets/Images/Walletpreview.jpg",
    video: "/assets/videos/WalletPreview.mp4",
    label: "Deposit / Withdraw",
    icon: <Wallet className="w-5 h-5" />,
    description: "Seamlessly manage your digital assets with secure deposit and withdrawal functionality"
  },
  {
    id: "marketplace",
    screenshot: "/assets/Images/MarketPreview.jpg",
    video: "/assets/videos/MarketPlacePreview.mp4",
    label: "Explore Assets",
    icon: <LayoutGrid className="w-5 h-5" />,
    description: "Discover and invest in a diverse range of tokenized real-world assets"
  },
  {
    id: "dashboard",
    screenshot: "/assets/Images/MarketplaceDashboard.jpg",
    video: "/assets/videos/marketplace-mobile-app-preview.mp4",
    label: "Track Portfolio",
    icon: <LineChart className="w-5 h-5" />,
    description: "Monitor your investments with real-time analytics and performance tracking"
  },
];

export default function AppPeekSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mediaType, setMediaType] = useState('screenshot'); // 'screenshot' or 'video'
  const videoRefs = useRef({});
  const intervalRef = useRef(null);
  const total = mediaItems.length;

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % total);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, total]);

  // Handle video play/pause
  const handleVideoToggle = (itemId) => {
    const videoElement = videoRefs.current[itemId];
    if (videoElement) {
      if (isVideoPlaying) {
        videoElement.pause();
        setIsVideoPlaying(false);
      } else {
        videoElement.play();
        setIsVideoPlaying(true);
      }
    }
  };

  // Handle media type toggle
  const toggleMediaType = () => {
    setMediaType(prev => prev === 'screenshot' ? 'video' : 'screenshot');
    setIsVideoPlaying(false);
  };

  // Handle item click
  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Reset auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Animation calculations
  const getAnimationProps = (i) => {
    const ORBIT_RADIUS_X = 280;
    const ORBIT_RADIUS_Y = 80;
    const FRONT_Z_INDEX = 100;
    const BASE_SCALE = 0.7;
    
    const angle = (i - activeIndex) * (2 * Math.PI / total) + (Math.PI / 2);
    const x = ORBIT_RADIUS_X * Math.cos(angle);
    const y = ORBIT_RADIUS_Y * Math.sin(angle);
    const normalizedDepth = (y + ORBIT_RADIUS_Y) / (2 * ORBIT_RADIUS_Y);
    const scale = BASE_SCALE + (1 - BASE_SCALE) * normalizedDepth;
    const zIndex = Math.round(FRONT_Z_INDEX * normalizedDepth);
    const rotate = isMobile ? 0 : x / 20;
    
    return { 
      x, 
      y, 
      scale, 
      zIndex, 
      rotate, 
      opacity: scale,
      filter: i === activeIndex ? 'brightness(1)' : 'brightness(0.7)'
    };
  };

  const activeItem = mediaItems[activeIndex];

  return (
    <section className="py-24 text-gray-800 overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="brand-section-title mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#255f99]">Peek Into Our </span>
            <span className="text-[#15a36e]">Web3 </span>
            <span className="text-[#255f99]">Investment Hub</span>
          </motion.h1>
          
          <motion.p 
            className="brand-description max-w-3xl mx-auto text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Manage your assets, monitor real-time performance, and view tokenized ownership — all through an intuitive interface built for next-gen investors.
          </motion.p>

          {/* Media Type Toggle */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-full p-2 shadow-lg border border-gray-200">
              <button
                onClick={() => setMediaType('screenshot')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  mediaType === 'screenshot' 
                    ? 'bg-[#255f99] text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Screenshots
              </button>
              <button
                onClick={() => setMediaType('video')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  mediaType === 'video' 
                    ? 'bg-[#15a36e] text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Videos
              </button>
            </div>
          </motion.div>

          {/* Active Item Label */}
          <div className="h-12 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-5 py-2.5 rounded-full flex items-center gap-2 font-semibold text-md text-gray-900 bg-white/70 shadow-lg backdrop-blur-md border border-gray-200"
              >
                {activeItem.icon}
                <span className="font-bold">{activeItem.label}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Active Item Description */}
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            {activeItem.description}
          </motion.p>
        </div>

        {/* Phone Animation Container */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-[750px] flex items-center justify-center">
            {mediaItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="absolute cursor-pointer"
                animate={getAnimationProps(i)}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => handleItemClick(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <PhoneMockup 
                    screenshot={mediaType === 'video' ? item.video : item.screenshot} 
                    alt={item.label}
                    isVideo={mediaType === 'video'}
                    videoRef={(el) => {
                      if (el) videoRefs.current[item.id] = el;
                    }}
                  />
                  
                  {/* Video Play/Pause Overlay */}
                  {mediaType === 'video' && i === activeIndex && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoToggle(item.id);
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6 ml-1" />
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#255f99] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center mt-12 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/marketplace" 
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white btn-gradient rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore the Marketplace
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}