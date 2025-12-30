"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In production, tie this to actual page/resource loading
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
          {/* Truck Loader from Original HTML */}
          <div className="loader">
            <div className="truckWrapper">
              <div className="truckBody">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 198 93"
                  className="trucksvg"
                >
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#F83D3D"
                    d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#7D7C7C"
                    d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                  ></path>
                  <path
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#282828"
                    d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
                  ></path>
                  <rect
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#FFFCAB"
                    rx="1"
                    height="7"
                    width="5"
                    y="63"
                    x="187"
                  ></rect>
                  <rect
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#282828"
                    rx="1"
                    height="11"
                    width="4"
                    y="81"
                    x="193"
                  ></rect>
                  <rect
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#D4AF37"
                    rx="2"
                    height="88"
                    width="131"
                    y="1.5"
                    x="1.5"
                  ></rect>
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    d="M31.5 1.5V18.5M65.5 1.5V18.5M99.5 1.5V18.5"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    d="M1.5 24.5H132.5"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    d="M1.5 52.5H132.5"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#282828"
                    d="M1.5 76.5H132.5"
                  ></path>
                </svg>
              </div>
              <div className="truckTires">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="tiresvg"
                >
                  <circle
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#F83D3D"
                    r="10.5"
                    cy="12"
                    cx="12"
                  ></circle>
                  <circle
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#282828"
                    r="3"
                    cy="12"
                    cx="12"
                  ></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="tiresvg"
                >
                  <circle
                    strokeWidth="3"
                    stroke="#282828"
                    fill="#F83D3D"
                    r="10.5"
                    cy="12"
                    cx="12"
                  ></circle>
                  <circle
                    strokeWidth="2"
                    stroke="#282828"
                    fill="#282828"
                    r="3"
                    cy="12"
                    cx="12"
                  ></circle>
                </svg>
              </div>
              <div className="road"></div>
            </div>
          </div>
          
          <style jsx>{`
            .loader {
              width: fit-content;
              height: fit-content;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 5px;
              transform: scale(1.2);
            }
            .truckWrapper {
              width: 200px;
              height: 150px;
              display: flex;
              flex-direction: column;
              position: relative;
              align-items: center;
              justify-content: flex-end;
              overflow: hidden;
              padding-bottom: 20px;
            }
            .truckBody {
              width: 130px;
              height: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              z-index: 10;
              animation: motion 1s linear infinite;
            }
            .trucksvg {
              width: 130px;
              height: auto;
            }
            .truckTires {
              width: 130px;
              height: auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0px 10px;
              position: absolute;
              bottom: 20px;
              z-index: 15;
              animation: motion 1s linear infinite;
            }
            .tiresvg {
              width: 20px;
            }
            .road {
              width: 100%;
              height: 1.5px;
              background-color: #282828;
              position: relative;
              bottom: 0;
              align-self: flex-end;
              border-radius: 3px;
            }
            .road::before {
              content: "";
              position: absolute;
              width: 20px;
              height: 100%;
              background-color: #282828;
              right: -50%;
              border-radius: 3px;
              animation: roadAnimation 1.4s linear infinite;
              border-left: 10px solid white;
            }
            .road::after {
              content: "";
              position: absolute;
              width: 10px;
              height: 100%;
              background-color: #282828;
              left: -15%;
              border-radius: 3px;
              animation: roadAnimation 1.4s linear infinite;
              border-right: 10px solid white;
            }
            @keyframes motion {
              0% { transform: translateY(0px); }
              50% { transform: translateY(3px); }
              100% { transform: translateY(0px); }
            }
            @keyframes roadAnimation {
              0% { transform: translateX(0px); }
              100% { transform: translateX(-350px); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
