import { createContext, useEffect, useState } from "react";
import useMobileObserver from "../hooks/useMobileObserver";
import useObserver from "../hooks/useObserver";

const SectionContext = createContext();

const CurrentSectionProvider = ({ children }) => {
  const isMobile = useMobileObserver();
  const [activeSection, setActiveSection] = useState("home");

  const [observer, setElements, entries] = useObserver({
    threshold: isMobile ? 0.2 : [0.65],
    root: null,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".flex-content");
    const home = document.querySelectorAll(".home");
    setElements(Array.from(sections).concat(Array.from(home)));
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const home = entry.target.classList[0];
        setActiveSection(home === "home" ? home : entry.target.classList[1]);
      }
    });
  }, [entries, observer]);

  return (
    <SectionContext.Provider value={activeSection}>
      {children}
    </SectionContext.Provider>
  );
};

export { CurrentSectionProvider as CurrSectionProv };
export default SectionContext;
