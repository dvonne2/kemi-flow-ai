
import { BarChart3, TrendingUp, PieChart, Activity, DollarSign, Users, ShoppingCart, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Reports() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Reports
        </h1>
        <p className="text-slate-600 mt-1">Detailed analytics and business intelligence</p>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-slate-600">Monthly Revenue</p>
                <p className="text-2xl font-bold">₦2.4M</p>
                <p className="text-xs text-green-600">+12.5% vs last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600">Customer LTV</p>
                <p className="text-2xl font-bold">₦18,450</p>
                <p className="text-xs text-blue-600">Average lifetime value</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-slate-600">Order Volume</p>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-purple-600">This month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-sm text-slate-600">Recovery Rate</p>
                <p className="text-2xl font-bold">67%</p>
                <p className="text-xs text-orange-600">RISK³ to TRUSTED</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Analytics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Revenue Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Revenue by Product Category */}
            <div>
              <h3 className="font-semibold mb-4">Revenue by Product Category</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Beauty Products</span>
                  <span className="text-sm font-medium">₦1.44M (60%)</span>
                </div>
                <Progress value={60} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Family Bundles</span>
                  <span className="text-sm font-medium">₦720K (30%)</span>
                </div>
                <Progress value={30} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Individual Items</span>
                  <span className="text-sm font-medium">₦240K (10%)</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
            </div>

            {/* Revenue by Marketing Channel */}
            <div>
              <h3 className="font-semibold mb-4">Revenue by Marketing Channel</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Facebook Ads</h4>
                  <p className="text-2xl font-bold text-blue-600">₦1.2M</p>
                  <p className="text-sm text-blue-600">50% of total revenue</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs">
                      <span>CAC: ₦2,340</span>
                      <span>ROAS: 4.2x</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800 mb-2">Instagram</h4>
                  <p className="text-2xl font-bold text-purple-600">₦720K</p>
                  <p className="text-sm text-purple-600">30% of total revenue</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs">
                      <span>CAC: ₦1,980</span>
                      <span>ROAS: 5.1x</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">WhatsApp</h4>
                  <p className="text-2xl font-bold text-green-600">₦480K</p>
                  <p className="text-sm text-green-600">20% of total revenue</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs">
                      <span>CAC: ₦890</span>
                      <span>ROAS: 7.8x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Analytics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Customer Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Risk Level Distribution */}
            <div>
              <h3 className="font-semibold mb-4">Customer Risk Distribution</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">TRUSTED</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">645</p>
                    <p className="text-xs text-green-600">76%</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium">RISK¹</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">127</p>
                    <p className="text-xs text-yellow-600">15%</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">RISK²</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">59</p>
                    <p className="text-xs text-orange-600">7%</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium">RISK³</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">16</p>
                    <p className="text-xs text-red-600">2%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat Customer Progression */}
            <div>
              <h3 className="font-semibold mb-4">Repeat Customer Progression</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">REPEAT¹ (2nd order)</span>
                  <div className="text-right">
                    <p className="font-bold">234</p>
                    <p className="text-xs text-blue-600">28% conversion</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">REPEAT² (3rd order)</span>
                  <div className="text-right">
                    <p className="font-bold">156</p>
                    <p className="text-xs text-purple-600">67% retention</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                  <span className="text-sm font-medium">REPEAT³+ (loyal)</span>
                  <div className="text-right">
                    <p className="font-bold">89</p>
                    <p className="text-xs text-indigo-600">57% progression</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Management Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            Risk Management & Recovery Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recovery Success Stories */}
            <div>
              <h3 className="font-semibold mb-4">Recovery Success Stories</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-red-50 to-green-50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">RISK³ → TRUSTED Conversions</span>
                    <span className="text-sm font-bold text-green-600">23 customers</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Success Rate: 67%</span>
                    <span>Avg Recovery Time: 45 days</span>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Active Recovery Cases</span>
                    <span className="text-sm font-bold text-orange-600">34 customers</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>In Progress: 21</span>
                    <span>Payment Pending: 13</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Revenue Recovered</span>
                    <span className="text-sm font-bold text-blue-600">₦1.2M</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>This Quarter</span>
                    <span>ROI: 340%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Performance */}
            <div>
              <h3 className="font-semibold mb-4">Operational Performance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm">Order Processing Speed</span>
                  <span className="text-sm font-medium text-green-600">14.2s avg</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm">Delivery Success Rate</span>
                  <span className="text-sm font-medium text-blue-600">94.7%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm">AI Assignment Accuracy</span>
                  <span className="text-sm font-medium text-purple-600">97.3%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm">Customer Satisfaction</span>
                  <span className="text-sm font-medium text-green-600">4.7/5.0</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm">Prepayment Compliance</span>
                  <span className="text-sm font-medium text-orange-600">78.5%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
