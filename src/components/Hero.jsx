import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import bg1 from '../assets/1743752237.png';
import bg2 from '../assets/1743752378.png';
import bg3 from '../assets/1743752471.png';
import bg4 from '../assets/1743752666.png';
import bg5 from '../assets/1743752880.png';

const slides = [
  {
    id: 1,
    image: bg1
  },
  {
    id: 2,
    image: bg2
  },
  {
    id: 3,
    image: bg3
  },
  {
    id: 4,
    image: bg4
  },
  {
    id: 5,
    image: bg5
  }
];

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white !opacity-100',
          bulletActiveClass: '!bg-affariyet-pink'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[550px]">
              <img
                src={slide.image}
                alt="Promotion"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}