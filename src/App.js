import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';

const rotate = [
  { transform: "rotate(0)" },
  { transform: "rotate(360deg)" },
];

const timming = {
  duration: 3000,
  iterations: Infinity,
}

function useAnimate({ refOpt }) {
  const animRef = useRef()
  const refVar = useRef(null);
  const ref = refOpt || refVar

  const getAnimation = useCallback(() => animRef.current, []);

  const animate = useCallback(({ keyframes, animationOptions, autoPlay }) => {
    if (!ref.current || !keyframes) return
    animRef.current = ref.current.animate(keyframes, animationOptions)
    const { current: anim } = animRef;

    if (!autoPlay) anim.pause()
  }, [ref])

  const useAnimateObserver = (options, callback, observerOptions) => {
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animate(options)
          callback();
        }
      }, observerOptions)

      if (ref.current) observer.observe(ref.current)

      return () => {
        // getAnimation().cancel();
        observer.disconnect()
      }
    }, [options, callback, observerOptions])
  }
  return { animate, ref, getAnimation, useAnimateObserver }
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
