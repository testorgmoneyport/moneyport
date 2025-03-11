import React, { useState } from "react";

const ReportsContent = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Pricing data with monthly and annual rates
  const pricingPlans = {
    starter: {
      monthly: {
        price: 5.00,
        originalPrice: 12.00,
        description: "For solo designers & freelancers"
      },
      annually: {
        price: 50.00,
        originalPrice: 120.00,
        description: "Save 20% with annual billing"
      }
    },
    medium: {
      monthly: {
        price: 10.99,
        originalPrice: 30.00,
        description: "For working on commercial projects"
      },
      annually: {
        price: 110.00,
        originalPrice: 300.00,
        description: "Best value for professional teams"
      }
    },
    large: {
      monthly: {
        price: 15.00,
        originalPrice: 59.00,
        description: "For teams larger than 5 members"
      },
      annually: {
        price: 150.00,
        originalPrice: 590.00,
        description: "Maximum flexibility for large teams"
      }
    }
  };

  return (
    <div className="p-4 dark:border-gray-800 sm:p-6 h-screen">
      <div className="space-y-6 mt-16">
        <div>
          <div className="mx-auto w-full max-w-[385px]">
            <h2 className="font-bold text-center text-gray-800 mb-7 text-2xl dark:text-white/90">
              Tüm İhtiyaçlarınız İçin Şimdi Planınızı Yükseltin!
            </h2>
          </div>
          <div>
            <div className="mb-10 text-center">
              <div className="relative inline-flex p-1 mx-auto bg-gray-200 rounded-full z-1 dark:bg-gray-800">
                <span 
                  className={`absolute top-1/2 flex h-11 w-[120px] -translate-y-1/2 rounded-full bg-white shadow-theme-xs duration-200 ease-linear dark:bg-white/10 ${
                    billingCycle === "monthly" ? "translate-x-0" : "translate-x-full"
                  }`}
                ></span>
                <button 
                  onClick={() => setBillingCycle("monthly")}
                  className={`flex h-11 w-[120px] items-center relative z-10 justify-center text-base font-medium ${
                    billingCycle === "monthly" 
                      ? "text-gray-800 dark:text-white/90" 
                      : "text-gray-500 hover:text-gray-700 dark:hover:text-white/80 dark:text-gray-400"
                  }`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingCycle("annually")}
                  className={`flex h-11 w-[120px] items-center relative z-10 justify-center text-base font-medium ${
                    billingCycle === "annually" 
                      ? "text-gray-800 dark:text-white/90" 
                      : "text-gray-500 hover:text-gray-700 dark:hover:text-white/80 dark:text-gray-400"
                  }`}
                >
                  Annually
                </button>
              </div>
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
              {Object.entries(pricingPlans).map(([planName, planDetails]) => {
                const currentPlan = planDetails[billingCycle];
                const isActivePlan = planName === "medium";

                return (
                  <div 
                    key={planName} 
                    className={`rounded-2xl border p-6 ${
                      isActivePlan 
                        ? "bg-gray-800 border-gray-800 dark:border-white/10 dark:bg-white/10" 
                        : "border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
                    }`}
                  >
                    <span className={`block mb-3 font-semibold text-theme-xl ${
                      isActivePlan 
                        ? "text-white" 
                        : "text-gray-800 dark:text-white/90"
                    }`}>
                      {planName.charAt(0).toUpperCase() + planName.slice(1)}
                    </span>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <h2 className={`font-bold text-title-md ${
                          isActivePlan 
                            ? "text-white" 
                            : "text-gray-800 dark:text-white/90"
                        }`}>
                          ${currentPlan.price.toFixed(2)}
                        </h2>
                        <span className={`inline-block text-sm ${
                          isActivePlan 
                            ? "text-white/70" 
                            : "text-gray-500 dark:text-gray-400"
                        }`}>
                          /{billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                      <span className={`font-semibold line-through text-theme-xl ${
                        isActivePlan 
                          ? "text-gray-300" 
                          : "text-gray-400"
                      }`}>
                        ${currentPlan.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      isActivePlan 
                        ? "text-white/70" 
                        : "text-gray-500 dark:text-gray-400"
                    }`}>
                      {currentPlan.description}
                    </p>
                    <div className={`w-full h-px my-6 ${
                      isActivePlan 
                        ? "bg-white/20" 
                        : "bg-gray-200 dark:bg-gray-800"
                    }`}></div>
                    {/* Plan features remain the same as in the original component */}
                    <ul className={`${billingCycle === "monthly" ? "mb-8" : "mb-8"} space-y-3`}>
                      <li className={`flex items-center gap-3 text-sm ${
                        isActivePlan 
                          ? "text-white/80" 
                          : "text-gray-500 dark:text-gray-400"
                      }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          className="text-success-500"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="m13.402 4.36-7.28 7.28-3.524-3.523"
                          ></path>
                        </svg>
                        {planName === "starter" ? "5" : planName === "medium" ? "10" : "15"} website
                      </li>
                      {/* Other list items remain the same */}
                      <li className={`flex items-center gap-3 text-sm ${
                        isActivePlan 
                          ? "text-white/80" 
                          : "text-gray-500 dark:text-gray-400"
                      }`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          className="text-success-500"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="m13.402 4.36-7.28 7.28-3.524-3.523"
                          ></path>
                        </svg>
                        {planName === "starter" ? "500 MB" : planName === "medium" ? "1 GB" : "10 GB"} Storage
                      </li>
                      {/* Repeat for other list items */}
                    </ul>
                    <button className={`flex w-full items-center justify-center rounded-lg p-3.5 text-sm font-medium text-white shadow-theme-xs transition-colors ${
                      isActivePlan 
                        ? "bg-brand-500 hover:bg-brand-600" 
                        : "bg-gray-800 hover:bg-brand-500 dark:bg-white/10 dark:hover:bg-brand-600"
                    }`}>
                      Choose {planName.charAt(0).toUpperCase() + planName.slice(1)}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsContent;