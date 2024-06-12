"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollContextProps {
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextProps>({ isScrolled: false });

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;
      const secondSessionElement = document.querySelector('#second-session') as HTMLElement;

      if (secondSessionElement) {
        const secondSessionTop = secondSessionElement.offsetTop;
        if (offset > secondSessionTop - windowHeight / 2) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);