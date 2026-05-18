# 🚀 Guia de Deploy GitHub Pages - CalcFácil

## ✅ Checklist de Arquivos

Todos esses arquivos foram criados e estão prontos:

- ✅ `index.html` (raiz do projeto)
- ✅ `404.html` (raiz do projeto)
- ✅ `src/main.tsx` (entry point)
- ✅ `vite.config.ts` (com base: '/Calcfacil/')
- ✅ `.nojekyll`
- ✅ `.github/workflows/deploy.yml`

## 📝 Passo a Passo

### 1. Push para o GitHub

No Figma Make:
1. Clique em "Push to GitHub" ou "Sync"
2. Mensagem: `Fix GitHub Pages deployment`
3. Confirme o push

### 2. Configure GitHub Pages

1. Vá em: `https://github.com/SEU-USUARIO/Calcfacil/settings/pages`
2. Em **Source**, selecione: **GitHub Actions**
3. Salve

### 3. Aguarde o Build

1. Acesse: `https://github.com/SEU-USUARIO/Calcfacil/actions`
2. Aguarde o workflow terminar (◯ amarelo → ✓ verde)
3. Isso leva 3-5 minutos

### 4. Acesse o Site

URL: `https://SEU-USUARIO.github.io/Calcfacil/`

## 🔍 Se ainda estiver com tela branca

### Teste 1: Verifique o Console do Navegador

1. Abra o site
2. Pressione `F12` (DevTools)
3. Vá na aba **Console**
4. Procure por erros em vermelho
5. Me envie uma screenshot dos erros

### Teste 2: Verifique a aba Network

1. No DevTools, vá em **Network**
2. Recarregue a página (`Ctrl+R`)
3. Veja se tem arquivos com status **404** (vermelho)
4. Me envie quais arquivos não estão carregando

### Teste 3: Verifique o Build

1. Vá em: `https://github.com/SEU-USUARIO/Calcfacil/actions`
2. Clique no último workflow
3. Verifique se tem erros em vermelho
4. Me envie o log se tiver erro

## 🛠️ Problemas Comuns

### Problema: 404 ao acessar a URL

**Solução:** Certifique-se que:
- GitHub Pages está ativado em **Settings → Pages**
- Source está em **GitHub Actions** (não "Deploy from a branch")

### Problema: Tela branca, sem erros

**Solução:** Verifique se o nome do repositório está correto:
- Se o repositório é `Calcfacil` (com "C" maiúsculo), a URL é `https://usuario.github.io/Calcfacil/`
- O `vite.config.ts` deve ter `base: '/Calcfacil/'` (com mesma capitalização)

### Problema: CSS não carrega

**Solução:** Limpe o cache:
- `Ctrl + Shift + R` (Windows/Linux)
- `Cmd + Shift + R` (Mac)

## 📧 Se nada funcionar

Me envie:
1. URL do seu repositório GitHub
2. Screenshot do Console (F12)
3. Screenshot da aba Actions mostrando o status do deploy

Vou te ajudar a resolver! 🚀
