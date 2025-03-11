import React, { useState } from "react";
import Image from "next/image";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CompanyCard = ({ logo, name, amount, percentage }) => (
  <div className="rounded-2xl border border-gray-200 bg-white px-6 pb-5 pt-6 dark:border-gray-800 dark:bg-white/[0.03] w-full">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10">
        <img
          alt={name}
          loading="lazy"
          width="40"
          height="40"
          decoding="async"
          className="w-full"
          src={logo}
          style={{ color: "transparent" }}
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
          {name}
        </h3>
        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
          {name}
        </span>
      </div>
    </div>
    <div className="flex items-end justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          {amount}
        </h4>
      </div>
      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
        <span className="mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6.065 1.624a.75.75 0 0 1 .558-.25h.001c.192 0 .384.073.531.22l3 2.998a.75.75 0 1 1-1.06 1.06l-1.722-1.72v6.193a.75.75 0 0 1-1.5 0v-6.19L4.155 5.654a.75.75 0 0 1-1.06-1.061z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        {percentage}
      </span>
    </div>
  </div>
);

// const generatePerformanceData = (period) => {
//   switch (period) {
//     case "Monthly":
//       return [
//         { date: "Jun", value: 31.2 },
//         { date: "Jul", value: 33.5 },
//         { date: "Aug", value: 32.1 },
//         { date: "Sep", value: 31.8 },
//         { date: "Oct", value: 32.6 },
//         { date: "Nov", value: 33.4 },
//         { date: "Dec", value: 34.2 },
//         { date: "Jan", value: 35.1 },
//         { date: "Feb", value: 36.5 },
//         { date: "Mar", value: 37.8 },
//         { date: "Apr", value: 38.2 },
//       ];
//     case "Quarterly":
//       return [
//         { date: "Q2 2025", value: 31.5 },
//         { date: "Q3 2025", value: 32.3 },
//         { date: "Q4 2025", value: 33.7 },
//         { date: "Q1 2026", value: 36.2 },
//         { date: "Q2 2026", value: 38.1 },
//       ];
//     case "Annually":
//       return [
//         { date: "2024", value: 31.0 },
//         { date: "2025", value: 34.5 },
//         { date: "2026", value: 37.8 },
//       ];
//     default:
//       return [];
//   }
// };

const HomeContent = () => {
  const [activePeriod, setActivePeriod] = useState("Monthly");

  const companies = [
    {
      logo: "/images/brand/brand-07.svg",
      name: "Apple, Inc",
      amount: "$1,232.00",
      percentage: "11.01%",
    },
    {
      logo: "/images/brand/brand-08.svg",
      name: "Microsoft Corp",
      amount: "$2,543.50",
      percentage: "8.75%",
    },
    {
      logo: "/images/brand/brand-09.svg",
      name: "Google LLC",
      amount: "$3,124.75",
      percentage: "15.22%",
    },
    {
      logo: "/images/brand/brand-10.svg",
      name: "Amazon Inc",
      amount: "$1,876.25",
      percentage: "6.45%",
    },
  ];

  // const performanceData = generatePerformanceData(activePeriod);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            logo={company.logo}
            name={company.name}
            amount={company.amount}
            percentage={company.percentage}
          />
        ))}
      </div>
      <div className="bg-white rounded-lg p-6 shadow-md mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Portfolio Performance
          </h2>
          <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
            {["Günlük", "Haftalık", "Aylık"].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activePeriod === period
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActivePeriod(period)}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* <p className="text-gray-500 mb-4">
          Here is your performance stats for {activePeriod.toLowerCase()} period
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <XAxis dataKey="date" />
            <YAxis domain={[30, 40]} tickFormatter={(value) => `$${value}`} />
            <Tooltip
              formatter={(value) => [`$${value}`, "Performance"]}
              labelClassName="text-gray-600"
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>*/}
      </div>
      <div className="w-full  mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl w-full font-semibold text-gray-800">
            Son İşlemler
          </h2>
          <input
            type="text"
            placeholder="İşlem ara.."
            // value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2 mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <table className="w-full border-b  border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="px-2 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                İsim
              </th>
              <th className="px-2 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                Tarih
              </th>
              <th className="px-2 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                Fiyat
              </th>
              <th className="px-2 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                Kategori
              </th>
              <th className="px-2 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                İşlem
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <td className="px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400 flex items-center gap-3">
                <Image
                  src="/assets/companies/halkarz_1.png"
                  alt="Tema Değiştir"
                  width={34}
                  height={34}
                />
                BTC
              </td>

              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                2024-03-03
              </td>
              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                ₺200,00
              </td>
              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                Kripto
              </td>
              <td className="px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                <span class="text-[12px] inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500">
                  Satış
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <td className="px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400 flex items-center gap-3">
                <Image
                  src="/assets/companies/halkarz_2.png"
                  alt="Tema Değiştir"
                  width={34}
                  height={34}
                />
                USD/TRY
              </td>

              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                2024-03-03
              </td>
              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                ₺150,00
              </td>
              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                Döviz
              </td>
              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                <span class="text-[12px] inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                  Alış
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <td className="px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400 flex items-center gap-3">
                <Image
                  src="/assets/companies/halkarz_1.png"
                  alt="Tema Değiştir"
                  width={34}
                  height={34}
                />
                THYAO
              </td>

              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                2024-03-03
              </td>

              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                ₺314,23
              </td>
              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                Borsa
              </td>
              <td className=" px-2 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                <span class="text-[12px] inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                  Alış
                </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default HomeContent;
