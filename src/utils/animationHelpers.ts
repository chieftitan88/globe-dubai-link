import { Variants } from 'framer-motion';

// Animation Duration Standards
export const ANIMATION_DURATIONS = {
  micro: 150,      // Micro-interactions
  quick: 250,      // Quick feedback
  standard: 400,   // Standard transitions
  slow: 600,       // Complex animations
  storytelling: 1000 // Narrative animations
} as const;

// Easing Functions - Fixed for Framer Motion compatibility
export const EASING = {
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeInOut: [0.645, 0.045, 0.355, 1],
  spring: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.25, 0.1, 0.25, 1]
} as const;

// Country-specific color palettes
export const COUNTRY_THEMES = {
  philippines: {
    primary: '#0074D9',
    secondary: '#2ECC40',
    accent: '#FFD700',
    particles: ['#0074D9', '#2ECC40', '#FFD700']
  },
  usa: {
    primary: '#B22234',
    secondary: '#3C3B6E',
    accent: '#FFFFFF',
    particles: ['#B22234', '#3C3B6E', '#FFFFFF']
  },
  uae: {
    primary: '#C9A961',
    secondary: '#8B4513',
    accent: '#FF6B35',
    particles: ['#C9A961', '#8B4513', '#FF6B35']
  }
} as const;

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get optimized animation duration based on user preferences
export const getAnimationDuration = (baseDuration: number): number => {
  return prefersReducedMotion() ? 0 : baseDuration;
};

// Enhanced card hover variants
export const cardHoverVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  hover: {
    scale: 1.02,
    y: -8,
    rotateX: 2,
    rotateY: 1,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 15px 20px -8px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: getAnimationDuration(ANIMATION_DURATIONS.standard) / 1000,
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: getAnimationDuration(ANIMATION_DURATIONS.micro) / 1000,
      ease: "easeOut"
    }
  }
};

// Breathing animation for cards
export const breathingVariants: Variants = {
  breathe: {
    scale: [1, 1.005, 1],
    transition: {
      duration: getAnimationDuration(4000) / 1000,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Flag animation variants
export const flagVariants: Variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: [0, -1, 1, 0],
    transition: {
      scale: {
        duration: getAnimationDuration(ANIMATION_DURATIONS.quick) / 1000,
        ease: "easeOut"
      },
      rotate: {
        duration: getAnimationDuration(600) / 1000,
        ease: "easeInOut",
        repeat: 2
      }
    }
  }
};

// Background gradient variants
export const backgroundGradientVariants: Variants = {
  initial: {
    opacity: 0.06,
    scale: 1,
  },
  hover: {
    opacity: 0.15,
    scale: 1.05,
    transition: {
      duration: getAnimationDuration(ANIMATION_DURATIONS.standard) / 1000,
      ease: "easeOut"
    }
  }
};

// Particle animation generator - Simplified for stability
export const generateParticleAnimation = (index: number, countryId: string) => {
  const theme = COUNTRY_THEMES[countryId as keyof typeof COUNTRY_THEMES];
  const colors = theme?.particles || ['#dc2626', '#b91c1c', '#991b1b'];
  
  return {
    x: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
    y: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
    scale: [0.8, 1.4, 1.1, 0.8],
    opacity: [0.4, 0.8, 0.6, 0.4],
    backgroundColor: colors[index % colors.length],
    transition: {
      duration: getAnimationDuration(8000 + Math.random() * 4000) / 1000,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.5,
    }
  };
};

// Stagger animation for card entrance
export const staggerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: getAnimationDuration(ANIMATION_DURATIONS.slow) / 1000,
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  })
};

// Selection ring animation
export const selectionRingVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    rotate: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      scale: {
        duration: getAnimationDuration(ANIMATION_DURATIONS.standard) / 1000,
        type: "spring",
        stiffness: 300,
        damping: 30
      },
      opacity: {
        duration: getAnimationDuration(ANIMATION_DURATIONS.quick) / 1000,
        ease: "easeOut"
      },
      rotate: {
        duration: getAnimationDuration(1200) / 1000,
        ease: "easeInOut"
      }
    }
  }
};

// Performance monitoring utility - Fixed to prevent timer conflicts
const activeTimers = new Set<string>();

export const withPerformanceMonitoring = (animationName: string) => {
  return {
    onAnimationStart: () => {
      if (process.env.NODE_ENV === 'development') {
        const timerName = `Animation: ${animationName}`;
        if (!activeTimers.has(timerName)) {
          activeTimers.add(timerName);
          console.time(timerName);
        }
      }
    },
    onAnimationComplete: () => {
      if (process.env.NODE_ENV === 'development') {
        const timerName = `Animation: ${animationName}`;
        if (activeTimers.has(timerName)) {
          activeTimers.delete(timerName);
          console.timeEnd(timerName);
        }
      }
    }
  };
};

// Anticipatory hover detection
export const createAnticipationDetector = (element: HTMLElement, callback: (isNear: boolean) => void) => {
  let isDetecting = false;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const distance = Math.sqrt(
      Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
      Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
    );
    
    const threshold = 100; // pixels
    const isNear = distance < threshold;
    
    if (isNear && !isDetecting) {
      isDetecting = true;
      callback(true);
    } else if (!isNear && isDetecting) {
      isDetecting = false;
      callback(false);
    }
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
};

// Device capability detection
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return { supportsAdvancedAnimations: false, isLowEndDevice: true };
  }
  
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  const hasWebGL = !!gl;
  
  // Simple performance heuristic
  const isLowEndDevice = navigator.hardwareConcurrency < 4 || 
                        !hasWebGL || 
                        window.devicePixelRatio < 2;
  
  return {
    supportsAdvancedAnimations: !isLowEndDevice && !prefersReducedMotion(),
    isLowEndDevice,
    hasWebGL
  };
};

// Memory-efficient animation cleanup
export const createAnimationCleanup = () => {
  const cleanupFunctions: (() => void)[] = [];
  
  const addCleanup = (fn: () => void) => {
    cleanupFunctions.push(fn);
  };
  
  const cleanup = () => {
    cleanupFunctions.forEach(fn => fn());
    cleanupFunctions.length = 0;
  };
  
  return { addCleanup, cleanup };
};

// Create rate limiter with proper typing
export const createRateLimiter = (windowMs: number) => {
  let lastCall = 0;
  
  return () => {
    const now = Date.now();
    if (now - lastCall < windowMs) {
      return false;
    }
    lastCall = now;
    return true;
  };
}; 