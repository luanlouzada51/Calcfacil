import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export function InterestCalculator() {
  const [activeTab, setActiveTab] = useState('simple');
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<{ total: number; interest: number } | null>(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      setResult(null);
      return;
    }

    let total = 0;
    let interest = 0;

    if (activeTab === 'simple') {
      interest = p * r * t;
      total = p + interest;
    } else {
      total = p * Math.pow(1 + r, t);
      interest = total - p;
    }

    setResult({ total, interest });
  };

  const clearInputs = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
          <Tabs.Trigger
            value="simple"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-5 h-5" />
              <span>Juros Simples</span>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="compound"
            className="px-4 py-4 text-sm sm:text-base text-gray-700 hover:bg-white transition-colors data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-5 h-5" />
              <span>Juros Compostos</span>
            </div>
          </Tabs.Trigger>
        </Tabs.List>

        <div className="p-6 sm:p-8">
          <Tabs.Content value="simple">
            <h3 className="text-xl text-gray-900 mb-6">Calcular Juros Simples</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Capital Inicial (R$)</label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="Ex: 10000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Taxa de Juros (% ao mês)</label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="Ex: 2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Período (meses)</label>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Ex: 12"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="compound">
            <h3 className="text-xl text-gray-900 mb-6">Calcular Juros Compostos</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Capital Inicial (R$)</label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="Ex: 10000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Taxa de Juros (% ao mês)</label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="Ex: 2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Período (meses)</label>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Ex: 12"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </Tabs.Content>

          <div className="flex gap-3 mt-8">
            <button
              onClick={calculateInterest}
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
            <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span className="text-sm text-green-700">Valor Investido</span>
                  <span className="text-lg text-green-900">R$ {parseFloat(principal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span className="text-sm text-green-700">Juros</span>
                  <span className="text-lg text-green-900">R$ {result.interest.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-green-700">Montante Final</span>
                  <span className="text-3xl text-green-900">R$ {result.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Tabs.Root>
    </div>
  );
}
