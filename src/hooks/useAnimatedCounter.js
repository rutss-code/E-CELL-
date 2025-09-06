import { useState, useEffect, useRef } from 'react';

const useAnimatedCounter = (endValue, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Parse end value from string (e.g., "100+" -> 100)
  const parseEndValue = (value) => {
    if (typeof value === 'string') {
      return parseInt(value?.replace(/[^\d]/g, ''));
    }
    return value;
  };

  const numericEndValue = parseEndValue(endValue);

  // Intersection Observer to detect when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (elementRef?.current) {
      observer?.observe(elementRef?.current);
    }

    return () => {
      if (elementRef?.current) {
        observer?.unobserve(elementRef?.current);
      }
    };
  }, [hasAnimated]);

  // Animation logic
  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * numericEndValue);
      
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericEndValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, numericEndValue, duration]);

  // Format the display value
  const displayValue = count + suffix;

  return { displayValue, elementRef };
};

export default useAnimatedCounter;