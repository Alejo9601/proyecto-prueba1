import { useEffect, useState } from "react";

const isMobileScreen = () => {
  return window.innerWidth < 1024 ? true : false;
};

const useMobileObserver = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen);
  useEffect(() => {
    const handleResize = () => {
      isMobileScreen() ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

export default useMobileObserver;
