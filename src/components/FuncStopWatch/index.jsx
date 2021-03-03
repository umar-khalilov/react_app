import React, { useState, useEffect } from 'react';

const StopWatch = props => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const tick = () => {
    const newTime = new Date(time.getTime());
    newTime.setSeconds(newTime.getSeconds() + 1);
    setTime(newTime);
  };

  const switchStopWatch = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(tick, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning, time]);

  const reset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <div>
      <h1>{time.toLocaleTimeString('it-IT')}</h1>
      <button onClick={switchStopWatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StopWatch;
