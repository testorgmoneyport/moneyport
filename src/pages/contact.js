import { useState } from "react";
import axios from "axios";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "131fa12a-a13a-4744-9a9d-14dee4ff5eb4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <div className="container mx-auto">
      <h1 className="py-16 text-3xl text-center font-bold">
        Bizimle İletişime Geçin
      </h1>
      <div className="flex flex-col-reverse md:flex-row w-full gap-10">
        {/* Sol Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/assets/img/hero_3.png"
            alt="Contact Illustration"
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Sağ Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col gap-4 border border-gray-400 p-4"
            >
              <h1 className="font-semibold text-2xl uppercase">İLETİŞİM</h1>
              <p className="text-[#64748B]">
              Bizimle iletişime geçin! MoneyPort ekibi olarak sorularınızı yanıtlamaya ve size yardımcı olmaya her zaman hazırız.
              </p>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Adınız
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Email
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="p-2 border border-gray-300 rounded w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Gönder
              </button>
            </form>
          </>
        </div>
      </div>
    </div>
  );
}