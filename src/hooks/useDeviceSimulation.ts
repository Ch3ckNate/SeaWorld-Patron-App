import { useState, useEffect, useCallback } from 'react';
import { Dolphin } from '../types/Dolphin';

interface DeviceState {
  activeButton: number | null;
  activeDolphin: Dolphin | null;
  lastInteraction: Date | null;
  buttonPressCount: number;
}

export function useDeviceSimulation(dolphins: Dolphin[]) {
  const [deviceState, setDeviceState] = useState<DeviceState>({
    activeButton: null,
    activeDolphin: null,
    lastInteraction: null,
    buttonPressCount: 0,
  });

  const updateButton = useCallback(() => {
    setDeviceState(prev => ({
      ...prev,
      activeButton: Math.floor(Math.random() * 4) + 1,
      lastInteraction: new Date(),
      buttonPressCount: prev.buttonPressCount + 1,
    }));
  }, []);

  const updateDolphin = useCallback(() => {
    setDeviceState(prev => {
      const shouldHaveDolphin = Math.random() > 0.3;
      return {
        ...prev,
        activeDolphin: shouldHaveDolphin 
          ? dolphins[Math.floor(Math.random() * dolphins.length)]
          : null,
      };
    });
  }, [dolphins]);

  useEffect(() => {
    const buttonInterval = setInterval(updateButton, 5000);
    const dolphinInterval = setInterval(updateDolphin, 15000);

    return () => {
      clearInterval(buttonInterval);
      clearInterval(dolphinInterval);
    };
  }, [updateButton, updateDolphin]);

  return deviceState;
}