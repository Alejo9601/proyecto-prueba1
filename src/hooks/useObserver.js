import { useEffect, useRef, useState } from "react";

export default function useObserver(options) {
  /*Array of elements to observe */
  const [elements, setElements] = useState([]);
  /*Entries the observer has observed*/
  const [entries, setEntries] = useState([]);

  /*Unique instance of observer, usingRef to prevent loops*/
  const observer = useRef(
    new IntersectionObserver(function (observedEntries) {
      console.log(observedEntries);
      setEntries(observedEntries);
    }, options)
  );

  /*Will be executed when the elements array changes
    this means there are new elements to observe
  */
  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();
    if (elements.length > 0) {
      elements.forEach((element) => {
        currentObserver.observe(element);
      });
    }
    return function cleanUp() {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  /*We return the unique intance of observer
    We return the setElements function, wich will introduce new elements to be heard
    And finally the entries, so the component using the hook can access the elements detected 
  */
  // console.log(observer.current);
  return [observer.current, setElements, entries];
}
