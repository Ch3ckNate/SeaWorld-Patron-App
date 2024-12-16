import { useState, useEffect } from 'react';
import { type Dolphin } from '../types/Dolphin';
import { FullScreenModal } from './FullScreenModal';
import { InteractiveDevice } from './InteractiveDevice';
import { DolphinScanner } from './DolphinScanner/DolphinScanner';
import { useDeviceSimulation } from '../hooks/useDeviceSimulation';

interface Props {
  dolphins: Dolphin[];
  onDolphinSelect: (dolphin: Dolphin | null) => void;
}

export function LiveStream({ dolphins, onDolphinSelect }: Props) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { activeButton, activeDolphin, buttonPressCount } = useDeviceSimulation(dolphins);

  useEffect(() => {
    if (activeDolphin) {
      onDolphinSelect(activeDolphin);
    }
  }, [activeDolphin, onDolphinSelect]);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="p-4 border-b border-neutral-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">Live Stream</h2>
            <div className="flex items-center space-x-4">
              <DolphinScanner />
              <button
                onClick={() => setIsFullScreen(true)}
                className="text-sm font-medium text-navy-600 hover:text-navy-700 
                  flex items-center space-x-2"
              >
                <span>View Fullscreen</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9 bg-neutral-900">
          <iframe
            src="https://www.youtube.com/embed/62NMwmHY8wI?autoplay=1&mute=1"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <InteractiveDevice
        activeButton={activeButton}
        activeDolphin={activeDolphin}
        onDolphinSelect={onDolphinSelect}
        buttonPressCount={buttonPressCount}
      />

      <FullScreenModal
        isOpen={isFullScreen}
        onClose={() => setIsFullScreen(false)}
        activeDolphin={activeDolphin}
      />
    </div>
  );
}