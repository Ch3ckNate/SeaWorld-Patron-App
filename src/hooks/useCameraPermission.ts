import { useState, useCallback, useEffect } from 'react';

export function useCameraPermission() {
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkPermission = useCallback(async () => {
    try {
      const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
      setHasPermission(result.state === 'granted');
      return result.state === 'granted';
    } catch (error) {
      // Some browsers don't support permission query for camera
      return false;
    }
  }, []);

  const requestPermission = useCallback(async () => {
    try {
      setError(null);
      
      // First check if the browser supports getUserMedia
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera access is not supported by this browser');
      }

      const constraints = {
        video: {
          facingMode: 'environment', // Prefer rear camera on mobile
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      // Stop all tracks immediately to release the camera
      stream.getTracks().forEach(track => track.stop());
      
      setHasPermission(true);
      return true;
    } catch (error) {
      let message = 'Could not access camera';
      
      if (error instanceof Error) {
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          message = 'Camera permission was denied';
        } else if (error.name === 'NotFoundError') {
          message = 'No camera device was found';
        } else if (error.name === 'NotReadableError') {
          message = 'Camera is already in use by another application';
        }
      }
      
      setError(message);
      setHasPermission(false);
      return false;
    }
  }, []);

  // Check permission on mount
  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return { hasPermission, requestPermission, error };
}