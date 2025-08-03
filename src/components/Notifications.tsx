
import { Bell, AlertCircle, CheckCircle, Info, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Notifications() {
  const notifications = [
    // High Priority
    {
      id: 1,
      type: 'high',
      icon: AlertCircle,
      title: 'RISK³ customer payment received',
      description: 'Funmi Adebayo (₦28,500) - Payment proof verified, order processing',
      time: '2 minutes ago',
      category: 'Payment'
    },
    {
      id: 2,
      type: 'high',
      icon: Clock,
      title: 'Assignment timeout alert',
      description: 'Order #VV2024-1567 (45 seconds, no assignment) - Manual intervention required',
      time: '3 minutes ago',
      category: 'Assignment'
    },
    {
      id: 3,
      type: 'high',
      icon: DollarSign,
      title: 'New high-value order',
      description: '₦75,000 order from Lagos - Requires senior agent assignment',
      time: '8 minutes ago',
      category: 'Order'
    },

    // Medium Priority
    {
      id: 4,
      type: 'medium',
      icon: TrendingUp,
      title: 'Telesales performance alert',
      description: 'Mike Adebayo\'s conversion rate dropped to 85% (below 90% threshold)',
      time: '15 minutes ago',
      category: 'Performance'
    },
    {
      id: 5,
      type: 'medium',
      icon: CheckCircle,
      title: 'Recovery customer milestone',
      description: 'Grace Okonkwo reached REPEAT³ - Can restore POD processing',
      time: '25 minutes ago',
      category: 'Recovery'
    },
    {
      id: 6,
      type: 'medium',
      icon: Users,
      title: 'Daily target achievement',
      description: 'Daily target 80% achieved (67/84 orders processed)',
      time: '1 hour ago',
      category: 'Target'
    },

    // System Updates
    {
      id: 7,
      type: 'info',
      icon: Info,
      title: 'AI Kemi daily summary',
      description: 'Processed 156 assignments today (avg 12.3s assignment time)',
      time: '2 hours ago',
      category: 'System'
    },
    {
      id: 8,
      type: 'info',
      icon: Info,
      title: 'WhatsApp integration status',
      description: '94% message delivery rate - 12 failed deliveries reported',
      time: '3 hours ago',
      category: 'System'
    },
    {
      id: 9,
      type: 'info',
      icon: CheckCircle,
      title: 'Database backup completed',
      description: 'Daily backup successful - All data secured',
      time: '4 hours ago',
      category: 'System'
    },
  ];

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'high':
        return 'bg-red-50 border-red-200';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Notifications
        </h1>
        <p className="text-slate-600 mt-1">System alerts and important updates</p>
      </div>

      {/* Notification Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-slate-600">High Priority</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Bell className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-sm text-slate-600">Medium Priority</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Info className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600">System Updates</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-slate-600">Resolved Today</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notification Categories */}
      <div className="mb-6">
        <div className="flex gap-2 flex-wrap">
          <Button variant="default" size="sm">All</Button>
          <Button variant="outline" size="sm">High Priority</Button>
          <Button variant="outline" size="sm">Medium Priority</Button>
          <Button variant="outline" size="sm">System Updates</Button>
          <Button variant="outline" size="sm">Payments</Button>
          <Button variant="outline" size="sm">Performance</Button>
        </div>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-indigo-600" />
              Recent Notifications
            </span>
            <Button variant="outline" size="sm">Mark All Read</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 rounded-lg border ${getNotificationBg(notification.type)} hover:shadow-sm transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-white ${getIconColor(notification.type)}`}>
                    <notification.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">
                          {notification.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-2">
                          {notification.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span>{notification.time}</span>
                          <span className="bg-white px-2 py-1 rounded-full">
                            {notification.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {notification.type === 'high' && (
                          <Button size="sm" variant="outline">
                            Action Required
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          ✕
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline">Load More Notifications</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
