"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import "./quote-box.css";

type AnimatedContainerType = {
  children: ReactNode[] | ReactNode;
  customClass?: string;
};

const AnimatedContainer: FC<AnimatedContainerType> = ({
  children,
  customClass,
}) => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowQuote(true);
      clearTimeout(timeout);
    }, 500);
  }, []);

  return (
    <div
      className={`quote-container ${customClass} ${
        showQuote ? "show-quote" : "hide-quote"
      } `}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
