
import { Bot, Settings, Zap, Brain } from 'lucide-react';

export function KemiSettings() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Kemi AI Settings
        </h1>
        <p className="text-slate-600 mt-1">Configure your AI Sales Manager intelligence and automation</p>
      </div>

      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Kemi AI Configuration Panel Coming Soon</h3>
        <p className="text-slate-600">Advanced AI settings, automation rules, and intelligent workflows.</p>
      </div>
    </div>
  );
}
