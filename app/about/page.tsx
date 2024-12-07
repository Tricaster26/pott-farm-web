import AnimatedContainer from "../components/QuoteBox";
import "./about.css";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <AnimatedContainer customClass="animated-class">
        <h2 className="text-[100px]">About</h2>
      </AnimatedContainer>
    </div>
  );
};

export default About;
