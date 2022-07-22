import { useEffect, useState } from "react";
import useObserver from "./useObserver";

const useACtiveSection = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const [observer, setElements, entries] = useObserver({
    rootMargin: "-150px",
    root: null,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".section-title");
    const home = document.querySelector(".image-container");
    setElements(Array.from(sections).concat(home));
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList[0] === "image-container") {
          setActiveSection("Home");
          return;
        }
        setActiveSection(entry.target.firstChild.data);
      }
    });
  }, [entries, observer]);

  return activeSection;
};

export default useACtiveSection;
