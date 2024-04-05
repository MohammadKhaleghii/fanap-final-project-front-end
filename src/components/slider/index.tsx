import {FC} from "react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {SliderProps} from "./slider.interface";
import {useRouter} from "next/router";

const Slider: FC<SliderProps> = ({slides}) => {
  const router = useRouter();
  return (
    <Swiper pagination modules={[Pagination]} className="mySwiper">
      {Slider.length > 0 &&
        slides.map((item) => (
          <SwiperSlide
            key={item.desktop.id}
            className="lg:min-h-[300px] cursor-pointer "
            onClick={() => router.push("/search")}
          >
            <picture>
              <source
                srcSet={item.mobile.imagePath}
                media="(max-width: 360px)"
                className="w-full rounded-lg"
              />
              <source
                srcSet={item.desktop.imagePath}
                media="(min-width: 1024px)"
                className="w-full rounded-lg"
              />
              <img
                src={item.mobile.imagePath}
                alt={item.mobile.title}
                className="w-full rounded-lg"
              />
            </picture>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
