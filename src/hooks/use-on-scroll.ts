import { useState, useEffect } from 'react'

export const useOnScroll = (margin = 200) => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const newShowFixed = window.scrollY > margin;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll, { passive: true });

    return () => document.removeEventListener("scroll", onScroll);
  });

  return { showFixed };
};

export default useOnScroll;
