import { useState, useEffect } from 'react';

export const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(target - 100);

  useEffect(() => {
    const startTime = Date.now();
    const startCount = target - 100;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (target - startCount) * easeOutCubic);
      
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};