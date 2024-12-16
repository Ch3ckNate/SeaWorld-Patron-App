import { motion, AnimatePresence } from 'framer-motion';
import { Dolphin } from '../types/Dolphin';

interface Props {
  activeButton: number | null;
  activeDolphin: Dolphin | null;
  onDolphinSelect: (dolphin: Dolphin | null) => void;
  buttonPressCount: number;
}

export function InteractiveDevice({ 
  activeButton, 
  activeDolphin, 
  onDolphinSelect,
  buttonPressCount 
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <div className="p-4 border-b border-neutral-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-neutral-900">Interactive Device</h2>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-navy-50 text-navy-700 text-xs font-medium rounded-full">
                Pool A
              </span>
              <span className="text-xs text-neutral-500">
                Total Interactions: {buttonPressCount}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-neutral-500">Active</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-b from-navy-50/30">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[1, 2, 3, 4].map((button) => {
            const isActive = activeButton === button;
            return (
              <motion.div
                key={button}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                className={`
                  relative rounded-xl overflow-hidden
                  ${isActive ? 'ring-2 ring-navy-500 ring-offset-2' : 'hover:bg-navy-50/50'}
                  transition-all duration-300
                `}
              >
                <div className={`
                  p-4 flex items-center justify-between
                  ${isActive ? 'bg-navy-100' : 'bg-white'}
                `}>
                  <span className="text-sm font-medium text-navy-700">
                    Button {button}
                  </span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center space-x-1.5"
                    >
                      <span className="w-1.5 h-1.5 bg-navy-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-navy-600">Active</span>
                    </motion.div>
                  )}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-navy-500"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-navy-900">Active Interaction</h3>
              <p className="text-sm text-navy-600">Real-time dolphin detection</p>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-navy-50 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-navy-700">Live Data</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeDolphin ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white border border-navy-200 rounded-xl p-4 shadow-sm
                  hover:shadow-md transition-all duration-200 cursor-pointer"
                onClick={() => onDolphinSelect(activeDolphin)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center">
                    <span className="text-lg font-semibold text-navy-700">
                      {activeDolphin.name[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-navy-900">{activeDolphin.name}</span>
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        Active Now
                      </span>
                    </div>
                    <p className="text-sm text-navy-600 mt-0.5">
                      Last interaction: Button {activeButton}
                    </p>
                  </div>
                  <div className="text-navy-600 hover:text-navy-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-navy-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-navy-100 mx-auto flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-navy-700 font-medium">Waiting for interaction...</p>
                <p className="text-sm text-navy-600 mt-1">Device is ready and monitoring</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}