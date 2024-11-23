import "./app.css";

export default function Home() {
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
          <label>About</label>
          <label>Contact</label>
          <label>Episodes</label>
          <label>Forum</label>
        </div>
      </div>

      <div className="quote-container">
        <p className="quote-text">
          In the beginning was nothing at all, then nothingness plus infinity,
          statistically, made something! A flash dilated into time, now here we
          are! We were created and can never be destroyed! What joy!
        </p>
      </div>
    </div>
  );
}
