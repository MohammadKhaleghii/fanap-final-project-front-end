import {FC} from "react";
import {HeadingProps} from "./heading.interface";

const Heading: FC<HeadingProps> = ({title, subTitle}) => {
  return (
    <>
      <h2 className="text-[40px] text-[#0B254B] text-center pb-4">{title}</h2>
      {subTitle && (
        <p className="text-[#5E6E89] text-lg text-center">{subTitle}</p>
      )}
    </>
  );
};

export default Heading;
