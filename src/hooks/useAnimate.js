import { useCallback, useEffect, useRef } from "react";

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

export default useAnimate;
