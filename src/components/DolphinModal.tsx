import { motion, AnimatePresence } from 'framer-motion';
import type { Dolphin } from '../types/Dolphin';

interface Props {
  dolphin: Dolphin;
  onClose: () => void;
}

export function DolphinModal({ dolphin, onClose }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          key="modal-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={e => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        >
          <div className="relative h-64">
            <img
              src={dolphin.photoUrl}
              alt={dolphin.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg">
              <span className="text-sm font-medium">{dolphin.rescueStatus}</span>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/20 hover:bg-black/30 backdrop-blur-sm
                text-white w-8 h-8 rounded-full flex items-center justify-center
                transition-all duration-200"
            >
              ✕
            </button>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              {dolphin.name}
            </h2>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm font-medium text-navy-600">
                {dolphin.species}
              </span>
              <span className="w-1 h-1 bg-navy-300 rounded-full" />
              <span className="text-sm font-medium text-navy-600">
                {dolphin.age} years old
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">About</h3>
                <p className="text-navy-600 leading-relaxed">
                  {dolphin.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Background</h3>
                <p className="text-navy-600 leading-relaxed">
                  {dolphin.background}
                </p>
              </div>
              
              <div className="bg-navy-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Interactive Device Performance
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-navy-600">Success Rate</span>
                      <span className="text-sm font-medium text-navy-900">87%</span>
                    </div>
                    <div className="h-2 bg-navy-200 rounded-full overflow-hidden">
                      <div className="h-full w-[87%] bg-navy-500 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-navy-600">Average Response Time</span>
                    <span className="text-sm font-medium text-navy-900">2.3 seconds</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-navy-600">Favourite Button</span>
                    <span className="text-sm font-medium text-navy-900">Button 3</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-navy-600">Daily Interactions</span>
                    <span className="text-sm font-medium text-navy-900">12 sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}