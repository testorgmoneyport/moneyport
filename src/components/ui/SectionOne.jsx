"use client";
import Image from "next/image";
import Link from "next/link";

const SectionOne = () => {
  return (
    <section
    className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-cover bg-center min-h-screen"
  >
      {/* Left Div */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex items-center bg-transparent">
        {/* Text Content */}
        <div
          id="hero"
          className="flex flex-col gap-10 relative z-10 p-6 md:p-12 md:pl-0 text-center md:text-left"
        >
          <div className="text-black font-bold ">
            <h1 className="text-4xl md:text-5xl mb-3">MoneyPort ile</h1>
            <h2 className="text-4xl md:text-5xl leading-[12px]">
              <span className="block">tüm yatırımlarınız</span>
              <span className="block mt-4">bir arada</span>
            </h2>
          </div>
          <Link href="/register">
            <span
              className="mt-6 text-lg md:text-xl text-[#424242] hover:text-blue-500 transition-colors"
              style={{ opacity: 0.86 }}
            >
              Sende Kayıt Ol Hemen Başla &gt;&gt;&gt;
            </span>
          </Link>

          {/* <p className="mt-6 text-lg md:text-xl text-gray-700">
            Sende Kayıt Ol Hemen Başla &gt;&gt;&gt;
          </p> */}
        </div>
      </div>

      {/* Right Div */}
      <div className="relative w-full md:w-1/2  flex items-center justify-center">
        <Image
          src="/assets/img/hero_3.png" // Telefon görselinin yolu
          alt="Phone"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SectionOne;
