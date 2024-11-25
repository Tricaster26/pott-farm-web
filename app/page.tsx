import "./app.css";

import AnimatedContainer from "./components/QuoteBox";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="main-page">
      <Header />

      <AnimatedContainer>
        <p className="quote-text">
          In the beginning was nothing at all, then nothingness plus infinity,
          statistically, made something! A flash dilated into time, now here we
          are! We were created and can never be destroyed!{" "}
          <label className="text-[#f5f5f5]">What joy!</label>
        </p>
      </AnimatedContainer>
    </div>
  );
};

export default Home;
