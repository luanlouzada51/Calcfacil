import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export function MarginCalculator() {
  const [activeTab, setActiveTab] = useState('margin');
  const [cost, setCost] = useState('');
  const [price, setPrice] = useState('');
  const [margin, setMargin] = useState('');
  const [result, setResult] = useState<{ value: number; percentage?: number } | null>(null);

  const calculate = () => {
    const costNum = parseFloat(cost);
    const priceNum = parseFloat(price);
    const marginNum = parseFloat(margin);

    if (activeTab === 'margin') {
      if (isNaN(costNum) || isNaN(priceNum)) {
        setResult(null);
        return;
      }
      const profit = priceNum - costNum;
      const marginPercentage = (profit / priceNum) * 100;
      const markupPercentage = (profit / costNum) * 100;
      setResult({ value: profit, percentage: marginPercentage });
    } else if (activeTab === 'price') {
      if (isNaN(costNum) || isNaN(marginNum)) {
        setResult(null);
        return;
      }
      const salePrice = costNum / (1 - marginNum / 100);
      setResult({ value: salePrice });
    }
  };

  const clearInputs = () => {
    setCost('');
    setPrice('');
    setMargin('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
          <Tabs.Trigger
            value="margin"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-5 h-5" />
              <span>Calcular Margem</span>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="price"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-5 h-5" />
              <span>Calcular Preço</span>
            </div>
          </Tabs.Trigger>
        </Tabs.List>

        <div className="p-6 sm:p-8">
          <Tabs.Content value="margin">
            <h3 className="text-xl text-gray-900 mb-6">Calcular Margem de Lucro</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Custo (R$)</label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="Ex: 100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Preço de Venda (R$)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Ex: 150"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="price">
            <h3 className="text-xl text-gray-900 mb-6">Calcular Preço de Venda</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Custo (R$)</label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="Ex: 100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Margem Desejada (%)</label>
                <input
                  type="number"
                  value={margin}
                  onChange={(e) => setMargin(e.target.value)}
                  placeholder="Ex: 30"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <div className="flex gap-3 mt-8">
            <button
              onClick={calculate}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Calcular
            </button>
            <button
              onClick={clearInputs}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Limpar
            </button>
          </div>

          {result !== null && (
            <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="text-center">
                {activeTab === 'margin' && (
                  <>
                    <p className="text-sm text-orange-700 mb-2">Margem de Lucro</p>
                    <p className="text-4xl text-orange-900">{result.percentage?.toFixed(2)}%</p>
                    <p className="text-sm text-orange-700 mt-3">Lucro: R$ {result.value.toFixed(2)}</p>
                  </>
                )}
                {activeTab === 'price' && (
                  <>
                    <p className="text-sm text-orange-700 mb-2">Preço de Venda</p>
                    <p className="text-4xl text-orange-900">R$ {result.value.toFixed(2)}</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </Tabs.Root>
    </div>
  );
}
