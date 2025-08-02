
import { useState } from 'react';
import { Search, Filter, Download, Plus, Phone, MessageCircle, Mail, Eye, Star, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  ltv: number;
  orderCount: number;
  lastOrder: string;
  status: 'active' | 'at-risk' | 'vip' | 'new' | 'inactive';
  location: string;
  agent: string;
  conversionRate: number;
  labels: string[];
}

const sampleCustomers: Customer[] = [
  {
    id: '1',
    name: 'Adebayo Johnson',
    phone: '+234 903 456 7890',
    email: 'adebayo.j@gmail.com',
    ltv: 180000,
    orderCount: 7,
    lastOrder: '2 days ago',
    status: 'vip',
    location: 'Victoria Island',
    agent: 'David',
    conversionRate: 92,
    labels: ['high-value', 'repeat-customer', 'loyal']
  },
  {
    id: '2',
    name: 'Fatima Abubakar',
    phone: '+234 806 123 4567',
    email: 'fatima.ab@yahoo.com',
    ltv: 95000,
    orderCount: 3,
    lastOrder: '1 week ago',
    status: 'active',
    location: 'Abuja',
    agent: 'Sarah',
    conversionRate: 78,
    labels: ['growing', 'social-media']
  },
  {
    id: '3',
    name: 'Emeka Okafor',
    phone: '+234 701 987 6543',
    ltv: 45000,
    orderCount: 2,
    lastOrder: '3 weeks ago',
    status: 'at-risk',
    location: 'Lagos',
    agent: 'Mike',
    conversionRate: 65,
    labels: ['at-risk', 'follow-up-needed']
  },
  {
    id: '4',
    name: 'Aisha Muhammed',
    phone: '+234 813 456 7890',
    ltv: 250000,
    orderCount: 12,
    lastOrder: '1 day ago',
    status: 'vip',
    location: 'Kano',
    agent: 'David',
    conversionRate: 95,
    labels: ['vip', 'champion', 'referrer']
  }
];

const statusColors = {
  'active': 'bg-green-100 text-green-800 border-green-200',
  'at-risk': 'bg-red-100 text-red-800 border-red-200',
  'vip': 'bg-purple-100 text-purple-800 border-purple-200',
  'new': 'bg-blue-100 text-blue-800 border-blue-200',
  'inactive': 'bg-gray-100 text-gray-800 border-gray-200'
};

export function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredCustomers = sampleCustomers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalLTV = sampleCustomers.reduce((sum, customer) => sum + customer.ltv, 0);
  const activeCustomers = sampleCustomers.filter(c => c.status === 'active' || c.status === 'vip').length;
  const avgLTV = totalLTV / sampleCustomers.length;

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Customers
            </h1>
            <p className="text-slate-600 mt-1">Comprehensive customer intelligence dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total Customers</p>
                <p className="text-2xl font-bold text-slate-800">{sampleCustomers.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Active Customers</p>
                <p className="text-2xl font-bold text-slate-800">{activeCustomers}</p>
                <p className="text-xs text-green-600">{Math.round((activeCustomers/sampleCustomers.length)*100)}% Active Rate</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total LTV</p>
                <p className="text-2xl font-bold text-slate-800">₦{(totalLTV/1000000).toFixed(1)}M</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Avg LTV</p>
                <p className="text-2xl font-bold text-slate-800">₦{Math.round(avgLTV/1000)}K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-slate-200"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Customers</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="at-risk">At Risk</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Customer List */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg text-slate-800">{customer.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[customer.status]}`}>
                        {customer.status.toUpperCase()}
                      </span>
                      {customer.labels.includes('vip') && (
                        <span className="text-purple-500">💎</span>
                      )}
                      {customer.labels.includes('repeat-customer') && (
                        <span className="text-blue-500">🎯³</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        📱 {customer.phone}
                      </span>
                      <span>Last order: {customer.lastOrder}</span>
                      <span>📍 {customer.location}</span>
                      <span>👤 AM: {customer.agent}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-slate-600">LTV</p>
                    <p className="font-bold text-green-600">₦{(customer.ltv/1000).toFixed(0)}K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Orders</p>
                    <p className="font-bold text-slate-800">{customer.orderCount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Conv. Rate</p>
                    <p className="font-bold text-indigo-600">{customer.conversionRate}%</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="p-2">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600">
                      <Eye className="w-4 h-4 mr-1" />
                      View Orders
                    </Button>
                  </div>
                </div>
              </div>

              {/* Customer Intelligence Summary */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-slate-600">
                      📈 Orders every {Math.round(365 / (customer.orderCount * 2))} days
                    </span>
                    <span className="text-slate-600">
                      🤖 AI Score: {customer.conversionRate}%
                    </span>
                    {customer.status === 'at-risk' && (
                      <span className="text-red-600 font-medium">⚠️ Follow-up recommended</span>
                    )}
                    {customer.status === 'vip' && (
                      <span className="text-purple-600 font-medium">💎 VIP Treatment Activated</span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    {customer.labels.slice(0, 3).map((label, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
