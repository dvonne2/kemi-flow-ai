
import { useState } from 'react';
import { Plus, Filter, Search, Settings, Eye, Phone, MessageCircle, ArrowRight } from 'lucide-react';
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
    agent: 'David',
    agentRating: 4.9,
    time: '11:46 AM',
    status: 'received',
    labels: ['high-val', 'hot']
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
    labels: ['high-val', 'repeat-2']
  },
  {
    id: '3',
    customerName: 'Emeka Okafor',
    phone: '+234 701 987 6543',
    amount: 25000,
    product: 'Buy 1 Pomade',
    quantity: 1,
    source: 'WhatsApp',
    agent: 'Mike',
    agentRating: 4.8,
    time: '09:15 AM',
    status: 'delivery',
    labels: ['vip']
  }
];

const getLabelStyle = (label: string) => {
  const styles: { [key: string]: string } = {
    'high-val': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full',
    'repeat-2': 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs px-2 py-1 rounded-full',
    'repeat-3': 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full',
    'risk-2': 'bg-gradient-to-r from-red-400 to-red-500 text-white text-xs px-2 py-1 rounded-full',
    'hot': 'bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full animate-pulse',
    'vip': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full'
  };
  return styles[label] || 'bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full';
};

export function KanbanBoard() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getOrdersForColumn = (columnId: string) => {
    return sampleOrders.filter(order => order.status === columnId);
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
              Kanban Board
            </h1>
            <p className="text-slate-600 mt-1">AI-powered order workflow management</p>
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
                  {getOrdersForColumn(column.id).map((order) => (
                    <div
                      key={order.id}
                      className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                    >
                      {/* Customer Info & Amount */}
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800 truncate">{order.customerName}</h4>
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

                      {/* Phone & Time */}
                      <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                        <span className="flex items-center gap-1">
                          📱 {order.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          ⏰ {order.time}
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="text-sm text-slate-700 mb-2">
                        <span className="flex items-center gap-1">
                          📦 {order.product} • Qty: {order.quantity}
                        </span>
                      </div>

                      {/* Source */}
                      <div className="text-sm text-slate-600 mb-3">
                        <span className="flex items-center gap-1">
                          🎯 {order.source}
                        </span>
                      </div>

                      {/* Agent & AI Info */}
                      <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                        <span className="flex items-center gap-1">
                          👤 AM: {order.agent}⭐{order.agentRating}
                        </span>
                        <span className="flex items-center gap-1">
                          🤖 Kemi ⚡
                        </span>
                      </div>

                      {/* Labels */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {order.labels.map((label, index) => (
                          <span key={index} className={getLabelStyle(label)}>
                            {label === 'high-val' && '📊 High Val'}
                            {label === 'repeat-2' && '🎯 Repeat²'}
                            {label === 'repeat-3' && '🎯 Repeat³'}
                            {label === 'risk-2' && '⚠️ Risk²'}
                            {label === 'hot' && '🔥 Hot'}
                            {label === 'vip' && '💎 VIP'}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 text-xs">
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-xs">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Chat
                        </Button>
                        <Button size="sm" className="flex-1 text-xs bg-gradient-to-r from-indigo-500 to-purple-600">
                          <ArrowRight className="w-3 h-3 mr-1" />
                          Next
                        </Button>
                      </div>
                    </div>
                  ))}
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
