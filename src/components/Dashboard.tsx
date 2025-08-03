
import { TrendingUp, Users, Package, DollarSign, Clock, Star, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Dashboard() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-slate-600 mt-1">Analytics overview and key metrics</p>
      </div>

      {/* Top Metrics Cards */}
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

      {/* Additional Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Order Flow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              Order Flow Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Order Received</span>
                <span className="text-sm text-slate-600">156 orders</span>
              </div>
              <Progress value={100} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Assigned</span>
                <span className="text-sm text-slate-600">142 orders</span>
              </div>
              <Progress value={91} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">In Delivery</span>
                <span className="text-sm text-slate-600">89 orders</span>
              </div>
              <Progress value={57} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Completed</span>
                <span className="text-sm text-slate-600">67 orders</span>
              </div>
              <Progress value={43} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Risk Level Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Customer Risk Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">TRUSTED</span>
                </div>
                <span className="text-sm font-medium">645 (76%)</span>
              </div>
              <Progress value={76} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">RISK¹</span>
                </div>
                <span className="text-sm font-medium">127 (15%)</span>
              </div>
              <Progress value={15} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm">RISK²</span>
                </div>
                <span className="text-sm font-medium">59 (7%)</span>
              </div>
              <Progress value={7} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span className="text-sm">RISK³</span>
                </div>
                <span className="text-sm font-medium">16 (2%)</span>
              </div>
              <Progress value={2} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Telesales Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-600" />
              Top Telesales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">David Okafor</p>
                  <p className="text-xs text-slate-600">4.9/5.0 rating</p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">94% conversion</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Sarah Akinola</p>
                  <p className="text-xs text-slate-600">4.7/5.0 rating</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">87% conversion</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Mike Adebayo</p>
                  <p className="text-xs text-slate-600">4.8/5.0 rating</p>
                </div>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">91% conversion</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              AI Kemi Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Assignment Success Rate</span>
                <span className="text-sm font-medium text-green-600">97.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Average Assignment Time</span>
                <span className="text-sm font-medium text-blue-600">14.2s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Chat Response Rate</span>
                <span className="text-sm font-medium text-purple-600">89%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Recovery Success Rate</span>
                <span className="text-sm font-medium text-orange-600">67%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Revenue by Channel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Facebook Ads</span>
                <span className="text-sm font-medium">₦1.2M (50%)</span>
              </div>
              <Progress value={50} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Instagram</span>
                <span className="text-sm font-medium">₦720K (30%)</span>
              </div>
              <Progress value={30} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm">WhatsApp</span>
                <span className="text-sm font-medium">₦480K (20%)</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
