import { useState } from 'react';
import { Calculator, Plus, X } from 'lucide-react';

export function AverageCalculator() {
  const [values, setValues] = useState<string[]>(['', '', '']);
  const [result, setResult] = useState<number | null>(null);

  const addValue = () => {
    setValues([...values, '']);
  };

  const removeValue = (index: number) => {
    if (values.length > 2) {
      const newValues = values.filter((_, i) => i !== index);
      setValues(newValues);
    }
  };

  const updateValue = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const calculateAverage = () => {
    const numericValues = values
      .map(v => parseFloat(v))
      .filter(v => !isNaN(v));

    if (numericValues.length === 0) {
      setResult(null);
      return;
    }

    const sum = numericValues.reduce((acc, val) => acc + val, 0);
    const average = sum / numericValues.length;
    setResult(average);
  };

  const clearInputs = () => {
    setValues(['', '', '']);
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-red-600" />
          <h3 className="text-lg text-gray-900">Calculadora de Média Aritmética</h3>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-xl text-gray-900 mb-6">Calcule a média dos valores</h3>
        <div className="space-y-4">
          {values.map((value, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="number"
                value={value}
                onChange={(e) => updateValue(index, e.target.value)}
                placeholder={`Valor ${index + 1}`}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              {values.length > 2 && (
                <button
                  onClick={() => removeValue(index)}
                  className="px-3 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addValue}
          className="mt-4 w-full px-4 py-2 border border-dashed border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm">Adicionar Valor</span>
        </button>

        <div className="flex gap-3 mt-8">
          <button
            onClick={calculateAverage}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Calcular Média
          </button>
          <button
            onClick={clearInputs}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Limpar
          </button>
        </div>

        {result !== null && (
          <div className="mt-8 p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
            <div className="text-center">
              <p className="text-sm text-red-700 mb-2">Média Aritmética</p>
              <p className="text-4xl text-red-900">{result.toFixed(2)}</p>
              <p className="text-sm text-red-700 mt-3">
                Baseado em {values.filter(v => v && !isNaN(parseFloat(v))).length} valores
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
