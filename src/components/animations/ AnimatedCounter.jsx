import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ target, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(target - 100);

  useEffect(() => {
    const startTime = Date.now();
    const startCount = target - 100;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (target - startCount) * easeOutCubic);
      
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className={className}>
      {count.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;