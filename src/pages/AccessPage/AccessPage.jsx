import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Diamond, Shield, Wallet, Globe } from 'lucide-react';
import CredentialCard from '../../components/CredentialCard';
import CoinGeckoChart from '../../components/CoinGeckoChart';

export default function AccessPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle Background Accent Overlay (keeps current site background visible) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-purple-200/10 to-blue-300/10 pointer-events-none" />
      
      {/* Removed decorative geometric background elements for a cleaner layout */}

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Section - Typography and Content */}
        <motion.div 
          className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <motion.p 
            className="text-gray-500 font-light text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real-World Asset Tokenization
          </motion.p>
          
          {/* Main Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            COPYM Access Pass
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Unlock regulated access to primary sales, secondary markets, and programmatic yields for tokenized real‑world assets. Your COPYM Access Pass provides a single, reusable KYC profile and utility across compliant networks, with on‑chain transparency by default.
          </motion.p>

          <motion.ul 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <span className="text-gray-600">Compliance‑first: KYC/AML, transfer restrictions, whitelisting and audit trails.</span>
            </li>
            <li className="flex items-start gap-3">
              <Wallet className="w-5 h-5 text-purple-600 mt-0.5" />
              <span className="text-gray-600">Utility & access: early allocations, fee discounts, governance & staking perks.</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
              <span className="text-gray-600">Multi‑asset support: equity, debt, real estate, commodities, carbon & more.</span>
            </li>
            <li className="flex items-start gap-3">
              <Diamond className="w-5 h-5 text-purple-600 mt-0.5" />
              <span className="text-gray-600">Institutional rails: custody, settlement, and data rooms integrated.</span>
            </li>
          </motion.ul>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Mint Access Pass"
            >
              <Calendar size={20} />
            </motion.button>
            
            <motion.button 
              className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Read documentation"
            >
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Supported Networks */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-3">
              Supported Networks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { key: 'ethereum', name: 'Ethereum', ticker: 'ETH', gradient: 'from-[#627EEA] to-[#3C5FAD]' },
                { key: 'solana', name: 'Solana', ticker: 'SOL', gradient: 'from-[#14F195] to-[#9945FF]' },
                { key: 'polygon', name: 'Polygon', ticker: 'POL', gradient: 'from-[#8247E5] to-[#6C3BB4]' },
                { key: 'avalanche', name: 'Avalanche', ticker: 'AVAX', gradient: 'from-[#E84142] to-[#B03334]' },
                { key: 'optimism', name: 'Optimism', ticker: 'OP', gradient: 'from-[#FF0420] to-[#B30216]' },
                { key: 'ripple', name: 'Ripple', ticker: 'XRP', gradient: 'from-[#0A74FF] to-[#003366]' },
                { key: 'bitcoin', name: 'Bitcoin', ticker: 'BTC', gradient: 'from-[#F7931A] to-[#C06A00]' },
                { key: 'sepolia', name: 'Sepolia', ticker: 'SEP', gradient: 'from-[#8E8E8E] to-[#5A5A5A]' }
              ].map((network) => (
                <motion.div
                  key={network.key}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl p-3 bg-white/70 dark:bg-gray-900/40 ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {(() => {
                      const logoMap = {
                        ethereum: '/assets/blockchains/ethereum.png',
                        solana: '/assets/blockchains/solana.png',
                        polygon: '/assets/blockchains/Polygon.png',
                        optimism: '/assets/blockchains/logoOptimism.png',
                        avalanche: '/assets/blockchains/avalanche.png',
                        ripple: '/assets/blockchains/ripple.png',
                        bitcoin: '/assets/blockchains/bitcoin.png',
                        sepolia: '/assets/blockchains/ethereum.png'
                      };
                      const src = logoMap[network.key];
                      return src ? (
                        <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center ring-1 ring-gray-200 overflow-hidden">
                          <img src={src} alt={`${network.name} logo`} className="h-6 w-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                      ) : (
                        <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${network.gradient} text-white flex items-center justify-center text-[11px] font-bold shadow-sm`}>
                          {network.ticker}
                        </div>
                      );
                    })()}
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{network.name}</div>
                      <div className="text-xs text-gray-500">{network.ticker}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Credential Preview */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-3">Your Access Credential</h3>
            <div className="overflow-x-auto">
              <CredentialCard
                user={{
                  name: 'Alex Morgan',
                  employeeNumber: 'EMP-2048',
                  passNumber: 'PASS-7F32',
                  points: '1,250',
                  qrImage: ''
                }}
                variant="bottleGreen"
                stacked
                backVariant="darkBlue"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Chart */}
        <motion.div 
          className="hidden lg:block w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative h-full overflow-auto p-6">
            <CoinGeckoChart />
          </div>
        </motion.div>
      </div>

      {/* Removed bottom geometric elements */}

      {/* Removed top-right floating element */}
    </div>
  );
}
