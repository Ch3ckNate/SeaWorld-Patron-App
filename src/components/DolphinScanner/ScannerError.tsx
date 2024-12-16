import { motion } from 'framer-motion';

interface Props {
  onRetry: () => void;
  error: string;
}

export function ScannerError({ onRetry, error }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-soft p-6 text-center"
    >
      <div className="w-12 h-12 bg-navy-50 rounded-full mx-auto flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-navy-900 mb-2">Camera Access Required</h3>
      <p className="text-navy-600 mb-4">{error}</p>
      <button
        onClick={onRetry}
        className="bg-navy-500 text-white px-6 py-3 rounded-xl font-medium
          transition-all duration-200 hover:shadow-lg
          active:transform active:scale-95"
      >
        Try Again
      </button>
    </motion.div>
  );
}