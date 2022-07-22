import { useEffect, useState } from "react";
import useMobileObserver from "./useMobileObserver";
import useObserver from "./useObserver";

const useSectionObserver = () => {
  const isMobile = useMobileObserver();
  const [intersectedSection, setIntersectedSection] = useState("home");

  const [observer, setElements, entries] = useObserver({
    threshold: isMobile ? 0.2 : 0.65,
    root: null,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".flex-content");
    setElements(sections);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIntersectedSection(entry.target.classList[1]);
      }
    });
  }, [entries, observer]);

  return intersectedSection;
};

export default useSectionObserver;
