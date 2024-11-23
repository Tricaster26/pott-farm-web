import "./app.css";
import DropdownList from "./components/DropdownList";
import Title from "./components/title";
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
