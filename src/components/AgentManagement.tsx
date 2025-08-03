
import { Users, Star, TrendingUp, Clock, MapPin, Phone, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function AgentManagement() {
  const telesalesAgents = [
    {
      name: 'David Okafor',
      rating: 4.9,
      status: 'Active',
      specialties: ['High-value orders', 'Beauty products'],
      conversion: 94,
      avgAssignmentTime: 12,
      activeOrders: 8,
      location: 'Lagos'
    },
    {
      name: 'Sarah Akinola',
      rating: 4.7,
      status: 'Active',
      specialties: ['Abuja region', 'Repeat customers'],
      conversion: 87,
      avgAssignmentTime: 18,
      activeOrders: 6,
      location: 'Abuja'
    },
    {
      name: 'Mike Adebayo',
      rating: 4.8,
      status: 'Available',
      specialties: ['New customers', 'Rivers State'],
      conversion: 91,
      avgAssignmentTime: 14,
      activeOrders: 4,
      location: 'Port Harcourt'
    },
    {
      name: 'Grace Okonkwo',
      rating: 4.6,
      status: 'Busy',
      specialties: ['Risk recovery', 'Premium products'],
      conversion: 82,
      avgAssignmentTime: 22,
      activeOrders: 12,
      location: 'Enugu'
    }
  ];

  const deliveryAgents = [
    {
      name: 'Jennifer Okoro',
      rating: 4.9,
      status: 'On Route',
      zone: 'Lagos Mainland',
      vehicle: 'Motorcycle',
      currentDeliveries: 12,
      successRate: 96
    },
    {
      name: 'Emmanuel Eze',
      rating: 4.6,
      status: 'Available',
      zone: 'Victoria Island',
      vehicle: 'Van',
      currentDeliveries: 8,
      successRate: 89
    },
    {
      name: 'Blessing Adamu',
      rating: 4.8,
      status: 'Active',
      zone: 'Abuja Central',
      vehicle: 'Car',
      currentDeliveries: 6,
      successRate: 94
    },
    {
      name: 'Ahmed Hassan',
      rating: 4.5,
      status: 'On Break',
      zone: 'Ikeja',
      vehicle: 'Motorcycle',
      currentDeliveries: 0,
      successRate: 88
    }
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Agent Management
        </h1>
        <p className="text-slate-600 mt-1">TeleSales and Delivery Agent roster management</p>
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600">Total Agents</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-sm text-slate-600">Avg Rating</p>
                <p className="text-2xl font-bold">4.7</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-slate-600">Avg Conversion</p>
                <p className="text-2xl font-bold">88.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-slate-600">Avg Response</p>
                <p className="text-2xl font-bold">16.5s</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Telesales Roster */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-indigo-600" />
            Telesales Roster
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {telesalesAgents.map((agent, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{agent.name}</h3>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{agent.rating}/5.0</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          agent.status === 'Active' ? 'bg-green-100 text-green-800' :
                          agent.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {agent.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Performance
                    </Button>
                    <Button size="sm">Assign Orders</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600">Specialties:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {agent.specialties.map((specialty, i) => (
                        <span key={i} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-600">Performance:</p>
                    <p className="font-medium">{agent.conversion}% conversion rate</p>
                    <p className="text-xs text-slate-500">{agent.avgAssignmentTime}s avg assignment time</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Current Load:</p>
                    <p className="font-medium">{agent.activeOrders} active orders</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Location:</p>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <p className="font-medium">{agent.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Delivery Agents Roster */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Delivery Agent Roster
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deliveryAgents.map((agent, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{agent.name}</h3>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{agent.rating}/5.0</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          agent.status === 'On Route' ? 'bg-blue-100 text-blue-800' :
                          agent.status === 'Available' ? 'bg-green-100 text-green-800' :
                          agent.status === 'Active' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {agent.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Track</Button>
                    <Button variant="outline" size="sm">Assign Route</Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600">Zone:</p>
                    <p className="font-medium">{agent.zone}</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Vehicle:</p>
                    <p className="font-medium">{agent.vehicle}</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Current Deliveries:</p>
                    <p className="font-medium">{agent.currentDeliveries}</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Success Rate:</p>
                    <p className="font-medium text-green-600">{agent.successRate}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
