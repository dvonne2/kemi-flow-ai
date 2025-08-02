
import { TrendingUp, Users, Package, DollarSign, Clock, Star } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-slate-600 mt-1">Analytics overview and key metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-800">₦2.4M</p>
              <p className="text-xs text-green-600">+12.5% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Active Orders</p>
              <p className="text-2xl font-bold text-slate-800">67</p>
              <p className="text-xs text-blue-600">8 new today</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Customers</p>
              <p className="text-2xl font-bold text-slate-800">847</p>
              <p className="text-xs text-purple-600">92% active rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-slate-800">78.3%</p>
              <p className="text-xs text-orange-600">+5.2% improvement</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Advanced Analytics Coming Soon</h3>
        <p className="text-slate-600">Detailed charts, reports, and AI-powered insights will be available here.</p>
      </div>
    </div>
  );
}
