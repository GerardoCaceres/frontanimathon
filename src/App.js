import logo from './logo.svg';
import './App.css';
import React from 'react';
import useAnimate from './hooks/useAnimate';

const rotate = [
  { transform: "rotate(0)" },
  { transform: "rotate(360deg)" },
];

const timming = {
  duration: 3000,
  iterations: Infinity,
}

function App() {
  const { animate, ref, getAnimation, useAnimateObserver } = useAnimate({})
  useAnimateObserver({ keyframes: rotate, animationOptions: timming, autoPlay: true }, () => console.log('Viendo'), { threshold: 1.0 });

  // useEffect(() => {
  //   animate({ keyframes: rotate, animationOptions: timming, autoPlay: true })
  // }, [])

  const play = () => {
    getAnimation().play();
  }

  const pause = () => {
    getAnimation().pause();
  }

  return (
    <div className="App">
      <div className="space" />
      <header className="App-header">
        <img ref={ref} src={logo} className="App-logo" alt="logo" />
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
