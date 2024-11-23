"use client";

import "./dropdown.css";
import { FC, ReactNode, useState } from "react";

type DropdownListType = {
  children: ReactNode[] | ReactNode;
};

const DropdownList: FC<DropdownListType> = ({ children }) => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowAbout(true)}
      onMouseLeave={() => setShowAbout(false)}
    >
      <div className={`title-wrapper  ${showAbout && "title-selected"}`}>
        <label className={`title ${showAbout && "title-text-selected"}`}>
          {children}
        </label>
      </div>

      <div className={showAbout ? "reveal-list" : "hide-list"}>
        <div className="list-container">
          <div className="element-container">
            <label className="p-5 element-text">The Podcast</label>
          </div>
          <div className="element-container">
            <label className="p-5 element-text">The Podcast</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
