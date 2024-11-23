import "./app.css";
import DropdownList from "./components/DropdownList";
const Home = () => {
  return (
    <div className="main-page">
      <div className="page-title-wrapper">
        <div className="title-section">
          <div className="logo-container">
            <img className="rounded-full" src={"./Logo.jpg"}></img>
          </div>
          <span className="page-title">
            <label className="text-[#ffffff]">Pott</label>{" "}
            <label className="text-[#535252]">Farm</label>
          </span>
        </div>

        <div className="other-links-wrapper">
          <DropdownList title="About" />
          <DropdownList title="Forum" />
          <DropdownList title="Episodes" />
          <DropdownList title="Contact" />
        </div>
      </div>

      <div className="quote-container">
        <p className="quote-text">
          In the beginning was nothing at all, then nothingness plus infinity,
          statistically, made something! A flash dilated into time, now here we
          are! We were created and can never be destroyed!{" "}
          <label className="text-[#f5f5f5]">What joy!</label>
        </p>
      </div>
    </div>
  );
};

export default Home;
