import Header from "../components/Header";
import AnimatedContainer from "../components/QuoteBox";
import "./about.css";

const Forum = () => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <AnimatedContainer customClass="animated-class">
        <h2 className="text-[100px]">Forum</h2>
      </AnimatedContainer>
    </div>
  );
};

export default Forum;
