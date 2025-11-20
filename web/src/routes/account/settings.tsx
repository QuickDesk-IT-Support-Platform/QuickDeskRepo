import { createFileRoute, redirect } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import UserProfile from '@/components/settings/userProfile';
import Notifications from '@/components/settings/Notifications';
import SettingsContainer  from '@/components/settings/SettingsContainer';
import useAuthStore from '@/Store/auth.store';
import Appearance from '@/components/settings/Appearance';
import { User,Settings,Bell,Palette   } from "lucide-react"

import { Navbar } from '@/components/navbar';
  export const Route = createFileRoute('/account/settings')({  
  
  beforeLoad: ({ location }) => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({
        to: "/auth/login",
        search: {
          // Usamos location.href para garantir a URL completa se necessário, 
          // ou location.pathname se for apenas o caminho.
          redirect: location.href, 
        },
      });
    }
  },
  component: SettingsPage,
});

function SettingsPage() {
  type TabType = 'account' | 'notifications' | 'settings'| 'appearance';
  const [activeTab, setActiveTab] = useState<TabType>('account');

  const renderContent = () => {
    switch (activeTab) {
      case 'account': return <UserProfile />;
      case 'notifications': return <Notifications />;
      case 'appearance': return <Appearance />;
      case 'settings': return <SettingsContainer />;
      default: return <UserProfile />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen w-full gap-6 p-6">
      
      {/* Sidebar de Navegação */}
      <aside className="flex flex-col gap-2 w-full md:w-64 shrink-0">
        <nav className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-2 px-4">My Account</h2>
          
          
          <Button 
            variant={activeTab === "account" ? "default" : "ghost"} 
            className={`justify-start cursor-pointer items-center`}
            onClick={() => setActiveTab("account")}
            >
            <User className="mr-2"/>
                Account
          </Button>



          <Button 
            variant={activeTab === "notifications" ? "default" : "ghost"} 
            className="justify-start cursor-pointer items-center"
            onClick={() => setActiveTab("notifications")}
          >
            <Bell className="mr-2"/>
            Notifications
          </Button>
          <Button 
            variant={activeTab === "appearance" ? "default" : "ghost"} 
            className="justify-start cursor-pointer items-center"
            onClick={() => setActiveTab("appearance")}
          >
            <Palette className="mr-2"/>
            Appearance
          </Button>
          
          <Button 
            variant={activeTab === "settings" ? "default" : "ghost"} 
            className="justify-start cursor-pointer items-center"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2"/>
            Settings
          </Button>
        </nav>
      </aside>

      <main className="flex-1 border-l-1  p-6 ">
        {renderContent()}
      </main>
    </div>

    </>
    
  );
}