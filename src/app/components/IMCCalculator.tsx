import { useState } from 'react';
import { Scale } from 'lucide-react';

export function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateIMC = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
      setIMC(null);
      setCategory('');
      return;
    }

    const calculatedIMC = weightNum / (heightNum * heightNum);
    setIMC(calculatedIMC);

    if (calculatedIMC < 18.5) {
      setCategory('Abaixo do peso');
    } else if (calculatedIMC < 25) {
      setCategory('Peso normal');
    } else if (calculatedIMC < 30) {
      setCategory('Sobrepeso');
    } else if (calculatedIMC < 35) {
      setCategory('Obesidade Grau I');
    } else if (calculatedIMC < 40) {
      setCategory('Obesidade Grau II');
    } else {
      setCategory('Obesidade Grau III');
    }
  };

  const clearInputs = () => {
    setWeight('');
    setHeight('');
    setIMC(null);
    setCategory('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg text-gray-900">Índice de Massa Corporal</h3>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-xl text-gray-900 mb-6">Calcule seu IMC</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Peso (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 70"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Altura (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ex: 175"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={calculateIMC}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Calcular IMC
          </button>
          <button
            onClick={clearInputs}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Limpar
          </button>
        </div>

        {imc !== null && (
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div className="text-center">
              <p className="text-sm text-blue-700 mb-2">Seu IMC</p>
              <p className="text-4xl text-blue-900">{imc.toFixed(1)}</p>
              <p className="text-lg text-blue-700 mt-3">{category}</p>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-gray-700">Abaixo de 18,5</span>
                <span className="text-gray-600">Abaixo do peso</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-gray-700">18,5 - 24,9</span>
                <span className="text-gray-600">Peso normal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-gray-700">25,0 - 29,9</span>
                <span className="text-gray-600">Sobrepeso</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-gray-700">30,0 - 34,9</span>
                <span className="text-gray-600">Obesidade Grau I</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-gray-700">35,0 - 39,9</span>
                <span className="text-gray-600">Obesidade Grau II</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Acima de 40,0</span>
                <span className="text-gray-600">Obesidade Grau III</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
