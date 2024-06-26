import {FC} from "react";
import {TestimonialProps} from "./testimonial-card.interface";
import RatingStar from "@/components/rating-star";

const TestimonialCard: FC<TestimonialProps> = ({
  description,
  imagePath,
  rate,
  writer,
}) => {
  const ratingStars = [1, 2, 3, 4, 5];
  return (
    <div className="bg-white flex-col gap-y-5  flex items-center justify-center w-full rounded-lg  p-4 shadow-xl transition delay-150 ease-out hover:-translate-y-2 hover:shadow-2xl duration-150">
      <img
        src={imagePath}
        className="rounded-[50%] w-[84px] h-[84px]"
        alt={description}
      />
      <div className="flex flex-row">
        {ratingStars.map((_, index) => (
          <RatingStar key={index} index={index} rating={rate} />
        ))}
      </div>
      <div className="text-xl font-bold">{description}</div>
      <p className="text-center">{writer}</p>
    </div>
  );
};
export default TestimonialCard;
