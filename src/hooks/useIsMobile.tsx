import { useState, useEffect } from "react";

const useIsMobile = (): boolean => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};
export default useIsMobile;
