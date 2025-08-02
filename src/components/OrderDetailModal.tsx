
import { X, Phone, MessageCircle, Mail, MapPin, Package, Clock, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface OrderDetailModalProps {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}

const stageProgress = [
  { id: 'received', title: 'Order Received', completed: true, active: false },
  { id: 'telesales', title: 'Assigned to TeleSales', completed: true, active: true },
  { id: 'delivery', title: 'Assigned to Delivery', completed: false, active: false },
  { id: 'payment', title: 'Payment Received', completed: false, active: false },
  { id: 'delivered', title: 'Order Delivered', completed: false, active: false },
];

const customerHistory = [
  { date: '2024-01-15', product: 'SELF LOVE PLUS', amount: 32750, status: 'Delivered' },
  { date: '2023-11-20', product: 'Buy 1 Pomade', amount: 25000, status: 'Delivered' },
  { date: '2023-09-10', product: 'SELF LOVE B2GOF', amount: 52750, status: 'Delivered' },
];

const communicationHistory = [
  { time: '11:46 AM', type: 'Call', agent: 'David', note: 'Customer confirmed order details' },
  { time: '11:30 AM', type: 'WhatsApp', agent: 'Kemi AI', note: 'Automated welcome message sent' },
  { time: '11:25 AM', type: 'System', agent: 'Kemi AI', note: 'Order automatically assigned to David' },
];

export function OrderDetailModal({ order, isOpen, onClose }: OrderDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Order Details</h2>
              <p className="text-slate-600 mt-1">Order #{order.id} • {order.customerName}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-slate-100">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Progress Tracker */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
            <h3 className="font-semibold text-slate-800 mb-4">Order Progress</h3>
            <div className="flex items-center justify-between">
              {stageProgress.map((stage, index) => (
                <div key={stage.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    stage.completed
                      ? 'bg-green-500 text-white'
                      : stage.active
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {stage.completed ? '✓' : index + 1}
                  </div>
                  <div className="ml-2 text-sm">
                    <div className={`font-medium ${
                      stage.completed || stage.active ? 'text-slate-800' : 'text-slate-500'
                    }`}>
                      {stage.title}
                    </div>
                  </div>
                  {index < stageProgress.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      stage.completed ? 'bg-green-500' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Customer Information */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  Customer Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-600">Name</label>
                    <p className="font-semibold text-slate-800">{order.customerName}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Phone</label>
                    <p className="font-semibold text-slate-800">{order.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Source</label>
                    <p className="font-semibold text-slate-800">{order.source}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-indigo-500" />
                  Order Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Product</span>
                    <span className="font-semibold">{order.product}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Quantity</span>
                    <span className="font-semibold">{order.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Amount</span>
                    <span className="font-bold text-green-600">₦{order.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Order Time</span>
                    <span className="font-semibold">{order.time}</span>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  Kemi AI Insights
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">High Conversion Probability</p>
                      <p className="text-xs text-slate-600">Based on customer history and behavior patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">Follow-up Recommended</p>
                      <p className="text-xs text-slate-600">Best time: 2-4 PM based on previous responses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">Upsell Opportunity</p>
                      <p className="text-xs text-slate-600">Customer likely to purchase complementary products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Agent Assignment */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-indigo-500" />
                  Agent Assignment
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {order.agent[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{order.agent}</p>
                      <p className="text-sm text-slate-600 flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        {order.agentRating} Rating
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>• Assigned automatically by Kemi AI</p>
                    <p>• Based on workload and performance metrics</p>
                    <p>• Specialized in high-value orders</p>
                  </div>
                </div>
              </div>

              {/* Communication History */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-500" />
                  Communication History
                </h3>
                <div className="space-y-3">
                  {communicationHistory.map((comm, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="text-xs text-slate-500 mt-1">{comm.time}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-800">{comm.type}</span>
                          <span className="text-xs text-slate-500">by {comm.agent}</span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">{comm.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Order History */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-indigo-500" />
                  Previous Orders
                </h3>
                <div className="space-y-3">
                  {customerHistory.map((hist, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-slate-800">{hist.product}</p>
                        <p className="text-xs text-slate-500">{hist.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">₦{hist.amount.toLocaleString()}</p>
                        <p className="text-xs text-green-600">{hist.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">Customer LTV: ₦110,500</p>
                  <p className="text-xs text-blue-600">Average order value: ₦36,833</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-6">
          <div className="flex gap-3 justify-end">
            <Button variant="outline">Edit Order</Button>
            <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
              Cancel Order
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600">
              Move to Next Stage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
