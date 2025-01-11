"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SectionFour = () => {
  return (
    <section
      id="sectionFour"
      className="container mx-auto items-center h-auto mt-12"
    >
      <div className="flex flex-col mb-8">
        <div className="flex flex-col mb-8">
          <h1 className="font-bold text-[42px]">Gündem</h1>
          <p className="text-black font-semibold text-[20px] cursor-pointer">
            Yatırımların için önemli, güncel ve anlaşılır haberler burada.
          </p>
        </div>
        
        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="relative"
          >
            {/* SwiperSlide - Haber Kartları */}
            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Haber"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <h2 className="font-bold text-xl mt-4">Haber Başlığı</h2>
                <p className="text-sm mt-2">Haber açıklaması burada yer alacak.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Haber"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <h2 className="font-bold text-xl mt-4">Haber Başlığı</h2>
                <p className="text-sm mt-2">Haber açıklaması burada yer alacak.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Haber"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <h2 className="font-bold text-xl mt-4">Haber Başlığı</h2>
                <p className="text-sm mt-2">Haber açıklaması burada yer alacak.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Haber"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <h2 className="font-bold text-xl mt-4">Haber Başlığı</h2>
                <p className="text-sm mt-2">Haber açıklaması burada yer alacak.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Haber"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <h2 className="font-bold text-xl mt-4">Haber Başlığı</h2>
                <p className="text-sm mt-2">Haber açıklaması burada yer alacak.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          background-color: white;
          padding: 20px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: #000;
        }

        .swiper-pagination-bullet-active {
          background: #000;
        }
      `}</style>
    </section>
  );
};

export default SectionFour;