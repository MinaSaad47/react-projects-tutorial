import { createContext, useEffect, useState } from "react";

const NavigatorContext = createContext();

function NavigatorProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigatorContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigatorContext.Provider>
  );
}

export { NavigatorProvider };
export default NavigatorContext;
