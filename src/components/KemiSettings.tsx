
import { Bot, Settings, Zap, Brain, Target, MessageSquare, CreditCard, BarChart3, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function KemiSettings() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Kemi AI Settings
        </h1>
        <p className="text-slate-600 mt-1">Configure your AI Sales Manager intelligence and automation</p>
      </div>

      {/* AI Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-sm text-slate-600">Assignment Success</p>
                <p className="text-2xl font-bold">97.3%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600">Avg Assignment Time</p>
                <p className="text-2xl font-bold">14.2s</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-slate-600">Chat Response Rate</p>
                <p className="text-2xl font-bold">89%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-slate-600">Recovery Rate</p>
                <p className="text-2xl font-bold">67%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignment Logic Configuration */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            AI Assignment Logic Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* High-Value Orders */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold flex items-center gap-2">
                  🎯 High-Value Orders (&gt;₦50,000)
                </h3>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <p className="text-sm text-slate-600 mb-2">Senior agents only (4.8+ rating)</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Currently: 4.8+ rating required</span>
                <span className="text-slate-600">Response time target: 15 seconds</span>
              </div>
            </div>

            {/* Risk Level Assignments */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold flex items-center gap-2">
                  🚨 RISK² Customer Handling
                </h3>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <p className="text-sm text-slate-600 mb-2">Experienced agents (4.5+ rating)</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Verification required</span>
                <span className="text-slate-600">Special handling protocol active</span>
              </div>
            </div>

            {/* Recovery Specialists */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold flex items-center gap-2">
                  🔴 RISK³ Recovery Handling
                </h3>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <p className="text-sm text-slate-600 mb-2">Specialist agents with recovery training</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Prepayment protocol</span>
                <span className="text-slate-600">Auto bank details sent</span>
              </div>
            </div>

            {/* Geographic Priority */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold flex items-center gap-2">
                  📍 Geographic Priority Matching
                </h3>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <p className="text-sm text-slate-600 mb-2">Match agents to customer regions when possible</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Regional expertise active</span>
                <span className="text-slate-600">Lagos, Abuja, Rivers specialized</span>
              </div>
            </div>

            {/* Response Time Goals */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold flex items-center gap-2">
                  ⏱️ Response Time Goals
                </h3>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <p className="text-sm text-slate-600 mb-2">Target: 30-second assignment, 2-minute chat response</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Assignment Target (30s)</span>
                  <span className="text-green-600">Current avg: 14.2s ✅</span>
                </div>
                <Progress value={47} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Chat Response Target (2min)</span>
                  <span className="text-green-600">Current avg: 1.3min ✅</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auto-Chat Templates */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            Auto-Chat Templates Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    ✅ TRUSTED Customers
                  </h3>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "Hello [Name]! Thank you for your order. We're processing it now and will update you shortly. 😊"
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    ⚠️ RISK¹ Customers
                  </h3>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "Hello [Name]! We have your order. Please confirm your delivery details to ensure smooth processing. 📍"
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    🚨 RISK² Customers
                  </h3>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "Hello [Name]! To process your order quickly, please verify your phone number and delivery address. ✅"
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    🔴 RISK³ Customers
                  </h3>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "Hello [Name]! Due to previous cancellations, please transfer ₦[Amount] to proceed. Bank details below: 💳"
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bank Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-600" />
            Bank Account Settings (For RISK³ Recovery)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Primary Business Account</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Account Name:</span>
                    <span className="font-medium">Vital Vida Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Account Number:</span>
                    <span className="font-medium">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Bank:</span>
                    <span className="font-medium">GTBank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sort Code:</span>
                    <span className="font-medium">058152</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Recovery Settings</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Prepayment Required:</span>
                    <span className="font-medium text-red-600">RISK³ customers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Recovery Threshold:</span>
                    <span className="font-medium">3 successful orders</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Auto-restore POD:</span>
                    <span className="font-medium text-green-600">After REPEAT³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Payment Verification:</span>
                    <span className="font-medium">Manual review</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">Edit Account Details</Button>
              <Button variant="outline" size="sm">Update Recovery Rules</Button>
              <Button size="sm">Test Payment Flow</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
