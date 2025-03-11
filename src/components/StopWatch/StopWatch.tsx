import React, { useState, useEffect, useRef } from 'react';

const Stopwatch= ({className,style}:{className?: string;
  style?: React.CSSProperties;}) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 
  let intervalId=useRef<NodeJS.Timeout |null>(null)

  // Function to start the stopwatch
  const startStopwatch = () => {
    if (isRunning) return; 

    const id = setInterval(() => {
      setTime(prev=>prev+1);
    }, 1000);

    setIsRunning(true);
    intervalId.current=id
  };

  // Function to stop the stopwatch
  const stopStopwatch = () => {
    if (!isRunning) return; 

    if (intervalId.current) {
      clearInterval(intervalId.current); 
    }
    setIsRunning(false); 
  };

  // Function to reset the stopwatch
  const resetStopwatch = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current); 
    }
    setIsRunning(false); 
    setTime(0); 
  };

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current); 
      }
    };
  }, []);

  // Format time in HH:MM:SS format
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className={className} style={style}>
      <h1>Stopwatch</h1>
      <div>{formatTime(time)}</div> 
      <div>
        <button onClick={startStopwatch} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopStopwatch} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
