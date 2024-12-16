import { DolphinList } from './components/DolphinList';
import { LiveStream } from './components/LiveStream';
import { dolphins } from './data/dolphins';

export function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-900">Sea World Dolphin Experience</h1>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-500">Live</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LiveStream dolphins={dolphins} onDolphinSelect={() => {}} />
          <DolphinList dolphins={dolphins} onDolphinSelect={() => {}} />
        </div>
      </main>
    </div>
  );
}