import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "131fa12a-a13a-4744-9a9d-14dee4ff5eb4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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
        setMessage("Mesajınız başarıyla gönderildi!");
      } else {
        setMessage("Mesajınız gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    }

    setTimeout(() => setMessage(""), 5000);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="py-8 sm:py-12 overflow-x-auto">
        <nav className="flex text-gray-600 text-sm">
          <a href="/" className="hover:text-gray-900">
            Ana Sayfa
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">İletişim</span>
        </nav>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full gap-6 md:gap-10 items-center">
        {/* Sol Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-6 md:py-0">
          <img
            src="/assets/img/hero_3.png"
            alt="Contact Illustration"
            className="object-contain w-full max-w-md px-4 sm:px-0"
          />
        </div>

        {/* Sağ Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col gap-4 border border-gray-400 p-4 sm:p-6 mx-4 sm:mx-0 rounded-lg"
            >
              <h1 className="font-semibold text-xl sm:text-2xl uppercase text-center md:text-left">
                BİZİMLE İLETİŞİME GEÇİN
              </h1>
              <p className="text-[#64748B] text-sm sm:text-base text-center md:text-left">
                MoneyPort ekibi olarak sorularınızı yanıtlamaya ve size yardımcı
                olmaya her zaman hazırız.
              </p>

              {/* Bildirim Mesajı */}
              <div>
                {message && (
                  <div
                    className={`p-4 mb-4 rounded ${
                      message.includes("başarıyla")
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </div>

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
                  required
                  className="p-2 border border-gray-300 rounded w-full text-sm sm:text-base"
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
                  required
                  className="p-2 border border-gray-300 rounded w-full text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="p-2 border border-gray-300 rounded w-full text-sm sm:text-base min-h-[100px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm sm:text-base w-full sm:w-auto sm:px-8 mt-2"
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
