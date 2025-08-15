import { useState, useEffect } from 'react';
import { Plus, Filter, Search, Settings, Eye, Phone, MessageCircle, ArrowRight, Clock, AlertTriangle, CheckCircle, XCircle, User, Bot, CreditCard, DollarSign } from 'lucide-react';
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
  repeatCount: number;
  assignmentTime: number;
  chatStatus: 'sending' | 'sent' | 'failed' | 'reply' | 'blocked';
  assignmentReason: string;
  telesalesAssigned: boolean;
  prepaymentRequired: boolean;
  prepaymentStatus: 'pending' | 'sent' | 'confirmed' | 'none';
  recoveryMode: boolean;
  recoveryOrdersCompleted: number;
}

const columns = [
  { id: 'received', title: 'Order Received', color: 'bg-blue-50 border-blue-200', count: 15 },
  { id: 'telesales', title: 'Assigned to TeleSales', color: 'bg-orange-50 border-orange-200', count: 12 },
  { id: 'delivery', title: 'Assigned to Delivery Agent', color: 'bg-purple-50 border-purple-200', count: 18 },
  { id: 'payment', title: 'Payment Received', color: 'bg-green-50 border-green-200', count: 28 },
  { id: 'delivered', title: 'Order Delivered', color: 'bg-emerald-50 border-emerald-200', count: 52 },
  { id: 'cancelled', title: 'Order Cancelled', color: 'bg-red-50 border-red-200', count: 4 },
];

const sampleOrders: Order[] = [
  // EXTREME RISK - Requesting Prepayment
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
    abandonmentCount: 4,
    repeatCount: 0,
    assignmentTime: 45,
    chatStatus: 'sent',
    assignmentReason: 'Prepayment request sent',
    telesalesAssigned: false,
    prepaymentRequired: true,
    prepaymentStatus: 'sent',
    recoveryMode: false,
    recoveryOrdersCompleted: 0
  },
  // EXTREME RISK - In Recovery Mode (REPEAT¹)
  {
    id: '2',
    customerName: 'Funmi Adebayo',
    phone: '+234 805 234 5678',
    amount: 28500,
    product: 'Beauty Bundle',
    quantity: 1,
    source: 'Instagram',
    agent: 'David',
    agentRating: 4.9,
    time: '10:30 AM',
    status: 'telesales',
    labels: ['extreme-risk', 'recovery', 'prepaid'],
    state: 'Ogun State',
    abandonmentCount: 3,
    repeatCount: 1,
    assignmentTime: 15,
    chatStatus: 'sent',
    assignmentReason: 'RISK³ customer - payment confirmed',
    telesalesAssigned: true,
    prepaymentRequired: true,
    prepaymentStatus: 'confirmed',
    recoveryMode: true,
    recoveryOrdersCompleted: 1
  },
  // RISK³ Customer Near Recovery (REPEAT³)
  {
    id: '3',
    customerName: 'Grace Okonkwo',
    phone: '+234 807 345 6789',
    amount: 45000,
    product: 'Premium Kit',
    quantity: 1,
    source: 'WhatsApp',
    agent: 'Sarah',
    agentRating: 4.7,
    time: '09:45 AM',
    status: 'telesales',
    labels: ['extreme-risk', 'recovery', 'prepaid', 'final-recovery'],
    state: 'Anambra State',
    abandonmentCount: 3,
    repeatCount: 3,
    assignmentTime: 22,
    chatStatus: 'sent',
    assignmentReason: 'RISK³ recovery - final recovery order',
    telesalesAssigned: true,
    prepaymentRequired: true,
    prepaymentStatus: 'confirmed',
    recoveryMode: true,
    recoveryOrdersCompleted: 3
  },
  // HIGH RISK with REPEAT
  {
    id: '4',
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
    repeatCount: 3,
    assignmentTime: 18,
    chatStatus: 'sent',
    assignmentReason: 'High-value + beauty expertise',
    telesalesAssigned: true,
    prepaymentRequired: false,
    prepaymentStatus: 'none',
    recoveryMode: false,
    recoveryOrdersCompleted: 0
  },
  // CAUTION with Hot label
  {
    id: '5',
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
    repeatCount: 0,
    assignmentTime: 12,
    chatStatus: 'sent',
    assignmentReason: 'Available + new customer focus',
    telesalesAssigned: true,
    prepaymentRequired: false,
    prepaymentStatus: 'none',
    recoveryMode: false,
    recoveryOrdersCompleted: 0
  },
  // TRUSTED REPEAT Customer
  {
    id: '6',
    customerName: 'Mrs. Chioma Okeke',
    phone: '+234 803 567 8901',
    amount: 85000,
    product: 'Complete Beauty Set',
    quantity: 1,
    source: 'WhatsApp',
    agent: 'Mike',
    agentRating: 4.8,
    time: '08:45 AM',
    status: 'delivery',
    labels: ['trusted', 'repeat', 'vip'],
    state: 'Enugu State',
    abandonmentCount: 0,
    repeatCount: 5,
    assignmentTime: 5,
    chatStatus: 'sent',
    assignmentReason: 'VIP customer - priority assignment',
    telesalesAssigned: true,
    prepaymentRequired: false,
    prepaymentStatus: 'none',
    recoveryMode: false,
    recoveryOrdersCompleted: 0
  },
  // TRUSTED NEW Customer
  {
    id: '7',
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
    repeatCount: 0,
    assignmentTime: 8,
    chatStatus: 'sent',
    assignmentReason: 'Normal assignment',
    telesalesAssigned: true,
    prepaymentRequired: false,
    prepaymentStatus: 'none',
    recoveryMode: false,
    recoveryOrdersCompleted: 0
  },
  // Former RISK³ Customer Now TRUSTED (Recovery Complete)
  {
    id: '8',
    customerName: 'Blessing Nwosu',
    phone: '+234 806 789 0123',
    amount: 38500,
    product: 'Hair Care Bundle',
    quantity: 1,
    source: 'Instagram',
    agent: 'David',
    agentRating: 4.9,
    time: '11:15 AM',
    status: 'payment',
    labels: ['trusted', 'repeat', 'recovered'],
    state: 'Imo State',
    abandonmentCount: 3,
    repeatCount: 4,
    assignmentTime: 6,
    chatStatus: 'sent',
    assignmentReason: 'Successfully recovered customer',
    telesalesAssigned: true,
    prepaymentRequired: false,
    prepaymentStatus: 'none',
    recoveryMode: false,
    recoveryOrdersCompleted: 3
  }
];

