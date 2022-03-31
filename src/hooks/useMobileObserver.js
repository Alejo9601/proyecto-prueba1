import { useEffect, useState } from "react";

const useMobileObserver = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

export default useMobileObserver;
