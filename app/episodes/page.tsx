import Header from "../components/Header";
import AnimatedContainer from "../components/QuoteBox";
import "./about.css";

const Episodes = () => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <AnimatedContainer customClass="animated-class">
        <h2 className="text-[100px]">Episodes</h2>
      </AnimatedContainer>
    </div>
  );
};

export default Episodes;
