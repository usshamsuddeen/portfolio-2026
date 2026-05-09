import { useEffect } from 'react';

export function useReveal(dependency?: any) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '200px 0px 200px 0px' }
    );

    // Run multiple checks to catch elements after Framer Motion transitions
    const check = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    };

    const timers = [
      setTimeout(check, 50),
      setTimeout(check, 300),
      setTimeout(check, 600)
    ];

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [dependency]);
}
