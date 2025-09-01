import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./ProductCarousal.css";


export default function ProductCarousel({images}) {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container my-5">
      <Swiper
        onSwiper={(s) => (mainRef.current = s)}
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={false}
        rewind={true}
        className="mb-4"
        onSlideChange={(swiper) => {
          const idx = swiper.activeIndex;
          setActiveIndex(idx);
          if (thumbsRef.current) {
            thumbsRef.current.slideTo(idx);
          }
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={src}>
            <img
            src={src}
            alt={`honey-${index}`}
            className="img-fluid d-block mx-auto rounded shadow main-carousel-img"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(s) => (thumbsRef.current = s)}
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        loop={false}
        className="thumbs-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={src}
            onClick={() => {
              if (mainRef.current) {
                mainRef.current.slideTo(index);
                setActiveIndex(index);
              }
            }}
          >
            <div className={`thumb-wrapper ${activeIndex === index ? 'active' : ''}`}>
              <img
              src={src}
              alt={`thumb-${index}`}
              className="img-fluid rounded thumbnail-img"
              style={{
              width: "100%",
              objectFit: "cover",
              cursor: "pointer",
              }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}