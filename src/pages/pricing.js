import React, { useState, useEffect } from "react";

export default function About() {
  const [activeCategory, setActiveCategory] = useState(null); // Başlangıçta hiçbir kategori seçili değil
  const [dynamicData, setDynamicData] = useState({});
  const [fixedData, setFixedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = {
        HİSSE: [
          { name: "Borsa İstanbul", price: "4,567.89 ₺", change: "⬆ +0.8%", icon: "📊" },
        ],
        FON: [
          { name: "Fon A", price: "1,234.56 ₺", change: "⬇ -0.2%", icon: "📂" },
        ],
        DÖVİZ: [
          { name: "Dolar", price: "24.60 ₺", change: "⬆ +0.3%", icon: "💵" },
          { name: "Euro", price: "26.80 ₺", change: "⬆ +0.5%", icon: "💶" },
        ],
        KRİPTO: [
          { name: "Bitcoin", price: "560,000 ₺", change: "⬆ +2.3%", icon: "💻" },
        ],
        "DEĞERLİ MADENLER": [
          { name: "Altın (GR)", price: "1,234.60 ₺", change: "⬇ -1.2%", icon: "🥇" },
          { name: "Gümüş", price: "34.60 ₺", change: "⬆ +0.4%", icon: "🥈" },
        ],
      };

      const fetchedFixedData = [
        { name: "Dolar", price: "24.60 ₺", change: "⬆ +0.3%", icon: "💵" },
        { name: "Altın (GR)", price: "1,234.60 ₺", change: "⬇ -1.2%", icon: "🥇" },
        { name: "Bitcoin", price: "560,000 ₺", change: "⬆ +2.3%", icon: "💻" },
        { name: "Sterlin", price: "28.40 ₺", change: "⬆ +0.4%", icon: "💷" },
        { name: "Euro", price: "26.80 ₺", change: "⬆ +0.5%", icon: "💶" },
      ];

      setDynamicData(fetchedData);
      setFixedData(fetchedFixedData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div className="py-12">
        <nav className="flex text-gray-600 text-sm">
          <a href="/" className="hover:text-gray-900">Ana Sayfa</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Piyasa</span>
        </nav>
      </div>

      {/* Navbar Altı Menü */}
      <div className="pt-2 pb-8 flex gap-8 justify-center">
        {Object.keys(dynamicData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center px-4 py-2 rounded-2xl font-dm-sans text-xl font-bold shadow-sm transition-colors ${
              activeCategory === category
                ? "bg-[#1A293A] text-[#EAF3FF]"
                : "bg-[#EAF3FF] text-[#1A293A]"
            }`}
          >
            <span className="mr-3 text-xl">
              {dynamicData[category]?.[0]?.icon || "🔗"}
            </span>
            {category}
          </button>
        ))}
      </div>

      {/* Sabit Fiyat Kartları */}
<div className="py-4 px-4 flex gap-4 justify-between items-center flex-wrap">
  {fixedData.map((item, index) => (
    <div
      key={index}
      className="bg-[#EAF3FF] shadow-lg rounded-md p-4 flex flex-col items-center justify-between w-[18%] min-h-[160px]"
    >
      {/* İkon */}
      <span className="text-2xl">{item.icon}</span>

      {/* Metin Bilgileri */}
      <div className="flex flex-col items-center text-center mt-2">
        <p className="text-m font-semibold text-gray-700 truncate">{item.name}</p>
        <p className="text-gray-500">{item.price}</p>
      </div>

      {/* Yüzde Değişim */}
      <p
        className={`font-bold mt-1 ${
          item.change.includes("⬆") ? "text-green-500" : "text-red-500"
        }`}
      >
        {item.change}
      </p>
    </div>
  ))}
</div>

      {/* Dinamik Kartlar veya Ana Sayfa */}
      {activeCategory ? (
        <div className="py-6 px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {dynamicData[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-lg font-semibold mt-2">{item.name}</p>
              <p className="text-gray-500 mt-1">{item.price}</p>
              <p
                className={`font-bold mt-2 ${
                  item.change.includes("⬆") ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.change}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-6 px-6 text-center">
          <h2 className="text-2xl font-bold">Piyasalara Genel Bakış</h2>
          <p className="text-gray-600 mt-2">
            Yukarıdaki menüden bir kategori seçerek detayları görebilirsiniz.
          </p>
        </div>
      )}
    </div>
  );
}
