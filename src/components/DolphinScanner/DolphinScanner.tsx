import React, { useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { motion, AnimatePresence } from 'framer-motion';
import { ScannerViewfinder } from './ScannerViewfinder';
import { ScannerInstructions } from './ScannerInstructions';
import { ScannerError } from './ScannerError';
import { useCameraPermission } from '../../hooks/useCameraPermission';
import { useImageProcessing } from '../../hooks/useImageProcessing';

export function DolphinScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const { hasPermission, requestPermission, error } = useCameraPermission();
  const { processImage, isProcessing } = useImageProcessing();
  const webcamRef = React.useRef<Webcam>(null);

  const handleStartScan = useCallback(async () => {
    if (!hasPermission) {
      const granted = await requestPermission();
      if (!granted) return;
    }
    setIsScanning(true);
  }, [hasPermission, requestPermission]);

  const handleCapture = useCallback(async () => {
    if (!webcamRef.current) return;
    
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    try {
      await processImage(imageSrc);
      setIsScanning(false);
    } catch (error) {
      console.error('Failed to process image:', error);
    }
  }, [processImage]);

  if (!hasPermission || error) {
    return (
      <ScannerError 
        onRetry={requestPermission}
        error={error || 'Camera access is required'}
      />
    );
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isScanning ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-900/95 z-50"
          >
            <div className="relative h-full">
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: 'environment',
                  width: { ideal: 1920 },
                  height: { ideal: 1080 }
                }}
                className="w-full h-full object-cover"
              />
              <ScannerViewfinder />
              <ScannerInstructions />
              
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCapture}
                  disabled={isProcessing}
                  className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-2xl
                    font-medium transition-all duration-200 hover:bg-white/30
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center space-x-3"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Scan Dolphin</span>
                    </>
                  )}
                </motion.button>
              </div>

              <button
                onClick={() => setIsScanning(false)}
                className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 text-white
                  rounded-full p-2 backdrop-blur-sm transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleStartScan}
            className="bg-navy-500 text-white px-6 py-3 rounded-xl font-medium
              transition-all duration-200 hover:shadow-lg hover:scale-105
              active:transform active:scale-95 flex items-center space-x-3"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Scan Dolphin</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}