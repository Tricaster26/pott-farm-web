"use client";
import "./title.scss";
import { FC, useState } from "react";

const Title: FC = () => {
  const [titleEntered, setTitleEntered] = useState(false);
  return (
    <span
      className="page-title"
      onMouseEnter={() => setTitleEntered(true)}
      onMouseLeave={() => setTitleEntered(false)}
    >
      <label className={titleEntered ? "style-a" : "style-b"}>
        <label className="extra-title">Pott</label>
      </label>{" "}
      <label className={titleEntered ? "style-b" : "style-a"}>
        <label className="extra-title">Farm</label>
      </label>
    </span>
  );
};

export default Title;
