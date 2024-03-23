import {FC} from "react";
import {HeadingProps} from "./heading.interface";

const Heading: FC<HeadingProps> = ({title, subTitle}) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#0B254B] text-center pb-1 ">
        {title}
      </h2>
      {subTitle && (
        <p className="text-[#5E6E89] text-sm text-center">{subTitle}</p>
      )}
    </>
  );
};

export default Heading;
