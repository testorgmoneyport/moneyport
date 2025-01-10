"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("Türkçe");
  const [isDarkMode, setDarkMode] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isPricingMenuOpen, setPricingMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setLanguageOpen(!isLanguageOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const togglePricingMenu = () => {
    setPricingMenuOpen(!isPricingMenuOpen);
  };

  return (
    <header className="bg-white text-black">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Menü */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Ana Sayfa
            </Link>
          </li>

          {/* Fiyatlar Menüsü */}
          <li
            className="relative"
            onMouseEnter={() => togglePricingMenu(true)}
            onMouseLeave={() => togglePricingMenu(false)}
          >
            <Link href="/pricing" className="hover:text-gray-400">
              Fiyatlar
            </Link>
            {isPricingMenuOpen && (
              <ul className="absolute left-0 mt-2 bg-gray-700 text-white rounded-lg shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/pricing/basic">Temel Paket</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/pricing/standard">Standart Paket</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/pricing/premium">Premium Paket</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/portfolio" className="hover:text-gray-400">
              Portföy
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              İletişim
            </Link>
          </li>
        </ul>

        {/* User Actions */}
        <div className="flex items-center gap-5 relative">
          {/* Dil Seçimi */}
          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center gap-2 focus:outline-none"
            >
              <Image
                src="assets/icons/translate.svg"
                alt="Dil Seçeneği"
                width={24}
                height={24}
              />
              <span>{language}</span>
            </button>
            {isLanguageOpen && (
              <ul className="absolute top-8 left-0 bg-gray-700 text-white text-sm rounded shadow-md z-10">
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setLanguage("Türkçe");
                    setLanguageOpen(false);
                  }}
                >
                  Türkçe
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setLanguage("İngilizce");
                    setLanguageOpen(false);
                  }}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setLanguage("Almanca");
                    setLanguageOpen(false);
                  }}
                >
                  Deutsch
                </li>
              </ul>
            )}
          </div>

          {/* Koyu Tema */}
          <button onClick={toggleTheme} className="focus:outline-none">
            <Image
              src={isDarkMode ? "assets/icons/moon.svg" : "assets/icons/sun.svg"}
              alt="Tema Değiştir"
              width={24}
              height={24}
            />
          </button>

          {/* Kullanıcı Logosu */}
          <div
            className="relative group"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <Image
              src="assets/icons/account.svg"
              alt="Kullanıcı Logosu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            {isUserMenuOpen && (
              <ul className="absolute top-8 right-0 bg-gray-700 text-white text-sm rounded shadow-md z-10">
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/login">Giriş Yap</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <Link href="/register">Kayıt Ol</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
