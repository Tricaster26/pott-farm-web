"use client";
import "./title.css";
import { FC, useState } from "react";

const Title: FC = () => {
  const [titleEntered, setTitleEntered] = useState(false);
  return (
    <span
      className="page-title"
      onMouseEnter={() => setTitleEntered(true)}
      onMouseLeave={() => setTitleEntered(false)}
    >
      <label className={titleEntered ? "style-a" : "style-b"}>Pott</label>{" "}
      <label className={titleEntered ? "style-b" : "style-a"}>Farm</label>
    </span>
  );
};

export default Title;
