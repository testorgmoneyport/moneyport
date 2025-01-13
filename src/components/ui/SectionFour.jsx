import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';

const SectionFour = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/news');

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to load news');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto flex justify-center items-center h-96">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const handleClick = (slug) => {
    router.push(`/news/${slug}`);
  };

  return (
    <section id="sectionFour" className="container mx-auto px-4 h-auto mt-12">
      <div className="flex flex-col mb-8">
        <div className="flex flex-col mb-8">
          <h1 className="font-bold text-4xl md:text-[42px] text-gray-900">Gündem</h1>
          <p className="text-gray-700 font-semibold text-lg md:text-xl">
            Yatırımların için önemli, güncel ve anlaşılır haberler burada.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
            className="px-4"
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => handleClick(item.slug)} // Slug kullanarak yönlendirme
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image_url || '/default-news-image.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-bold text-xl mb-2 line-clamp-2">{item.title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                    <div className="mt-4 text-xs text-gray-500">
                      {new Date(item.created_at).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