const getRiskLevel = (abandonmentCount: number, repeatCount: number, recoveryMode: boolean) => {
  if (abandonmentCount === 0) {
    if (repeatCount > 0) {
      return { level: 'TRUSTED', icon: '✅', color: 'text-green-600 border-green-200', bgColor: 'bg-green-50' };
    }
    return { level: 'TRUSTED', icon: '✅', color: 'text-green-600 border-green-200', bgColor: 'bg-green-50' };
  }
  if (abandonmentCount === 1) return { level: 'RISK¹', icon: '⚠️', color: 'text-orange-600 border-orange-200', bgColor: 'bg-orange-50' };
  if (abandonmentCount === 2) return { level: 'RISK²', icon: '🚨', color: 'text-red-600 border-red-200', bgColor: 'bg-red-50' };
  if (recoveryMode) {
    return { level: 'RISK³', icon: '🔴', color: 'text-red-800 border-red-300', bgColor: 'bg-red-100' };
  }
  return { level: 'RISK³⁺', icon: '🔴', color: 'text-red-800 border-red-300', bgColor: 'bg-red-100' };
};

const getRepeatBadge = (repeatCount: number) => {
  if (repeatCount === 0) return null;
  const superscript = repeatCount === 1 ? '¹' : repeatCount === 2 ? '²' : repeatCount === 3 ? '³' : `${repeatCount}⁺`;
  return {
    text: `REPEAT${superscript}`,
    color: 'text-blue-600 border-blue-200 bg-blue-50'
  };
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

const getPrepaymentStatus = (order: Order) => {
  if (!order.prepaymentRequired) return null;
  
  switch (order.prepaymentStatus) {
    case 'pending':
      return { text: '💰 Prepayment Required', color: 'text-red-600 bg-red-50' };
    case 'sent':
      return { text: '📱 Bank Details Sent', color: 'text-orange-600 bg-orange-50' };
    case 'confirmed':
      return { text: '💰 PREPAID', color: 'text-green-600 bg-green-50' };
    default:
      return null;
  }
};

const getActionButtons = (order: Order) => {
  const risk = getRiskLevel(order.abandonmentCount, order.repeatCount, order.recoveryMode);
  
  if (order.abandonmentCount >= 3 && !order.recoveryMode) {
    // EXTREME RISK - Prepayment Required
    return [
      { text: '🔴 EXTREME RISK', variant: 'destructive', disabled: true },
      { text: '💰 Prepayment Required', variant: 'outline' },
      { text: '⏳ Awaiting Payment', variant: 'secondary' }
    ];
  } else if (order.recoveryMode && order.recoveryOrdersCompleted === 3) {
    // Final Recovery Order
    return [
      { text: '🔴 RISK³', variant: 'destructive', disabled: true },
      { text: '🎯 Final Recovery Order', variant: 'default' },
      { text: '✅ Process Order', variant: 'default' }
    ];
  } else if (order.recoveryMode) {
    // Recovery Mode
    return [
      { text: '🔴 RISK³', variant: 'destructive', disabled: true },
      { text: '💰 PREPAID', variant: 'default' },
      { text: '✅ Process Order', variant: 'default' }
    ];
  } else if (order.abandonmentCount === 2) {
    return [
      { text: '🚨 HIGH RISK', variant: 'destructive', disabled: true },
      { text: 'Verify', variant: 'outline' }
    ];
  } else if (order.abandonmentCount === 1) {
    return [
      { text: '⚠️ CAUTION', variant: 'secondary', disabled: true },
      { text: 'Next', variant: 'default' }
    ];
  } else {
    return [
      { text: '✅ TRUSTED', variant: 'default', disabled: true },
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
                    const risk = getRiskLevel(order.abandonmentCount, order.repeatCount, order.recoveryMode);
                    const repeat = getRepeatBadge(order.repeatCount);
                    const prepayment = getPrepaymentStatus(order);
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
                          {order.recoveryMode && (
                            <div className="text-xs text-slate-500 ml-6">
                              Recovery: {order.recoveryOrdersCompleted}/3 completed
                            </div>
                          )}
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
                                ? `${order.agent} ${order.agentRating > 0 ? `${order.agentRating}/5.0⭐` : ''}`
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

                        {/* Risk & Repeat Badges */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${risk.color} ${risk.bgColor} border`}>
                            {risk.level}
                          </span>
                          {repeat && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${repeat.color} border`}>
                              🔄 {repeat.text}
                            </span>
                          )}
                          {prepayment && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${prepayment.color} border`}>
                              {prepayment.text}
                            </span>
                          )}
                          {order.labels.includes('hot') && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 animate-pulse border border-red-200">
                              🔥 Hot
                            </span>
                          )}
                          {order.labels.includes('vip') && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
                              💎 VIP
                            </span>
                          )}
                          {order.labels.includes('new') && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                              ✨ New
                            </span>
                          )}
                          {order.labels.includes('recovered') && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
                              🎯 Recovered
                            </span>
                          )}
                        </div>

                        {/* Action Buttons - With Chat Status Inline */}
                        <div className="flex gap-1 flex-wrap">
                          {actionButtons.map((button, index) => (
                            <Button 
                              key={index}
                              size="sm" 
                              variant={button.variant as any}
                              disabled={button.disabled}
                              className="text-xs px-2 py-1 h-7 rounded-md"
                            >
                              {button.text}
                            </Button>
                          ))}
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-xs px-3 py-1 h-7 rounded-md border-slate-300 bg-white/80 hover:bg-slate-50"
                          >
                            {getChatStatusIcon(order.chatStatus)}
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
