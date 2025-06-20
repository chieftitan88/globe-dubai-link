
// Security utilities for URL validation and anti-hijacking protection

interface ValidatedURL {
  isValid: boolean;
  url?: string;
  error?: string;
}

// Whitelist of allowed external domains
const ALLOWED_DOMAINS = [
  'maximum88.us',
  'www.maximum88.us',
  'lovable.dev'
];

// Validate external URLs to prevent hijacking
export const validateExternalURL = (url: string): ValidatedURL => {
  try {
    const urlObj = new URL(url);
    
    // Check if domain is in whitelist
    const isAllowedDomain = ALLOWED_DOMAINS.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
    );
    
    if (!isAllowedDomain) {
      return {
        isValid: false,
        error: 'Domain not allowed'
      };
    }
    
    // Only allow HTTPS for external URLs
    if (urlObj.protocol !== 'https:') {
      return {
        isValid: false,
        error: 'Only HTTPS URLs are allowed'
      };
    }
    
    return {
      isValid: true,
      url: url
    };
  } catch (error) {
    return {
      isValid: false,
      error: 'Invalid URL format'
    };
  }
};

// Sanitize user input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Anti-defacing protection - detect suspicious activity
export const detectSuspiciousActivity = (input: string): boolean => {
  const suspiciousPatterns = [
    /<script/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /onload=/gi,
    /onerror=/gi,
    /onclick=/gi,
    /data:text\/html/gi,
    /eval\(/gi,
    /expression\(/gi
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(input));
};

// Rate limiting helper
export const createRateLimiter = (maxRequests: number, windowMs: number) => {
  const requests = new Map<string, number[]>();
  
  return (identifier: string): boolean => {
    const now = Date.now();
    const userRequests = requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false; // Rate limit exceeded
    }
    
    validRequests.push(now);
    requests.set(identifier, validRequests);
    return true;
  };
};

// Content integrity check - SECURE VERSION
export const verifyContentIntegrity = (): boolean => {
  // Check if critical DOM elements exist
  const root = document.getElementById('root');
  const title = document.title;
  
  // Use safer DOM inspection methods instead of innerHTML
  const hasScriptTags = document.getElementsByTagName('script').length > 0;
  const bodyTextContent = document.body.textContent || '';
  
  return (
    root !== null &&
    title.includes('Maximum88') &&
    // Use textContent instead of innerHTML to avoid security issues
    !bodyTextContent.includes('javascript:') &&
    // Allow legitimate script tags but check for suspicious content
    !Array.from(document.getElementsByTagName('script')).some(script => 
      script.textContent?.includes('eval(') || 
      script.textContent?.includes('document.write')
    )
  );
};
