"use client";

import Link from "next/link";
import "./dropdown.scss";
import { FC, MouseEventHandler, ReactNode, useState } from "react";

type DropdownListType = {
  children: ReactNode[] | ReactNode;
  link?: string;
  hidelist?: boolean;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

const DropdownList: FC<DropdownListType> = ({
  children,
  link,
  hidelist,
  isSelected,
  onClick,
}) => {
  const [showAbout, setShowAbout] = useState(false);
  const showColor = showAbout || isSelected;
  return (
    <Link href={`/${link}`} onClick={onClick}>
      <div
        onMouseEnter={() => setShowAbout(true)}
        onMouseLeave={() => setShowAbout(false)}
      >
        <div className={`title-wrapper  ${showColor && "title-selected"}`}>
          <div className={`title ${showColor && "title-text-selected"}`}>
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
