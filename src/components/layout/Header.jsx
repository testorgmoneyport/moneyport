"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [language, setLanguage] = useState("Türkçe");
  const [isDarkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false); // Alt menüyü kapat
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-md">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-4 lg:px-0">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <Image
                src="/assets/logos/5.png"
                alt="MoneyPortLogo"
                width={200}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/" className="hover:text-[#FFC700]">
                Ana Sayfa
              </Link>
            </li>

            {/* Fiyatlar Mega Menü */}
            <li className="group relative">
              <Link
                href="/pricing"
                className="hover:text-[#FFC700] flex items-center gap-1"
              >
                Fiyatlar
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="invisible group-hover:visible absolute left-0 w-[600px] mt-6 p-6 bg-white shadow-xl rounded-xl border border-gray-100 transition-all duration-300 opacity-0 group-hover:opacity-100 z-50">
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-3">BIST</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/basic"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/basic/compare"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">DÖVİZ</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/standard"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/standard/compare"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">Kripto</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/premium"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/premium/compare"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">Kıymetli Madenler</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/premium"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/premium/compare"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/portfolio" className="hover:text-[#FFC700]">
                Portföy
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#FFC700]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#FFC700]">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFC700]">
                İletişim
              </Link>
            </li>
          </ul>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language Selection */}
            <div className="group relative">
              <button className="flex items-center gap-2 focus:outline-none">
                <Image
                  src="assets/icons/translate.svg"
                  alt="Dil Seçeneği"
                  width={24}
                  height={24}
                />
                <span>{language}</span>
              </button>
              <div className="invisible group-hover:visible absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-lg shadow-lg z-50 min-w-[120px] transition-all duration-300 opacity-0 group-hover:opacity-100">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setLanguage("Türkçe")}
                  >
                    Türkçe
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setLanguage("İngilizce")}
                  >
                    English
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setLanguage("Almanca")}
                  >
                    Deutsch
                  </li>
                </ul>
              </div>
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="focus:outline-none">
              <Image
                src={isDarkMode ? "assets/icons/moon.svg" : "assets/icons/sun.svg"}
                alt="Tema Değiştir"
                width={24}
                height={24}
              />
            </button>

            {/* User Menu */}
            <div className="group relative">
              <Image
                src="assets/icons/account.svg"
                alt="Kullanıcı Logosu"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <div className="invisible group-hover:visible absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-50 w-[300px] transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">Hesap İşlemleri</h3>
                    <p className="text-sm text-gray-600">
                      Hesabınızı yönetin veya yeni hesap oluşturun
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/login"
                      className="block w-full py-2 px-4 text-center bg-[#FFC700] text-black rounded-lg hover:bg-[#ffc800bf] transition-colors"
                    >
                      Giriş Yap
                    </Link>
                    <Link
                      href="/register"
                      className="block w-full py-2 px-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Kayıt Ol
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/assets/logos/5.png"
                alt="MoneyPortLogo"
                width={150}
                height={40}
                className="cursor-pointer"
              />
              <button
                className="focus:outline-none"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 hover:text-[#FFC700]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </li>
              {/* Mobile Fiyatlar Menu */}
              <li>
                <button
                  onClick={toggleSubMenu}
                  className="flex items-center justify-between w-full py-2 hover:text-[#FFC700]"
                >
                  <span>Fiyatlar</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSubMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`pl-4 mt-2 space-y-4 ${
                    isSubMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">BIST</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/basic"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/basic/compare"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">DÖVİZ</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/standard"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/standard/compare"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">Kripto</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/premium"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/premium/compare"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Kıymetli Madenler</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/pricing/premium"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Özellikler
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing/premium/compare"
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Karşılaştırma
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="block py-2 hover:text-[#FFC700]"
                  onClick={() => setIsMenuOpen(false)}>
                  Portföy
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 hover:text-[#FFC700]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 hover:text-[#FFC700]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 hover:text-[#FFC700]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              {/* Account Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <Link
                  href="/login"
                  className="py-1.5 px-3 text-sm text-center bg-[#FFC700] text-black rounded-lg hover:bg-[#ffc800bf] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/register"
                  className="py-1.5 px-3 text-sm text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kayıt Ol
                </Link>
              </div>

              {/* Settings Row */}
              <div className="flex justify-between items-center">
                {/* Language Selection */}
                <div className="flex items-center gap-2">
                  <Image
                    src="assets/icons/translate.svg"
                    alt="Dil Seçeneği"
                    width={20}
                    height={20}
                  />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent text-sm"
                  >
                    <option value="Türkçe">Türkçe</option>
                    <option value="İngilizce">English</option>
                    <option value="Almanca">Deutsch</option>
                  </select>
                </div>

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className="focus:outline-none">
                  <Image
                    src={
                      isDarkMode ? "assets/icons/moon.svg" : "assets/icons/sun.svg"
                    }
                    alt="Tema Değiştir"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}