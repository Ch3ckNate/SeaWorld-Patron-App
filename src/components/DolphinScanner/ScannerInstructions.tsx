import { motion } from 'framer-motion';

export function ScannerInstructions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-8 left-0 right-0 flex justify-center"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4">
        <h3 className="text-white font-medium mb-2">Scanning Instructions</h3>
        <ul className="space-y-2 text-white/80 text-sm">
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            <span>Position the dolphin within the frame</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            <span>Ensure adequate lighting</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            <span>Hold the camera steady</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}