import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router"; // Router import edildi

export default function Register() {
  const router = useRouter(); // Router tanımlandı

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    portfolioSize: "0 - 50.000₺",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form state'ini sıfırlama fonksiyonu
  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      portfolioSize: "0 - 50.000₺",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }

    try {
      const response = await axios.post("/api/auth", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        portfolioSize: formData.portfolioSize,
      });

      alert(response.data.message);
      resetForm(); // Form temizlendi
      router.push("/login"); // Login sayfasına yönlendirildi
    } catch (error) {
      alert(error.response?.data?.message || "Kayıt sırasında bir hata oluştu");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="py-16 text-3xl text-center font-bold">
        MoneyPort'un Ayrıcalıklı Dünyasına Katılmana 1 Adım Kaldı!
      </h1>
      <div className="flex flex-col-reverse md:flex-row w-full gap-10">
        {/* Sol Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/assets/img/hero_3.png" // Telefon görselinin yolu
            alt="Phone"
            width={1000}
            height={1000}
            className="object-contain"
          />{" "}
        </div>

        {/* Sağ Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 border border-gray-400 p-4"
          >
            <h1 className="font-semibold text-2xl">Kayıt Ol</h1>
            <p className="text-[#64748B]">
              MoneyPort’a kayıt olmak tamamen ücretsiz! Sende MoneyPort’a hemen
              kayıt ol, tüm yatırımlarını tek bir noktadan yönetmenin keyfini
              yaşa!
            </p>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 font-medium text-gray-700"
              >
                Ad-Soyad
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Kullanıcı Adı"
                value={formData.username}
                onChange={handleChange}
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
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-gray-700"
              >
                Şifre
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Şifre"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 font-medium text-gray-700"
              >
                Şifre Tekrarı
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Şifre Tekrarı"
                value={formData.confirmPassword} // Eklendi
                onChange={handleChange} // Eklendi
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div>
              <label
                htmlFor="portfolioSize"
                className="block mb-2 font-medium text-gray-700"
              >
                Portföy Büyüklüğü
              </label>
              <select
                id="portfolioSize"
                name="portfolioSize"
                value={formData.portfolioSize}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              >
                <option value="0 - 50.000₺">0 - 50.000₺</option>
                <option value="50.000₺ - 100.000₺">50.000₺ - 100.000₺</option>
                <option value="100.000₺ - 250.000₺">100.000₺ - 250.000₺</option>
                <option value="250.000₺ - 500.000₺">250.000₺ - 500.000₺</option>
                <option value="500.000₺ - 1.000.000₺">
                  500.000₺ - 1.000.000₺
                </option>
                <option value="1.000.000₺ +">1.000.000₺ +</option>
              </select>
            </div>

            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
