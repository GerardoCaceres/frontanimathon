/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';

const Animate = ({
  children,
  className = "",
  classIn,
  delay = '0.1s',
  duration = '1s',
  threshold = 0.5 }) => {

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add(classIn);
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return <div className={`invisible animate__animated ${className}`} style={{ animationDelay: delay, animationDuration: duration }} ref={ref}>{children}</div>;
};

export default Animate;
