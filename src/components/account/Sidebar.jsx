import React from 'react';
import { Home, Users, Settings, BarChart2, HelpCircle } from 'lucide-react';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { icon: Home, label: 'Anasayfa', key: 'dashboard' },
    { icon: Users, label: 'Kullanıcı Profili', key: 'users' },
    { icon: BarChart2, label: 'Raporlar', key: 'reports' },
    { icon: Settings, label: 'Ayarlar', key: 'settings' },
    { icon: HelpCircle, label: 'Yardım', key: 'help' }
  ];
  const supportItems = [
    { icon: Settings, label: 'Ayarlar', key: 'settings' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 p-4">
      <div className="text-2xl font-bold mb-8 text-center">Dashboard</div>
     <label htmlFor="menu">MENU</label>
      <nav id='menu'>
        {menuItems.map((item) => (
          <div 
            key={item.key} 
            className={`flex items-center p-3 cursor-pointer rounded-md mb-2 ${
              activeMenu === item.key 
                ? 'bg-blue-600' 
                : 'hover:bg-gray-700'
            }`}
            onClick={() => setActiveMenu(item.key)}
          >
            <item.icon className="mr-3" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <label htmlFor="support">DESTEK</label>
      <nav id='support'>
        {supportItems.map((item) => (
          <div 
            key={item.key} 
            className={`flex items-center p-3 cursor-pointer rounded-md mb-2 ${
              activeMenu === item.key 
                ? 'bg-blue-600' 
                : 'hover:bg-gray-700'
            }`}
            onClick={() => setActiveMenu(item.key)}
          >
            <item.icon className="mr-3" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;