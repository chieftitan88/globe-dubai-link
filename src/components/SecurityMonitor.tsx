
import { useEffect } from 'react';
import { verifyContentIntegrity, detectSuspiciousActivity } from '@/utils/security';

const SecurityMonitor = () => {
  useEffect(() => {
    // Monitor for content integrity
    const checkIntegrity = () => {
      if (!verifyContentIntegrity()) {
        console.warn('Content integrity check failed - possible tampering detected');
        // In a real application, you might want to report this to your security service
      }
    };

    // Check integrity on load and periodically
    checkIntegrity();
    const integrityInterval = setInterval(checkIntegrity, 30000); // Check every 30 seconds

    // Monitor for suspicious DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              const content = element.textContent || '';
              
              if (detectSuspiciousActivity(content)) {
                console.warn('Suspicious content detected:', content);
                // Remove suspicious content
                element.remove();
              }
            }
          });
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      clearInterval(integrityInterval);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityMonitor;
