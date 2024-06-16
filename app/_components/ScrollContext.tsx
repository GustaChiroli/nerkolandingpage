"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ScrollContextProps {
  isScrolled: boolean;
  isSecondSession: boolean;
  isThirdSession: boolean;
}

const ScrollContext = createContext<ScrollContextProps>({
  isScrolled: false,
  isSecondSession: false,
  isThirdSession: false,
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSecondSession, setIsSecondSession] = useState(false);
  const [isThirdSession, setIsThirdSession] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;
      const secondSessionElement = document.querySelector(
        "#second-session"
      ) as HTMLElement;
      const thirdSessionElement = document.querySelector(
        "#third-session"
      ) as HTMLElement;

      //define second session para mudar a cor do menu
      if (secondSessionElement) {
        const secondSessionTop = secondSessionElement.offsetTop;
        const secondSessionBottom = secondSessionTop + secondSessionElement.offsetHeight;
        if (offset > secondSessionTop - windowHeight / 2 && offset < secondSessionBottom - windowHeight / 2) {
          setIsSecondSession(true);
        } else {
          setIsSecondSession(false);
        }
      }
      if (thirdSessionElement) {
        const thirdSessionTop = thirdSessionElement.offsetTop;
        const thirdSessionBottom = thirdSessionTop + thirdSessionElement.offsetHeight;
        if (offset > thirdSessionTop - windowHeight / 2 && offset < thirdSessionBottom - windowHeight /2) {
          setIsThirdSession(true);
        } else {
          setIsThirdSession(false);
        }
      }

      //define que a tela foi descida para o navbar mudar de cor
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{ isScrolled, isSecondSession, isThirdSession }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
