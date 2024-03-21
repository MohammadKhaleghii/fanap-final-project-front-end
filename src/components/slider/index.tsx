import {FC} from "react";
import "swiper/css";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {HomeSliderProps} from "./slider.interface";

const Slider: FC<HomeSliderProps> = ({slides}) => {
  return (
    <Swiper pagination modules={[Pagination]} className="mySwiper">
      {slides.length > 0 &&
        slides.map((item) => (
          <SwiperSlide>
            <img className="rounded-lg" src={item.imagePath} alt={item.title} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
