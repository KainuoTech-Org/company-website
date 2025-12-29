"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading - in production, tie this to actual page/resource loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F9F7F2]"
        >
          {/* Car Loader Animation */}
          <div className="flex flex-col items-center">
            {/* Simple Car SVG Animation */}
            <motion.svg
              width="120"
              height="60"
              viewBox="0 0 120 60"
              className="mb-6"
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Car Body */}
              <motion.g
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="20" y="30" width="60" height="15" rx="3" fill="#D4AF37" />
                <rect x="30" y="20" width="40" height="15" rx="3" fill="#D4AF37" />
                {/* Windows */}
                <rect x="35" y="23" width="15" height="10" rx="2" fill="#1A1A1A" opacity="0.3" />
                <rect x="55" y="23" width="15" height="10" rx="2" fill="#1A1A1A" opacity="0.3" />
              </motion.g>
              
              {/* Wheels */}
              <motion.circle
                cx="35"
                cy="45"
                r="8"
                fill="#1A1A1A"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "35px 45px" }}
              />
              <circle cx="35" cy="45" r="4" fill="#666" />
              
              <motion.circle
                cx="65"
                cy="45"
                r="8"
                fill="#1A1A1A"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "65px 45px" }}
              />
              <circle cx="65" cy="45" r="4" fill="#666" />
            </motion.svg>

            {/* Loading Text */}
            <motion.div
              className="text-[#1A1A1A] font-serif text-xl tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

