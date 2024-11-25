"use client";

import "./header.scss";

import DropdownList from "./DropdownList";
import Title from "./title";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <div className="page-title-wrapper">
      <Link href={"./"} className="title-section">
        <div className="logo-container">
          <img className="rounded-full" src={"./Logo.jpg"}></img>
        </div>

        <Title />
      </Link>

      <div className="other-links-wrapper">
        <DropdownList link="about">
          <div className="pb-1">
            <BsInfoCircle />
          </div>
          <label className="title-text">About</label>
        </DropdownList>

        <DropdownList link="forum" hidelist>
          <MdOutlineForum size={25} />{" "}
          <label className="title-text">Forum</label>
        </DropdownList>

        <DropdownList link="episodes">
          <div className="pb-1">
            <MdLiveTv size={25} />
          </div>
          <label className="title-text">Episodes</label>
        </DropdownList>

        <DropdownList link="contact" hidelist>
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
