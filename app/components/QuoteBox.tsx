"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import "./quote-box.css";
import "../app.css";

type AnimatedContainerType = {
  children: ReactNode[] | ReactNode;
  animateProperty?: "width" | "height";
  customClass?: string;
};

const AnimatedContainer: FC<AnimatedContainerType> = ({
  children,
  customClass,
  animateProperty = "height",
}) => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowQuote(true);
      clearTimeout(timeout);
    }, 50);
  }, []);

  return (
    <div
      className={`quote-container ${customClass} ${
        showQuote ? `show-${animateProperty}` : `hide-${animateProperty}`
      } `}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
