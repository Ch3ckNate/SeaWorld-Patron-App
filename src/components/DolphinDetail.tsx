import { motion } from 'framer-motion';
import { Dolphin } from '../types/Dolphin';

interface Props {
  dolphin: Dolphin;
  onWatchStream: () => void;
}

export function DolphinDetail({ dolphin, onWatchStream }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
        <div className="relative">
          <img
            src={dolphin.photoUrl}
            alt={dolphin.name}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onWatchStream}
            className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-xl font-medium
              transition-all duration-200 hover:bg-white/30 hover:shadow-lg
              active:transform active:scale-95 flex items-center space-x-3"
          >
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
            <span>Watch Live Stream</span>
          </motion.button>
        </div>
        <div className="p-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-neutral-900 mb-3"
          >
            {dolphin.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-500 font-medium mb-6"
          >
            {dolphin.species} • {dolphin.age} years old
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 leading-relaxed"
          >
            {dolphin.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}