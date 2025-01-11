"use client";
import Image from "next/image";

const SectionThree = () => {
  return (
    <section
      id="sectionThree"
      className="container mx-auto items-center h-auto mt-12"
    >
      <div className="flex flex-col mb-8">
        <div className="flex justify-between items-center border-b border-gray-300 mb-4">
          <h1 className="font-bold text-[24px]">
            Gelecek Tarihli Halka Arzlar
          </h1>
          <p className="text-[#FB1A8E] font-bold text-[16px] cursor-pointer">
            Tümünü Gör &gt;
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="card flex flex-col items-center sm:flex-row sm:items-start gap-4"
            >
              <Image
                src={`/assets/companies/halkarz_${index % 2 + 1}.png`}
                alt="Example Image"
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col gap-2 w-[200px]">
                <div className="flex flex-row justify-between">
                  <h1>ASDGYO</h1>
                  <h1>12.12.12</h1>
                </div>
                <h3>ASD ŞİRKETİ</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-8">
        <div className="flex justify-between items-center border-b border-gray-300 mb-4">
          <h1 className="font-bold text-[24px]">
            Geçmiş Tarihli Halka Arzlar
          </h1>
          <p className="text-[#FB1A8E] font-bold text-[16px] cursor-pointer">
            Tümünü Gör &gt;
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="card flex flex-col items-center sm:flex-row sm:items-start gap-4"
            >
              <Image
                src={`/assets/companies/halkarz_${index % 2 + 1}.png`}
                alt="Example Image"
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col gap-2 w-[200px]">
                <div className="flex flex-row justify-between">
                  <h1>ASDGYO</h1>
                  <h1>12.12.12</h1>
                </div>
                <h3>ASD ŞİRKETİ</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
