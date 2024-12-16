import { motion, AnimatePresence } from 'framer-motion';
import { Dolphin } from '../types/Dolphin';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activeDolphin: Dolphin | null;
}

export function FullScreenModal({ isOpen, onClose, activeDolphin }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy-900/95"
        >
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm
                transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="h-screen flex flex-col">
            <div className="flex-1 relative">
              <iframe
                src="https://www.youtube.com/embed/62NMwmHY8wI?autoplay=1&mute=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="bg-navy-800/50 backdrop-blur-md border-t border-white/10"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white/90 font-medium">Live Stream</span>
                  </div>
                  <span className="text-white/60 text-sm">Viewing Pool A</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-white/90 font-medium mb-3">Active Interaction</h3>
                  {activeDolphin ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-lg font-semibold text-white">
                            {activeDolphin.name[0]}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{activeDolphin.name}</h4>
                          <p className="text-white/60 text-sm">{activeDolphin.species}</p>
                        </div>
                        <div className="ml-auto text-right">
                          <span className="text-white/90 text-sm font-medium">Active Now</span>
                          <p className="text-white/60 text-xs">Button 3 pressed</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm text-center">
                      <p className="text-white/60">No active interactions</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}