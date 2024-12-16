"use client";

import "./header.scss";

import { FaPhoneAlt, FaWrench } from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { FC, useState } from "react";
import Link from "next/link";
import Title from "../title";
import DropdownList from "../DropdownList";

type Tabs = "home" | "repair" | "contact" | "forum" | "episodes";

const Header: FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("home");

  return (
    <div className="page-title-wrapper">
      <Link
        href={"./"}
        className="title-section"
        onClick={() => setSelectedTab("home")}
      >
        <div className="logo-container">
          <img className="rounded-full" src={"./Logo.jpg"}></img>
        </div>

        <Title />
      </Link>

      <div className="other-links-wrapper">
        <DropdownList
          link="episodes"
          isSelected={selectedTab === "episodes"}
          onClick={() => setSelectedTab("episodes")}
        >
          <div className="pb-1">
            <MdLiveTv size={25} />
          </div>
          <label className="title-text">Episodes</label>
        </DropdownList>

        <DropdownList
          link="forum"
          isSelected={selectedTab === "forum"}
          onClick={() => setSelectedTab("forum")}
          hidelist
        >
          <MdOutlineForum size={25} />{" "}
          <label className="title-text">Forum</label>
        </DropdownList>

        <DropdownList
          link="repair"
          isSelected={selectedTab === "repair"}
          onClick={() => setSelectedTab("repair")}
        >
          <div className="pb-1">
            <FaWrench />
          </div>
          <label className="title-text">Repair</label>
        </DropdownList>

        <DropdownList
          link="contact"
          isSelected={selectedTab === "contact"}
          onClick={() => setSelectedTab("contact")}
          hidelist
        >
          <div className="pb-1">
            <FaPhoneAlt />
          </div>
          <label className="title-text">Contact</label>
        </DropdownList>
      </div>
    </div>
  );
};

export default Header;
