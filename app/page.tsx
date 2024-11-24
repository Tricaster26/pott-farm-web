import "./app.css";
import DropdownList from "./components/DropdownList";
import Title from "./components/title";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import QuoteBox from "./components/QuoteBox";

const Home = () => {
  return (
    <div className="main-page">
      <div className="page-title-wrapper">
        <div className="title-section">
          <div className="logo-container">
            <img className="rounded-full" src={"./Logo.jpg"}></img>
          </div>

          <Title />
        </div>

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

      <QuoteBox>
        <p className="quote-text">
          In the beginning was nothing at all, then nothingness plus infinity,
          statistically, made something! A flash dilated into time, now here we
          are! We were created and can never be destroyed!{" "}
          <label className="text-[#f5f5f5]">What joy!</label>
        </p>
      </QuoteBox>
    </div>
  );
};

export default Home;
