import React from "react";
import Image from "next/image";

const UsersContent = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
      {/* <h2 className="text-xl font-bold mb-4">Profil</h2> */}
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 mb-6">
        <div className="text-gray-700 text-theme-sm dark:text-gray-400 flex items-center gap-3">
          <Image
            src="/assets/companies/halkarz_1.png"
            alt="Tema Değiştir"
            width={82}
            height={82}
          />
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
              Ünal İsi
            </h3>
            <p>Orta Ölçekli Yatırımcı </p>
          </div>
        </div>
      </div>

      {/* PERSONAL INFORMATION */}
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 ">
            Kişisel Bilgiler
          </h3>
          <button className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div className="w-1/2 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
          <div id="name">
            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              İsim
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              Ünal
            </p>
          </div>
          <div id="surname">
            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Soyisim
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              İsi
            </p>
          </div>
          <div id="email">
            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              E-posta
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              randomuser@gmail.com
            </p>
          </div>
          <div id="phone">
            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Telefon
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              +90 505 101 8258
            </p>
          </div>
          <div id="role">
            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Plan
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              Orta Ölçekli Yatırımcı | Ücretsiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersContent;
