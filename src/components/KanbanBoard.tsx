
import { useState, useEffect } from 'react';
import { Plus, Filter, Search, Settings, Eye, Phone, MessageCircle, ArrowRight, Clock, AlertTriangle, CheckCircle, XCircle, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { OrderModal } from '@/components/OrderModal';
import { OrderDetailModal } from '@/components/OrderDetailModal';

interface Order {
  id: string;
  customerName: string;
  phone: string;
  amount: number;
  product: string;
  quantity: number;
  source: string;
  agent: string;
  agentRating: number;
  time: string;
  status: string;
  labels: string[];
  state: string;
  abandonmentCount: number;
  assignmentTime: number; // seconds since assignment
  chatStatus: 'sending' | 'sent' | 'failed' | 'reply' | 'blocked';
  assignmentReason: string;
  telesalesAssigned: boolean;
}

const columns = [
  { id: 'received', title: 'Order Received', color: 'bg-blue-50 border-blue-200', count: 12 },
  { id: 'telesales', title: 'Assigned to TeleSales', color: 'bg-orange-50 border-orange-200', count: 8 },
  { id: 'delivery', title: 'Assigned to Delivery Agent', color: 'bg-purple-50 border-purple-200', count: 15 },
  { id: 'payment', title: 'Payment Received', color: 'bg-green-50 border-green-200', count: 23 },
  { id: 'delivered', title: 'Order Delivered', color: 'bg-emerald-50 border-emerald-200', count: 45 },
  { id: 'cancelled', title: 'Order Cancelled', color: 'bg-red-50 border-red-200', count: 3 },
];

const sampleOrders: Order[] = [
  {
    id: '1',
    customerName: 'Adebayo Johnson',
    phone: '+234 903 456 7890',
    amount: 32750,
    product: 'SELF LOVE PLUS',
    quantity: 2,
    source: 'Facebook Ads',
    agent: 'Manual Review',
    agentRating: 0,
    time: '11:46 AM',
    status: 'received',
    labels: ['extreme-risk'],
    state: 'Lagos State',
    abandonmentCount: 3,
    assignmentTime: 35,
    chatStatus: 'blocked',
    assignmentReason: 'Manual review required',
    telesalesAssigned: false
  },
  {
    id: '2',
    customerName: 'Fatima Abubakar',
    phone: '+234 806 123 4567',
    amount: 66750,
    product: 'SELF LOVE PLUS B2GOF',
    quantity: 1,
    source: 'Instagram',
    agent: 'Sarah',
    agentRating: 4.7,
    time: '10:22 AM',
    status: 'telesales',
    labels: ['high-risk', 'repeat'],
    state: 'Abuja FCT',
    abandonmentCount: 2,
    assignmentTime: 18,
    chatStatus: 'sent',
    assignmentReason: 'High-value + beauty expertise',
    telesalesAssigned: true
  },
  {
    id: '3',
    customerName: 'Kemi Ibadan',
    phone: '+234 801 234 5678',
    amount: 45000,
    product: 'Family Bundle',
    quantity: 1,
    source: 'WhatsApp',
    agent: 'David',
    agentRating: 4.9,
    time: '09:15 AM',
    status: 'telesales',
    labels: ['caution', 'hot'],
    state: 'Ogun State',
    abandonmentCount: 1,
    assignmentTime: 12,
    chatStatus: 'sent',
    assignmentReason: 'Available + new customer focus',
    telesalesAssigned: true
  },
  {
    id: '4',
    customerName: 'Emeka Okafor',
    phone: '+234 701 987 6543',
    amount: 25000,
    product: 'Buy 1 Pomade',
    quantity: 1,
    source: 'WhatsApp',
    agent: 'Mike',
    agentRating: 4.8,
    time: '08:30 AM',
    status: 'delivery',
    labels: ['trusted', 'new'],
    state: 'Rivers State',
    abandonmentCount: 0,
    assignmentTime: 8,
    chatStatus: 'sent',
    assignmentReason: 'Normal assignment',
    telesalesAssigned: true
  }
];

const getRiskLevel = (abandonmentCount: number) => {
  if (abandonmentCount === 0) return { level: 'TRUSTED', icon: '✅', color: 'text-green-600 border-green-200', bgColor: 'bg-green-50' };
  if (abandonmentCount === 1) return { level: 'RISK¹', icon: '⚠️', color: 'text-orange-600 border-orange-200', bgColor: 'bg-orange-50' };
  if (abandonmentCount === 2) return { level: 'RISK²', icon: '🚨', color: 'text-red-600 border-red-200', bgColor: 'bg-red-50' };
  return { level: 'RISK³⁺', icon: '🔴', color: 'text-red-800 border-red-300', bgColor: 'bg-red-100' };
};

const getChatStatusIcon = (status: string) => {
  switch (status) {
    case 'sending': return '⏳ Sending...';
    case 'sent': return '✅ Sent';
    case 'failed': return '❌ Failed';
    case 'reply': return '📩 Reply Received';
    case 'blocked': return '🚫 Blocked';
    default: return '💬 Chat';
  }
};

const getAssignmentTimerColor = (seconds: number) => {
  if (seconds <= 15) return 'text-green-600';
  if (seconds <= 25) return 'text-orange-600';
  if (seconds <= 30) return 'text-red-600';
  return 'text-red-800 animate-pulse';
};

const getActionButtons = (order: Order) => {
  const risk = getRiskLevel(order.abandonmentCount);
  
  if (order.abandonmentCount >= 3) {
    return [
      { text: 'EXTREME RISK', variant: 'destructive', disabled: true },
      { text: 'Review', variant: 'outline' }
    ];
  } else if (order.abandonmentCount === 2) {
    return [
      { text: 'HIGH RISK', variant: 'destructive', disabled: true },
      { text: 'Verify', variant: 'outline' }
    ];
  } else if (order.abandonmentCount === 1) {
    return [
      { text: 'CAUTION', variant: 'secondary', disabled: true },
      { text: 'Next', variant: 'default' }
    ];
  } else {
    return [
      { text: 'TRUSTED', variant: 'default', disabled: true },
      { text: 'Next', variant: 'default' }
    ];
  }
};

export function KanbanBoard() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState(sampleOrders);

  // Simulate real-time timer updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prevOrders => 
        prevOrders.map(order => ({
          ...order,
          assignmentTime: order.assignmentTime + 1
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getOrdersForColumn = (columnId: string) => {
    return orders.filter(order => order.status === columnId);
  };

  const openOrderDetail = (order: Order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered CRM Dashboard
            </h1>
            <p className="text-slate-600 mt-1">Real-time risk assessment & telesales assignment</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 border-slate-200 focus:border-indigo-300 focus:ring-indigo-200"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-slate-200">
              <Settings className="w-4 h-4 mr-2" />
              View Options
            </Button>
            <Button onClick={() => setIsOrderModalOpen(true)} className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Order
            </Button>
          </div>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="flex-1 overflow-x-auto p-6">
        <div className="flex gap-6 h-full min-w-max">
          {columns.map((column) => (
            <div key={column.id} className="flex-1 min-w-80">
              <div className={`rounded-xl border-2 ${column.color} h-full flex flex-col`}>
                {/* Column Header */}
                <div className="p-4 border-b border-slate-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">{column.title}</h3>
                    <span className="bg-slate-100 text-slate-600 text-sm px-2 py-1 rounded-full">
                      {column.count}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1">
                    <div 
                      className="h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                      style={{ width: `${(column.count / 50) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Orders List */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {getOrdersForColumn(column.id).map((order) => {
                    const risk = getRiskLevel(order.abandonmentCount);
                    const actionButtons = getActionButtons(order);
                    
                    return (
                      <div
                        key={order.id}
                        className={`bg-white rounded-xl p-4 border-2 ${risk.color} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer ${risk.bgColor}`}
                      >
                        {/* Customer Info & Amount */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{risk.icon}</span>
                            <h4 className="font-semibold text-slate-800 truncate">{order.customerName}</h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-green-600">₦{order.amount.toLocaleString()}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openOrderDetail(order);
                              }}
                              className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4 text-slate-500" />
                            </button>
                          </div>
                        </div>

                        {/* State Location */}
                        <div className="text-sm text-slate-600 mb-2">
                          <span className="flex items-center gap-1">
                            📍 {order.state}
                          </span>
                        </div>

                        {/* Phone & Product */}
                        <div className="text-sm text-slate-600 mb-2">
                          <span className="flex items-center gap-1">
                            📱 {order.phone}
                          </span>
                        </div>

                        <div className="text-sm text-slate-700 mb-2">
                          <span className="flex items-center gap-1">
                            🛍️ {order.product} • Qty: {order.quantity}
                          </span>
                        </div>

                        {/* Source */}
                        <div className="text-sm text-slate-600 mb-3">
                          <span className="flex items-center gap-1">
                            📱 {order.source}
                          </span>
                        </div>

                        {/* Risk Level Display */}
                        <div className="text-sm font-semibold mb-2">
                          <span className={risk.color}>
                            {risk.icon} {risk.level} {order.abandonmentCount > 0 && `(${order.abandonmentCount} abandoned orders)`}
                          </span>
                        </div>

                        {/* AI Assignment Status */}
                        <div className="text-sm text-slate-600 mb-2">
                          <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-indigo-500" />
                            <span>AI Kemi: {order.telesalesAssigned ? 'Assigned ✅' : 'Manual Review'}</span>
                          </div>
                          {order.telesalesAssigned && (
                            <div className="text-xs text-slate-500 ml-6">
                              {order.assignmentReason}
                            </div>
                          )}
                        </div>

                        {/* Telesales Assignment */}
                        <div className="text-sm text-slate-600 mb-3">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-purple-500" />
                            <span>
                              TS: {order.telesalesAssigned 
                                ? `${order.agent} ${order.agentRating > 0 ? `⭐${order.agentRating}` : ''}`
                                : 'Pending approval'
                              }
                            </span>
                            {order.telesalesAssigned && (
                              <span className={`text-xs ${getAssignmentTimerColor(order.assignmentTime)}`}>
                                ({order.assignmentTime}s ago)
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Risk Badge */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${risk.color} ${risk.bgColor} border`}>
                            {risk.level}
                          </span>
                          {order.labels.includes('hot') && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 animate-pulse">
                              🔥 Hot
                            </span>
                          )}
                          {order.labels.includes('repeat') && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                              🎯 Repeat
                            </span>
                          )}
                          {order.labels.includes('new') && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                              ✨ New
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant={actionButtons[0].variant as any}
                            disabled={actionButtons[0].disabled}
                            className="flex-1 text-xs"
                          >
                            {actionButtons[0].text}
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-xs"
                          >
                            {getChatStatusIcon(order.chatStatus)}
                          </Button>
                          <Button 
                            size="sm" 
                            variant={actionButtons[1].variant as any}
                            className="text-xs"
                          >
                            {actionButtons[1].text}
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
}
