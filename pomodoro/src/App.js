import React,  {useEffect, useState } from "react";

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);
  const [timer, setTimer] = useState();

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  const stop = () => {
      
    };
  
  const reset = () => {
      
    };


  useEffect(() => {
    if (secondsLeft === 0) {
    clearInterval(timer);
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <div>{secondsLeft} seconds left</div>
    </div>
  );
}
