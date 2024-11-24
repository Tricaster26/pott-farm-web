"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import "./quote-box.css";

type QuoteBoxType = {
  children: ReactNode[] | ReactNode;
};

const QuoteBox: FC<QuoteBoxType> = ({ children }) => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowQuote(true);
      clearTimeout(timeout);
    }, 500);
  }, []);
  return (
    <div
      className={`quote-container ${showQuote ? "show-quote" : "hide-quote"}`}
    >
      {children}
    </div>
  );
};

export default QuoteBox;
