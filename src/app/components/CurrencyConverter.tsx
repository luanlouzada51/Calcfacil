import { useState } from 'react';
import { DollarSign, ArrowLeftRight } from 'lucide-react';

export function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BRL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState<number | null>(null);

  const exchangeRates: Record<string, Record<string, number>> = {
    BRL: { USD: 0.20, EUR: 0.18, GBP: 0.16, JPY: 30.0 },
    USD: { BRL: 5.0, EUR: 0.92, GBP: 0.79, JPY: 149.0 },
    EUR: { BRL: 5.45, USD: 1.09, GBP: 0.86, JPY: 162.0 },
    GBP: { BRL: 6.32, USD: 1.27, EUR: 1.16, JPY: 188.0 },
    JPY: { BRL: 0.033, USD: 0.0067, EUR: 0.0062, GBP: 0.0053 }
  };

  const currencies = [
    { code: 'BRL', name: 'Real Brasileiro', symbol: 'R$' },
    { code: 'USD', name: 'Dólar Americano', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'Libra Esterlina', symbol: '£' },
    { code: 'JPY', name: 'Iene Japonês', symbol: '¥' }
  ];

  const convertCurrency = () => {
    const amountNum = parseFloat(amount);

    if (isNaN(amountNum)) {
      setResult(null);
      return;
    }

    if (fromCurrency === toCurrency) {
      setResult(amountNum);
      return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const converted = amountNum * rate;
    setResult(converted);
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setResult(null);
  };

  const clearInputs = () => {
    setAmount('');
    setResult(null);
  };

  const getSymbol = (code: string) => {
    return currencies.find(c => c.code === code)?.symbol || '';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-teal-600" />
          <h3 className="text-lg text-gray-900">Conversor de Moedas</h3>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-xl text-gray-900 mb-6">Converta entre moedas</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Valor</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: 100"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div>
              <label className="block text-sm text-gray-700 mb-2">De</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center sm:mb-3">
              <button
                onClick={swapCurrencies}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                title="Inverter moedas"
              >
                <ArrowLeftRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Para</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={convertCurrency}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Converter
          </button>
          <button
            onClick={clearInputs}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Limpar
          </button>
        </div>

        {result !== null && (
          <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-teal-200">
                <span className="text-sm text-teal-700">Valor Original</span>
                <span className="text-lg text-teal-900">
                  {getSymbol(fromCurrency)} {parseFloat(amount).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-teal-200">
                <span className="text-sm text-teal-700">Taxa de Câmbio</span>
                <span className="text-sm text-teal-900">
                  1 {fromCurrency} = {exchangeRates[fromCurrency][toCurrency].toFixed(4)} {toCurrency}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-teal-700">Valor Convertido</span>
                <span className="text-3xl text-teal-900">
                  {getSymbol(toCurrency)} {result.toFixed(2)}
                </span>
              </div>
            </div>
            <p className="text-xs text-teal-600 text-center mt-4">
              * Taxas de câmbio simuladas para fins demonstrativos
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
