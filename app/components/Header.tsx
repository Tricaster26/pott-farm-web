"use-client";

import "./header.css";

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
        <DropdownList>
          <div className="pb-1">
            <BsInfoCircle />
          </div>
          About
        </DropdownList>

        <DropdownList>
          <MdOutlineForum size={25} /> Forum
        </DropdownList>

        <DropdownList>
          <div className="pb-1">
            <MdLiveTv size={25} />
          </div>
          Episodes
        </DropdownList>

        <DropdownList>
          <div className="pb-1">
            <FaPhoneAlt />
          </div>
          Contact
        </DropdownList>
      </div>
    </div>
  );
};

export default Header;
