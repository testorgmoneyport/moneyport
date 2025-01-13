import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router"; // Router import edildi

export default function Login() {
  const router = useRouter(); // Router tanımlandı

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);
      router.push("/dashboard"); // Başarılı giriş sonrası dashboard sayfasına yönlendirme
    } catch (error) {
      alert(error.response?.data?.message || "Giriş sırasında bir hata oluştu");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="py-16 text-3xl text-center font-bold">
        Tekrar Hoşgeldin MoneyPort'lu!
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
          />
        </div>

        {/* Sağ Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 border border-gray-400 p-4"
          >
            <h1 className="font-semibold text-2xl">Giriş Yap</h1>
            <p className="text-[#64748B]">
              MoneyPort’a giriş yap ve yatırımlarını yönetmeye hemen başla!
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
                placeholder="Email"
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
                id="password"
                name="password"
                placeholder="Şifre"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Giriş Yap
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}