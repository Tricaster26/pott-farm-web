"use client";

import "./dropdown.css";
import { FC, useState } from "react";

type DropdownListType = {
  title: string;
};

const DropdownList: FC<DropdownListType> = ({ title }) => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowAbout(true)}
      onMouseLeave={() => setShowAbout(false)}
    >
      <div className={`title-wrapper  ${showAbout && "title-selected"}`}>
        <label className={`title ${showAbout && "title-text-selected"}`}>
          {title}
        </label>
      </div>

      <div className={showAbout ? "reveal-list" : "hide-list"}>
        <div className="list-container">
          <div className="element-container">
            <label className="p-5">The Podcast</label>
          </div>
          <div className="element-container">
            <label className="p-5">The Podcast</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
