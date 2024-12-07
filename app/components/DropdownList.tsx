"use client";

import Link from "next/link";
import "./dropdown.scss";
import { FC, ReactNode, useState } from "react";

type DropdownListType = {
  children: ReactNode[] | ReactNode;
  link?: string;
  hidelist?: boolean;
};

const DropdownList: FC<DropdownListType> = ({ children, link, hidelist }) => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <Link href={`/${link}`}>
      <div
        onMouseEnter={() => setShowAbout(true)}
        onMouseLeave={() => setShowAbout(false)}
      >
        <div className={`title-wrapper  ${showAbout && "title-selected"}`}>
          <div className={`title ${showAbout && "title-text-selected"}`}>
            {children}
          </div>
        </div>
        {!hidelist && (
          <div className={showAbout ? "reveal-list" : "hide-list"}>
            <div className="list-container">
              <div className="element-container">
                <label className="p-5 element-text">A</label>
              </div>
              <div className="element-container">
                <label className="p-5 element-text">B</label>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default DropdownList;
