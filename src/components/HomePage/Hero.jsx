import { Homepage1, Homepage2 } from '../../Assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [Homepage1, Homepage2];

function Hero() {
  return (
    <div className="relative w-full  lg:h-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for navigation arrows and pagination dots */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            width: 30px;
            height: 30px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 18px;
          }

          .swiper-pagination-bullet {
            background: white;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background: #33277B;
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
