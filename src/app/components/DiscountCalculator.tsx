import { useState } from 'react';
import { Tag } from 'lucide-react';

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [result, setResult] = useState<{ finalPrice: number; savedAmount: number } | null>(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const disc = parseFloat(discount);

    if (isNaN(price) || isNaN(disc)) {
      setResult(null);
      return;
    }

    const savedAmount = (price * disc) / 100;
    const finalPrice = price - savedAmount;

    setResult({ finalPrice, savedAmount });
  };

  const clearInputs = () => {
    setOriginalPrice('');
    setDiscount('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg text-gray-900">Calculadora de Desconto</h3>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-xl text-gray-900 mb-6">Calcule o preço com desconto</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Preço Original (R$)</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="Ex: 500"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Desconto (%)</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Ex: 20"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={calculateDiscount}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Calcular Desconto
          </button>
          <button
            onClick={clearInputs}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Limpar
          </button>
        </div>

        {result !== null && (
          <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-purple-200">
                <span className="text-sm text-purple-700">Preço Original</span>
                <span className="text-lg text-purple-900">R$ {parseFloat(originalPrice).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-purple-200">
                <span className="text-sm text-purple-700">Você Economiza</span>
                <span className="text-lg text-purple-900">R$ {result.savedAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-purple-700">Preço Final</span>
                <span className="text-3xl text-purple-900">R$ {result.finalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
