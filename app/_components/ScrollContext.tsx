"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollContextProps {
  isScrolled: boolean;
  isSecondSession: boolean;
}

const ScrollContext = createContext<ScrollContextProps>({ isScrolled: false, isSecondSession: false});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSecondSession, setIsSecondSession] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;
      const secondSessionElement = document.querySelector('#second-session') as HTMLElement;

      if (secondSessionElement) {
        const secondSessionTop = secondSessionElement.offsetTop;
        if (offset > secondSessionTop - windowHeight / 2) {
          setIsSecondSession(true);
        } else {
          setIsSecondSession(false);
        }
      }

      if ( offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled, isSecondSession }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);