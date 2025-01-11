import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full md:h-auto h-full justify-between min-h-96 bottom-0 mt-14">
      <hr />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between my-12 gap-6">
        {/* Image component with Next.js */}
        <Image
          src="/assets/logos/5.png" // Logo dosyanızın yolu
          alt="MoneyPortLogo"
          width={300} // Görselin genişliği
          height={150} // Görselin yüksekliği
          className="cursor-pointer" // İsteğe bağlı CSS sınıfı
        />
        <h1 className="text-xl md:text-4xl text-gray-500 text-center md:text-left">
          Yatırımlarınızı Yönetmenin En Kolay Yolu
        </h1>
      </div>
      <hr />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 my-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl mb-2 font-bold">Bireysel Üyelik</h3>
          <p className="text-gray-500 text-sm">Bireysel Üyelik Paketleri</p>
          <p className="text-gray-500 text-sm">Kullanım Koşulları</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl mb-2 font-bold">Kurumsal Üyelik</h3>
          <p className="text-gray-500 text-sm">Kurumsal Üyelik Paketleri</p>
          <p className="text-gray-500 text-sm">Kurumsal Üyelik Şartları</p>
          <p className="text-gray-500 text-sm">Kullanım Koşulları</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl mb-2 font-bold">Önemli Sayfalar</h3>
          <p className="text-gray-500 text-sm">Kişisel Verilerin Korunması</p>
          <p className="text-gray-500 text-sm">Çerez Politikası</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl mb-2 font-bold">Bize Ulaşın</h3>
          <p className="text-gray-500 text-sm">
            Osmangazi Üniversitesi, Meşelik Kampüsü
          </p>
          <p className="text-gray-500 text-sm">ETGB Teknoparkı Kat:1 No:103</p>
          <p className="text-gray-500 text-sm">Odunpazarı/Eskişehir</p>
          <p className="text-gray-500 text-sm">0850 500 2677</p>
          <p className="text-gray-500 text-sm">info@moneyport.com</p>
        </div>
      </div>
      <hr />
      <div className="container mx-auto">
        <h1 className="my-8 text-gray-500 text-sm md:text-xl text-center">
          © Copyright 2024 by <a href="/" className="underline">MoneyPort Bilgi Teknolojileri Yatırım A.Ş.</a>  All
          Rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
