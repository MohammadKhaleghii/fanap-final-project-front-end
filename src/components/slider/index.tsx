import {FC} from "react";
import "swiper/css";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {SliderProps} from "./slider.interface";

const Slider: FC<SliderProps> = ({slides}) => {
  return (
    <Swiper pagination modules={[Pagination]} className="mySwiper">
      {slides.length > 0 &&
        slides.map((item) => (
          <SwiperSlide key={item.id} className="min-h-[300px]">
            <img className="rounded-lg" src={item.imagePath} alt={item.title} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
