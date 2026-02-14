'use client';

import { useEffect } from 'react';

export default function ChunkErrorHandler() {
  useEffect(() => {
    // Handle chunk load errors globally
    const handleError = (event: ErrorEvent) => {
      const error = event.error;
      
      // Check if it's a ChunkLoadError
      if (
        error?.name === 'ChunkLoadError' ||
        (error?.message && error.message.includes('Loading chunk')) ||
        (event.message && event.message.includes('Loading chunk'))
      ) {
        console.error('ChunkLoadError detected:', error || event.message);
        
        // Prevent infinite reload loops
        const lastReload = sessionStorage.getItem('lastChunkErrorReload');
        const now = Date.now();
        
        // Only reload if it hasn't been reloaded in the last 10 seconds
        if (!lastReload || now - parseInt(lastReload) > 10000) {
          sessionStorage.setItem('lastChunkErrorReload', now.toString());
          console.log('Reloading page due to ChunkLoadError...');
          window.location.reload();
        } else {
          console.error('Multiple ChunkLoadErrors detected, not reloading to prevent loop');
        }
      }
    };

    // Handle promise rejections (for dynamic imports)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      
      if (
        reason?.name === 'ChunkLoadError' ||
        (reason?.message && reason.message.includes('Loading chunk')) ||
        (typeof reason === 'string' && reason.includes('Loading chunk'))
      ) {
        console.error('ChunkLoadError in promise:', reason);
        
        // Prevent infinite reload loops
        const lastReload = sessionStorage.getItem('lastChunkErrorReload');
        const now = Date.now();
        
        // Only reload if it hasn't been reloaded in the last 10 seconds
        if (!lastReload || now - parseInt(lastReload) > 10000) {
          sessionStorage.setItem('lastChunkErrorReload', now.toString());
          console.log('Reloading page due to ChunkLoadError in promise...');
          window.location.reload();
        } else {
          console.error('Multiple ChunkLoadErrors detected, not reloading to prevent loop');
        }
      }
    };

    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}
