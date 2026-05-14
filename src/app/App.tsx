import { useState } from 'react';
import { Calculator, Percent, TrendingUp, DollarSign, ChevronDown, Check, ArrowLeft } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import { PercentageCalculator } from './components/PercentageCalculator';
import { IMCCalculator } from './components/IMCCalculator';
import { InterestCalculator } from './components/InterestCalculator';
import { DiscountCalculator } from './components/DiscountCalculator';
import { MarginCalculator } from './components/MarginCalculator';
import { AverageCalculator } from './components/AverageCalculator';
import { CurrencyConverter } from './components/CurrencyConverter';

type CalculatorType = 'percentage' | 'imc' | 'interest' | 'discount' | 'margin' | 'average' | 'currency';

export default function App() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('percentage');

  const calculatorTitles: Record<CalculatorType, string> = {
    percentage: 'Calculadora de Porcentagem Online',
    imc: 'Calculadora de IMC',
    interest: 'Calculadora de Juros',
    discount: 'Calculadora de Desconto',
    margin: 'Calculadora de Margem',
    average: 'Calculadora de Média',
    currency: 'Conversor de Moedas'
  };

  const handleCalculatorChange = (calculator: CalculatorType) => {
    setActiveCalculator(calculator);
    const calculatorSection = document.getElementById('calculadora');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl sm:text-2xl text-gray-900">CalcFácil</h1>
            </div>
            <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
              <a href="#calculadora" className="hover:text-blue-600 transition-colors">Calculadora</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#ferramentas" className="hover:text-blue-600 transition-colors">Ferramentas</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {activeCalculator !== 'percentage' && (
              <button
                onClick={() => handleCalculatorChange('percentage')}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Voltar para Porcentagem</span>
              </button>
            )}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Percent className="w-4 h-4" />
              <span className="text-sm">Calculadora Online Gratuita</span>
            </div>
            <h2 className="text-3xl sm:text-5xl text-gray-900 mb-6">
              {calculatorTitles[activeCalculator]}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Calcule de forma rápida, fácil e precisa. Solução profissional para seus cálculos do dia a dia.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Sem Cadastro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Resultados Instantâneos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculadora" className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ad Placeholder */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 mb-8 text-center">
            <p className="text-gray-500">Espaço para anúncio</p>
            <p className="text-xs text-gray-400 mt-1">728x90</p>
          </div>

          {/* Calculator Card */}
          {activeCalculator === 'percentage' && <PercentageCalculator />}
          {activeCalculator === 'imc' && <IMCCalculator />}
          {activeCalculator === 'interest' && <InterestCalculator />}
          {activeCalculator === 'discount' && <DiscountCalculator />}
          {activeCalculator === 'margin' && <MarginCalculator />}
          {activeCalculator === 'average' && <AverageCalculator />}
          {activeCalculator === 'currency' && <CurrencyConverter />}

          {/* Ad Placeholder */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 mt-8 text-center">
            <p className="text-gray-500">Espaço para anúncio</p>
            <p className="text-xs text-gray-400 mt-1">728x90</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600">Tire suas dúvidas sobre cálculo de porcentagem</p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            <Accordion.Item value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group">
                  <span className="text-lg text-gray-900">Como calcular porcentagem de um valor?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                Para calcular a porcentagem de um valor, multiplique o valor pela porcentagem e divida por 100.
                Por exemplo: 20% de 500 = (20 × 500) ÷ 100 = 100. Use nossa calculadora para resultados instantâneos!
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group">
                  <span className="text-lg text-gray-900">Como saber quanto por cento um número representa?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                Divida o primeiro número pelo segundo e multiplique por 100. Por exemplo: 25 é quantos % de 100?
                (25 ÷ 100) × 100 = 25%. Selecione a aba "X é % de Y" na calculadora acima.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group">
                  <span className="text-lg text-gray-900">Como calcular desconto em porcentagem?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                Para calcular desconto, use a aba "Diminuir" da calculadora. Digite a porcentagem de desconto e o valor
                original. O resultado mostrará o valor final após o desconto aplicado.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group">
                  <span className="text-lg text-gray-900">Como calcular aumento percentual?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                Use a aba "Aumentar" e insira a porcentagem de aumento desejada junto com o valor base. A calculadora
                automaticamente somará o percentual ao valor original, mostrando o resultado final.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group">
                  <span className="text-lg text-gray-900">A calculadora é gratuita?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-gray-600">
                Sim! A CalcFácil é 100% gratuita, sem necessidade de cadastro ou download. Você pode usar quantas
                vezes quiser, de qualquer dispositivo com acesso à internet.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>

      {/* Related Tools Section */}
      <section id="ferramentas" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Ferramentas Relacionadas</h2>
            <p className="text-lg text-gray-600">Outras calculadoras que podem te ajudar</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              onClick={() => handleCalculatorChange('imc')}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Calculadora de IMC</h3>
              <p className="text-gray-600 text-sm">Calcule seu Índice de Massa Corporal de forma rápida e precisa.</p>
            </div>

            <div
              onClick={() => handleCalculatorChange('interest')}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Calculadora de Juros</h3>
              <p className="text-gray-600 text-sm">Calcule juros compostos e simples para seus investimentos.</p>
            </div>

            <div
              onClick={() => handleCalculatorChange('discount')}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Percent className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Calculadora de Desconto</h3>
              <p className="text-gray-600 text-sm">Descubra o preço final de produtos com desconto aplicado.</p>
            </div>

            <div
              onClick={() => handleCalculatorChange('margin')}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Calculadora de Margem</h3>
              <p className="text-gray-600 text-sm">Calcule margem de lucro e markup para seu negócio.</p>
            </div>

            <div
              onClick={() => handleCalculatorChange('average')}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Calculadora de Média</h3>
              <p className="text-gray-600 text-sm">Calcule média aritmética, ponderada e outras médias.</p>
            </div>

            <div
              onClick={() => handleCalculatorChange('currency')}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Conversor de Moedas</h3>
              <p className="text-gray-600 text-sm">Converta valores entre diferentes moedas com cotação atualizada.</p>
            </div>
          </div>

          {/* Ad Placeholder */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 mt-12 text-center">
            <p className="text-gray-500">Espaço para anúncio</p>
            <p className="text-xs text-gray-400 mt-1">970x250</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-blue-400" />
                <span className="text-xl">CalcFácil</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ferramentas de cálculo gratuitas e fáceis de usar para seu dia a dia.
              </p>
            </div>

            <div>
              <h4 className="text-sm mb-4">Calculadoras</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Porcentagem</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IMC</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Juros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desconto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Usar</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutoriais</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 CalcFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}