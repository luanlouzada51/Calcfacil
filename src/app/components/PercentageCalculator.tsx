import { useState } from 'react';
import { Calculator, Percent, TrendingUp, DollarSign } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export function PercentageCalculator() {
  const [activeTab, setActiveTab] = useState('percentage');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult(null);
      return;
    }

    let calculatedResult = 0;
    switch (activeTab) {
      case 'percentage':
        calculatedResult = (num1 / num2) * 100;
        break;
      case 'value':
        calculatedResult = (num1 / 100) * num2;
        break;
      case 'increase':
        calculatedResult = num2 + (num2 * num1 / 100);
        break;
      case 'decrease':
        calculatedResult = num2 - (num2 * num1 / 100);
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult);
  };

  const clearInputs = () => {
    setValue1('');
    setValue2('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="grid grid-cols-2 sm:grid-cols-4 bg-gray-50 border-b border-gray-200">
          <Tabs.Trigger
            value="percentage"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <Percent className="w-5 h-5" />
              <span>X é % de Y</span>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="value"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <Calculator className="w-5 h-5" />
              <span>X% de Y</span>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="increase"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-5 h-5" />
              <span>Aumentar</span>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="decrease"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <DollarSign className="w-5 h-5" />
              <span>Diminuir</span>
            </div>
          </Tabs.Trigger>
        </Tabs.List>

        <div className="p-6 sm:p-8">
          <Tabs.Content value="percentage">
            <h3 className="text-xl text-gray-900 mb-6">Quanto por cento um valor representa de outro?</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Primeiro valor</label>
                <input
                  type="number"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder="Ex: 25"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">é quantos % de</label>
                <input
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  placeholder="Ex: 100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="value">
            <h3 className="text-xl text-gray-900 mb-6">Quanto é uma porcentagem de um valor?</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Porcentagem (%)</label>
                <input
                  type="number"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder="Ex: 20"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">de qual valor?</label>
                <input
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  placeholder="Ex: 500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="increase">
            <h3 className="text-xl text-gray-900 mb-6">Aumentar um valor em uma porcentagem</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Aumentar em (%)</label>
                <input
                  type="number"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder="Ex: 15"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Valor base</label>
                <input
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  placeholder="Ex: 1000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="decrease">
            <h3 className="text-xl text-gray-900 mb-6">Diminuir um valor em uma porcentagem</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Diminuir em (%)</label>
                <input
                  type="number"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder="Ex: 10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Valor base</label>
                <input
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  placeholder="Ex: 800"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <div className="flex gap-3 mt-8">
            <button
              onClick={calculatePercentage}
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
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-center">
                <p className="text-sm text-blue-700 mb-2">Resultado</p>
                <p className="text-4xl text-blue-900">{result.toFixed(2)}</p>
                {activeTab === 'percentage' && <p className="text-sm text-blue-700 mt-2">%</p>}
                {(activeTab === 'value' || activeTab === 'increase' || activeTab === 'decrease') && (
                  <p className="text-sm text-blue-700 mt-2">R$ {result.toFixed(2)}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </Tabs.Root>
    </div>
  );
}
