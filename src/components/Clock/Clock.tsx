import React, { useState, useEffect } from 'react';

const Clock = ({className,style}:{className?: string;
  style?: React.CSSProperties;}) => {
  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return <div className={className} style={style}>{currentTime}</div>;
};

export default Clock;
