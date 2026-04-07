import image from "../assets/carusel/image.png";
import image1 from "../assets/carusel/image1.png";
import image2 from "../assets/carusel/image2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useRef } from "react";

const images: string[] = [image, image1, image2];

const Carusel = () => {
  // Типизированный ref для Swiper
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false} // выключаем встроенные стрелки, будем свои кастомные
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: SwiperClass) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        loop={true} // бесконечный слайд
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        className="relative"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-[250px] lg:h-[350px] object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопки "Go to shop" */}
      <div className="flex items-center gap-5 mt-4">
        <button className="flex items-center gap-3 bg-[#D9D9D9] rounded py-2 px-5">
          <p>Go to shop</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>

        {/* Кастомные стрелки для ПК */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-3 py-2.5 border rounded bg-white hover:bg-gray-200 transition"
          >
            ←
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-3 py-2.5 border rounded bg-white hover:bg-gray-200 transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
