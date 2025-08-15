
import { 
  LayoutDashboard, 
  Table, 
  Kanban, 
  Users, 
  UserCog, 
  Bot, 
  BarChart3, 
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

interface AppSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', title: 'Dashboard', icon: LayoutDashboard, description: 'Analytics overview' },
  { id: 'orders', title: 'All Orders', icon: Table, description: 'Comprehensive table view' },
  { id: 'kanban', title: 'Kanban Board', icon: Kanban, description: 'Main visual workflow' },
  { id: 'customers', title: 'Customers', icon: Users, description: 'Customer management hub' },
  { id: 'agents', title: 'Agent Management', icon: UserCog, description: 'TS and DA roster' },
  { id: 'kemi', title: 'Kemi Settings', icon: Bot, description: 'AI configuration' },
  { id: 'reports', title: 'Reports', icon: BarChart3, description: 'Detailed analytics' },
  { id: 'notifications', title: 'Notifications', icon: Bell, description: 'System alerts' },
];

export function AppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar className={`${open ? 'w-72' : 'w-16'} transition-all duration-300 border-r border-slate-200 bg-white/80 backdrop-blur-xl fixed left-0 top-0 h-full z-40`}>
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          {open && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-slate-800">Vital Vida CRM</h1>
                <p className="text-xs text-slate-500">Powered by Kemi AI</p>
              </div>
            </div>
          )}
          <SidebarTrigger className="ml-auto hover:bg-slate-100 rounded-lg p-2 transition-colors">
            {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </SidebarTrigger>
        </div>
      </div>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full justify-start h-12 rounded-xl mb-1 transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    {open && (
                      <div className="flex-1 text-left">
                        <div className="font-medium">{item.title}</div>
                        {activeSection !== item.id && (
                          <div className="text-xs text-slate-500 truncate">{item.description}</div>
                        )}
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
