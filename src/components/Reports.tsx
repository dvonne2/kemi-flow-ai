
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';

export function Reports() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Reports
        </h1>
        <p className="text-slate-600 mt-1">Detailed analytics and business intelligence</p>
      </div>

      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Advanced Reporting Suite Coming Soon</h3>
        <p className="text-slate-600">Comprehensive analytics, performance metrics, and business insights.</p>
      </div>
    </div>
  );
}
