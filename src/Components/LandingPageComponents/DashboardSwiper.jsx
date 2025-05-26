import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MdArrowOutward } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/autoplay';

const cardData = [
  { id: 1, title: 'Swan Sorting', Images: 'https://res.cloudinary.com/dt2juqy9s/image/upload/v1746684029/Screenshot_2025-05-08_112902_kbgabi.png', link:"https://www.swansorter.com/" },
  { id: 2, title: 'ClickNGro', Images: 'https://res.cloudinary.com/dt2juqy9s/image/upload/v1746684534/Screenshot_2025-05-08_113755_pjsjnx.png', link:"https://click-n-grow.vercel.app/" },
  { id: 3, title: 'AI Based Tour Planner', Images: 'https://res.cloudinary.com/dt2juqy9s/image/upload/v1746685351/Screenshot_2025-05-08_115142_p524iq.png', link:"https://tour-planner-front-end.vercel.app/" },
  { id: 4, title: 'Rejouice', Images: 'https://res.cloudinary.com/dt2juqy9s/image/upload/v1746686575/Screenshot_2025-05-08_115950_yzeicj.png', link:"https://vishalcode2023.github.io/Rejouc_project/" },
];

const DashboardSwiper = () => {
  return (
    <div className="bg-gray-100 w-full h-[60vh]" id='Projects'>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="w-[100%] md:w-[98%] h-full"
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="w-full h-full rounded-3xl mx-2 flex flex-col p-2 justify-center text-white text-xl font-semibold border border-gray-400">
              <a href={card.link} target="_blank" rel="noopener noreferrer" className="img w-full h-[90%] rounded-3xl">
                <img
                  className="h-full object-cover rounded-2xl"
                  src={card.Images}
                  alt={card.title}
                />
              </a>
              <div className="flex items-center justify-between w-[90%] m-auto h-[10%] my-2">
                <div className="heading font-my5">
                  <h2 className="text-gray-700 font-bold text-xl">{card.title}</h2>
                </div>
                <div className="icon text-black">
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <MdArrowOutward className="mx-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardSwiper;
