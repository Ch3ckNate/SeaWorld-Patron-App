import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Dolphin } from '../types/Dolphin';
import { DolphinModal } from './DolphinModal';

interface Props {
  dolphins: Dolphin[];
  onDolphinSelect: (dolphin: Dolphin | null) => void;
}

export function DolphinList({ dolphins, onDolphinSelect }: Props) {
  const [selectedDolphin, setSelectedDolphin] = useState<Dolphin | null>(null);

  const handleSelect = (dolphin: Dolphin) => {
    setSelectedDolphin(dolphin);
    onDolphinSelect(dolphin);
  };

  const handleClose = () => {
    setSelectedDolphin(null);
    onDolphinSelect(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <div className="p-6 border-b border-neutral-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">Our Dolphins</h2>
          <span className="text-sm text-neutral-500">{dolphins.length} dolphins</span>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {dolphins.map((dolphin) => (
            <motion.div
              key={dolphin.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative cursor-pointer"
              onClick={() => handleSelect(dolphin)}
            >
              <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={dolphin.photoUrl}
                  alt={dolphin.name}
                  className="w-full h-full object-cover transition-transform duration-300 
                    group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-medium text-white">{dolphin.name}</h3>
                <p className="text-xs text-white/80">{dolphin.age} years old</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedDolphin && (
        <DolphinModal
          dolphin={selectedDolphin}
          onClose={handleClose}
        />
      )}
    </div>
  );
}