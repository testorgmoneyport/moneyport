import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/forgotpassword", { email });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Bir hata oluştu");
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="py-12">
        <nav className="flex text-gray-600 text-sm">
          <Link href="/" className="hover:text-gray-900">
            Ana Sayfa
          </Link>
          <span className="mx-2">/</span>
          <Link href="/login" className="hover:text-gray-900">
            Giriş Yap
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Şifremi Unuttum</span>
        </nav>
      </div>

      {/* Sayfa Başlığı */}
      <div className="flex justify-center pb-8">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          Şifrenizi mi Unuttunuz?
        </h1>
      </div>

      {/* Form */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4 border border-gray-300 p-6 rounded-lg shadow-lg"
        >
          <p className="text-gray-500">
            Lütfen hesabınıza kayıtlı e-posta adresinizi girin. Size bir şifre
            sıfırlama bağlantısı göndereceğiz.
          </p>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-posta adresinizi girin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full py-2 px-4 text-center bg-[#FFC700] text-black rounded-lg hover:bg-[#ffc800bf] transition-colors"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
