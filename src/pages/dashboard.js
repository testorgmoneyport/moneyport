import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/account/Sidebar";
import HomeContent from "@/components/account/HomeContent";
import HelpContent from "@/components/account/HelpContent";
import UsersContent from "@/components/account/UsersContent";
import ReportsContent from"@/components/account/ReportsContent";
import SettingsContent from"@/components/account/SettingsContent";

const Dashboard = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("home");

  // URL'den initial menü durumunu al
  useEffect(() => {
    // router.query.tab varsa onu kullan, yoksa 'home' olsun
    const tabFromUrl = router.query.tab || "home";
    setActiveMenu(tabFromUrl);
  }, [router.query.tab]);

  // Menü değiştiğinde URL'i güncelle
  useEffect(() => {
    // URL'yi güncellerken sayfa yenilenmesini engelle
    router.push(`/dashboard?tab=${activeMenu}`, undefined, { shallow: true });
  }, [activeMenu]);

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <HomeContent />;
      case "users":
        return <UsersContent />;
      case "reports":
        return <ReportsContent />;
      case "settings":
        return <SettingsContent />;
      case "help":
        return <HelpContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="ml-64 w-[calc(100%-16rem)] p-6">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
