import { motion } from 'framer-motion';

export function ScannerViewfinder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-[87%] aspect-[4/3] border-2 border-white/20 rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        
        {/* Corner Markers */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-lg" />

        {/* Scanning Animation */}
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute left-0 right-0 h-0.5 bg-white/60"
        />
      </motion.div>
    </div>
  );
}