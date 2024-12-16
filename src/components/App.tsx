import React from 'react';
import { DolphinList } from './DolphinList';
import { LiveStream } from './LiveStream';
import { dolphins } from '../data/dolphins';
import { Dolphin } from '../types/Dolphin';
import { DolphinModal } from './DolphinModal';

export function App() {
  const [selectedDolphin, setSelectedDolphin] = React.useState<Dolphin | null>(null);

  const handleDolphinSelect = React.useCallback((dolphin: Dolphin | null) => {
    setSelectedDolphin(dolphin);
  }, []);

  return (
    <div className="min-h-screen bg-navy-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-neutral-900">Sea World Dolphin Experience</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LiveStream dolphins={dolphins} onDolphinSelect={handleDolphinSelect} />
          <DolphinList dolphins={dolphins} onDolphinSelect={handleDolphinSelect} />
        </div>
      </main>

      {selectedDolphin && (
        <DolphinModal
          dolphin={selectedDolphin}
          onClose={() => setSelectedDolphin(null)}
        />
      )}
    </div>
  );
}