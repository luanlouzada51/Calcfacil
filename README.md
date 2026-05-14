# CalcFácil - Calculadora de Porcentagem Online

Calculadora online gratuita para porcentagem, IMC, juros, descontos e muito mais.

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar o arquivo index.html

Crie um arquivo `index.html` na raiz do projeto com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="CalcFácil - Calculadora de Porcentagem Online gratuita. Calcule porcentagens, IMC, juros, descontos e muito mais de forma rápida e fácil." />
    <meta name="keywords" content="calculadora, porcentagem, IMC, juros, desconto, calculadora online, grátis" />
    <title>CalcFácil - Calculadora de Porcentagem Online</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Passo 2: Configurar GitHub Pages

1. Vá nas **Settings** do repositório
2. Clique em **Pages** no menu lateral
3. Em **Source**, selecione **GitHub Actions**
4. Commit e push os arquivos para o repositório

### Passo 3: Fazer o Deploy

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

O GitHub Actions vai automaticamente fazer o build e deploy. Após alguns minutos, o site estará disponível em:

**https://seu-usuario.github.io/Calcfacil/**

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Rodar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 📦 Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Vite 6
- Radix UI
- Lucide Icons

## 📝 Funcionalidades

- ✅ Calculadora de Porcentagem (4 modos)
- ✅ Calculadora de IMC
- ✅ Calculadora de Juros (Simples e Compostos)
- ✅ Calculadora de Desconto
- ✅ Calculadora de Margem de Lucro
- ✅ Calculadora de Média
- ✅ Conversor de Moedas
- ✅ Design Responsivo
- ✅ Interface em Português
