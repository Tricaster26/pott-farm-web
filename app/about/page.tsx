import Header from "../components/Header";
import AnimatedContainer from "../components/QuoteBox";
import "./about.css";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <AnimatedContainer customClass="animated-class">
        <h2 className="text-[100px]">About</h2>
      </AnimatedContainer>
    </div>
  );
};

export default About;
