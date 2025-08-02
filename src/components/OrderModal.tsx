
import { useState } from 'react';
import { X, Package, MapPin, CreditCard, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = [
  { id: 'self-love-plus', name: 'SELF LOVE PLUS', price: 32750 },
  { id: 'self-love-b2gof', name: 'SELF LOVE B2GOF', price: 52750 },
  { id: 'self-love-plus-b2gof', name: 'SELF LOVE PLUS B2GOF', price: 66750 },
  { id: 'self-love-return', name: 'SELF LOVE RETURN', price: 32750 },
  { id: 'pomade', name: 'Buy 1 Pomade', price: 25000 },
  { id: 'conditioner', name: 'Buy 1 Conditioner', price: 25000 },
  { id: 'family-saves', name: 'FAMILY SAVES', price: 215750 },
];

const sources = [
  'Facebook Ads', 'Instagram', 'WhatsApp', 'Google Ads', 'Referral', 'Website', 'TikTok', 'Other'
];

const deliveryOptions = [
  { id: 'same-day', name: 'Same-Day Delivery', price: 4000, popular: false },
  { id: 'express', name: 'Express Delivery', price: 3500, popular: true },
  { id: 'standard', name: 'Standard Delivery', price: 2500, popular: false },
];

const paymentMethods = [
  { id: 'pay-on-delivery', name: 'Pay on Delivery', description: 'Most Popular' },
  { id: 'pay-before', name: 'Pay Before Delivery', description: 'Secure' },
];

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
  'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('express');
  const [selectedPayment, setSelectedPayment] = useState('pay-on-delivery');

  if (!isOpen) return null;

  const selectedProductData = products.find(p => p.id === selectedProduct);
  const selectedDeliveryData = deliveryOptions.find(d => d.id === selectedDelivery);
  const totalAmount = (selectedProductData?.price || 0) + (selectedDeliveryData?.price || 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Create New Order
              </h2>
              <p className="text-slate-600 mt-1">Add a new customer order to the system</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-slate-100">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-8">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-slate-700 font-medium">
                  Full Name *
                </Label>
                <Input id="fullName" placeholder="Enter customer's full name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Email Address
                </Label>
                <Input id="email" type="email" placeholder="customer@example.com" className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-slate-700 font-medium">
                Phone Number *
              </Label>
              <div className="flex gap-2 mt-1">
                <Select defaultValue="+234">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+234">+234</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="903 456 7890" className="flex-1" />
              </div>
            </div>
          </div>

          {/* Location & Delivery */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="text-white w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Location & Delivery</h3>
            </div>

            <div>
              <Label htmlFor="state" className="text-slate-700 font-medium">
                State *
              </Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="address" className="text-slate-700 font-medium">
                Full Delivery Address *
              </Label>
              <Textarea
                id="address"
                placeholder="Enter complete delivery address including landmarks"
                className="mt-1 h-24"
              />
            </div>
          </div>

          {/* Product Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Package className="text-white w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Product Selection</h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {products.map((product) => (
                <label
                  key={product.id}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedProduct === product.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="product"
                      value={product.id}
                      checked={selectedProduct === product.id}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="font-medium text-slate-800">{product.name}</span>
                  </div>
                  <span className="font-bold text-green-600">₦{product.price.toLocaleString()}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">+</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Additional Options</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="promoCode" className="text-slate-700 font-medium">
                  Promo Code
                </Label>
                <Input id="promoCode" placeholder="Enter promo code" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="source" className="text-slate-700 font-medium">
                  How did you hear about us?
                </Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    {sources.map((source) => (
                      <SelectItem key={source} value={source.toLowerCase().replace(' ', '-')}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Delivery Options */}
            <div>
              <Label className="text-slate-700 font-medium flex items-center gap-2 mb-3">
                <Truck className="w-4 h-4" />
                Delivery Options
              </Label>
              <div className="space-y-2">
                {deliveryOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedDelivery === option.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        value={option.id}
                        checked={selectedDelivery === option.id}
                        onChange={(e) => setSelectedDelivery(e.target.value)}
                        className="w-4 h-4 text-indigo-600"
                      />
                      <span className="font-medium text-slate-800">{option.name}</span>
                      {option.popular && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="font-semibold text-slate-600">₦{option.price.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <Label className="text-slate-700 font-medium flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4" />
                Payment Method
              </Label>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedPayment === method.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="w-4 h-4 text-indigo-600"
                      />
                      <span className="font-medium text-slate-800">{method.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{method.description}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          {selectedProductData && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <h4 className="font-semibold text-slate-800 mb-4">Order Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">{selectedProductData.name}</span>
                  <span className="font-semibold">₦{selectedProductData.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">{selectedDeliveryData?.name}</span>
                  <span className="font-semibold">₦{selectedDeliveryData?.price.toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-slate-800">Total Amount</span>
                    <span className="text-green-600">₦{totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-6">
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
              Create Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
