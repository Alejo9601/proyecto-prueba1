import { createContext, useState } from "react";
import useObserver from "../hooks/useObserver";

const ObserverContext = createContext();

const ObserverProvider = ({ children }) => {
  const data = useObserver({
    threshold: 0.3,
    root: null,
  });

  return (
    <ObserverContext.Provider value={data}>{children}</ObserverContext.Provider>
  );
};

export { ObserverProvider };
export default ObserverContext;
