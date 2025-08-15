
import { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { KanbanBoard } from '@/components/KanbanBoard';
import { CustomersPage } from '@/components/CustomersPage';
import { Dashboard } from '@/components/Dashboard';
import { AllOrders } from '@/components/AllOrders';
import { AgentManagement } from '@/components/AgentManagement';
import { KemiSettings } from '@/components/KemiSettings';
import { Reports } from '@/components/Reports';
import { Notifications } from '@/components/Notifications';
import { SidebarProvider } from '@/components/ui/sidebar';

const Index = () => {
  const [activeSection, setActiveSection] = useState('kanban');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <AllOrders />;
      case 'kanban':
        return <KanbanBoard />;
      case 'customers':
        return <CustomersPage />;
      case 'agents':
        return <AgentManagement />;
      case 'kemi':
        return <KemiSettings />;
      case 'reports':
        return <Reports />;
      case 'notifications':
        return <Notifications />;
      default:
        return <KanbanBoard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 ml-16 md:ml-72 transition-all duration-300 overflow-hidden">
          <div className="h-full">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
