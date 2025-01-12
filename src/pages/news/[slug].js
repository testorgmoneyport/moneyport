import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

const NewsDetail = () => {
  const router = useRouter();
  const { slug } = router.query; // URL'deki slug parametresini al
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return; // slug yüklenmediyse bekle

    const fetchNewsDetail = async () => {
      try {
        setIsLoading(true);
        // Haber detayını çek
        const response = await fetch(`/api/news/${slug}`);

        //Haber bulunamadıysa kullanıcıya hata gösterdiğimiz yer
        if (!response.ok) {
          //   throw new Error('Failed to fetch news detail');
          return (
            //Yükseklik ayarı yapılacak
            <div className="flex flex-col justify-center items-center text-center">
              <Image
                src="/sad-face.png"
                alt="Üzgün Surat"
                width={150}
                height={150}
                className="mb-4"
              />
              <h1 className="text-2xl font-semibold text-gray-800">
                Maalesef bu habere ulaşılmıyor.
              </h1>
              <p className="text-gray-600 mt-2">
                Aradığınız haber bulunamadı veya silinmiş olabilir.
              </p>
            </div>
          );
        }

        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news detail:", error);
        setError("Haber yüklenemedi.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsDetail();
  }, [slug]);

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

  //Haber bulunamadıysa kullanıcıya hata gösterdiğimiz yer
  if (!news) {
    return (
        //Yükseklik ayarı yapılacak
        <div className="flex flex-col justify-center items-center h-96 my-10text-center">
          <Image
            src="/sad-face.png"
            alt="Üzgün Surat"
            width={150}
            height={150}
            className="mb-4"
          />
          <h1 className="text-2xl font-semibold text-gray-800">
            Maalesef bu habere ulaşılmıyor.
          </h1>
          <p className="text-gray-600 mt-2">
            Aradığınız haber bulunamadı veya silinmiş olabilir.
          </p>
        </div>
      );  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-4xl mb-4">{news.title}</h1>
      <div className="relative w-full h-64 mb-8">
        <Image
          src={news.image_url || "/default-news-image.jpg"}
          alt={news.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-gray-700 text-lg">{news.description}</p>
      <div className="mt-8 text-sm text-gray-500">
        Yayınlanma Tarihi:{" "}
        {new Date(news.created_at).toLocaleDateString("tr-TR")}
      </div>
    </div>
  );
};

export default NewsDetail;
