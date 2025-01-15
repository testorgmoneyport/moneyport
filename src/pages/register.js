import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    portfolioSize: "0 - 50.000₺",
    termsAccepted: false,
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      portfolioSize: "0 - 50.000₺",
      termsAccepted: false,
      privacyAccepted: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }

    if (!formData.termsAccepted) {
      alert("Kayıt olmadan önce şartları kabul etmelisiniz");
      return;
    }

    try {
      const response = await axios.post("/api/auth", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        portfolioSize: formData.portfolioSize,
      });

      alert(response.data.message);
      resetForm();
      router.push("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Kayıt sırasında bir hata oluştu");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="py-12">
        <nav className="flex text-gray-600 text-sm">
          <a href="/" className="hover:text-gray-900">Ana Sayfa</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Kayıt Ol</span>
        </nav>
      </div>

      <div className="flex justify-center pb-8">
  <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
    MoneyPort'un Ayrıcalıklı Dünyasına Katılmana 1 Adım Kaldı!
  </h1>
</div>




      <div className="flex flex-col-reverse md:flex-row w-full gap-10">
        {/* Sol Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/assets/img/hero_3.png"
            alt="Phone"
            width={1000}
            height={1000}
            className="object-contain px-4 sm:px-0"
          />
        </div>

        {/* Sağ Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 border border-gray-400 p-4 rounded-lg"
          >
            <h1 className="font-semibold text-2xl">Kayıt Ol</h1>
            <p className="text-[#64748B]">
              MoneyPort’a kayıt olmak tamamen ücretsiz! Sen de MoneyPort’a hemen
              kayıt ol, tüm yatırımlarını tek bir noktadan yönetmenin keyfini
              yaşa!
            </p>
            {/* Form alanları */}
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 font-medium text-gray-700"
              >
                Ad
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Adınızı girin."
                value={formData.firstName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 font-medium text-gray-700"
              >
                Soyad
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Soyadınızı girin."
                value={formData.lastName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block mb-2 font-medium text-gray-700"
              >
                Kullanıcı Adı
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Kullanıcı Adınızı girin."
                value={formData.username}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
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
                placeholder="Mail adresinizi girin."
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
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
                placeholder="Şifrenizi girin."
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
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
                placeholder="Şifrenizi tekrar girin."
                value={formData.confirmPassword}
                onChange={handleChange}
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

            {/* Checkbox alanları */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="termsAccepted" className="text-[#64748B] text-[12px]">
                Hesap Sözleşmesi ve Ekleri Kabul Ediyorum.
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
              />
              <label htmlFor="privacyAccepted" className="text-[#64748B] text-[12px]">
                İletişim bilgilerime kampanya, tanıtım ve reklam içerikli ticari
                elektronik ileti gönderilmesine, bu amaçla kişisel verilerimin
                işlenmesine ve tedarikçilerinizle paylaşılmasına izin veriyorum.{" "}
              </label>
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
