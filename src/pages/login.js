import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);
      router.push("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Giriş sırasında bir hata oluştu");
    }
  };

  return (
    <div className="container mx-auto px-4">
     {/* Breadcrumb */}
     <div className="py-12">
        <nav className="flex text-gray-600 text-sm">
          <a href="/" className="hover:text-gray-900">Ana Sayfa</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Giriş Yap</span>
        </nav>
      </div>


      <div className="flex justify-center pb-8">
  <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
    Tekrar Hoşgeldin MoneyPort'lu !
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
            className="object-contain"
          />
        </div>

        {/* Sağ Sütun */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 border border-gray-300 p-6 rounded-lg shadow-lg"
          >
            <h1 className="font-semibold text-2xl">Giriş Yap</h1>
            <p className="text-gray-500">
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
                placeholder="Mail adresinizi girin"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded w-full focus:ring focus:ring-blue-200 focus:outline-none"
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
                placeholder="Şifrenizi girin"
                value={formData.password}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded w-full focus:ring focus:ring-blue-200 focus:outline-none"
                required
              />
            </div>
            {/* Checkbox alanı */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="text-[#64748B] text-[12px]">
                Beni Hatırla
              </label>
            </div>
             {/* Şifremi Unuttum Linki */}
             <div className="text-right">
  <Link href="/forgotpassword" className="text-blue-500 text-sm hover:underline">
    Şifremi Unuttum
  </Link>
</div>
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition focus:ring focus:ring-blue-200"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

