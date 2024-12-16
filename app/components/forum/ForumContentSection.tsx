import { FC } from "react";
import AnimatedContainer from "../QuoteBox";
import "./forum-content.scss";

const ForumContentSection: FC = () => {
  return (
    <div className="w-full p-16 flex flex-col gap-[20px]">
      <AnimatedContainer customClass="forum-animated" animateProperty="width">
        <div className="bg-[#334155dd] w-full rounded-lg px-5 py-2 pt-3 border-2">
          <label className="newsreader text-[42px] text-slate-50">
            Welcome to the Forest
          </label>
        </div>

        <div className="w-full h-40 bg-[#484848DD] rounded-lg px-5 py-2 pt-3 border-2 border-[#000000]">
          <div></div>
        </div>
      </AnimatedContainer>
    </div>
  );
};

export default ForumContentSection;
