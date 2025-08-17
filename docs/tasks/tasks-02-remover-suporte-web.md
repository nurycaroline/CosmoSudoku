# Lista de Tarefas: Remover Suporte Web do CosmoSudoku

Baseado na análise do projeto atual, esta lista de tarefas guiará a remoção completa do suporte web do aplicativo CosmoSudoku, mantendo apenas as plataformas mobile (iOS e Android).

## Arquivos Relevantes

- `CosmoSudoku/app.json` - Configuração principal do Expo que contém as configurações de plataforma web
- `CosmoSudoku/package.json` - Contém scripts web e dependências relacionadas ao suporte web
- `CosmoSudoku/app/+html.tsx` - Arquivo específico para configuração HTML da versão web
- `CosmoSudoku/assets/images/favicon.png` - Favicon usado apenas na versão web

### Notas

- Após a remoção do suporte web, o comando `expo start --web` não funcionará mais
- As dependências `react-dom` e `react-native-web` serão removidas para reduzir o tamanho do bundle
- O projeto continuará funcionando normalmente em iOS e Android

## Tarefas

- [x] 1.0 Remover Configurações Web do app.json
  - [x] 1.1 Remover seção "web" completa do arquivo app.json
  - [x] 1.2 Verificar se outras configurações dependem do suporte web
- [x] 2.0 Limpar Scripts e Dependências Web do package.json
  - [x] 2.1 Remover script "web" dos scripts do package.json
  - [x] 2.2 Remover dependências react-dom, react-native-web e expo-web-browser
  - [x] 2.3 Executar npm install para atualizar node_modules
- [x] 3.0 Remover Arquivos Específicos da Web
  - [x] 3.1 Deletar arquivo app/+html.tsx
  - [x] 3.2 Remover favicon.png dos assets
- [x] 4.0 Validar Funcionamento Mobile Após Remoção
  - [x] 4.1 Testar inicialização do projeto com expo start
  - [x] 4.2 Verificar se expo start --android funciona
  - [x] 4.3 Verificar se expo start --ios funciona
  - [x] 4.4 Verificar comportamento do expo start --web (ainda funciona por causa do Expo Router)
- [x] 5.0 Atualizar Documentação do Projeto
  - [x] 5.1 Atualizar README.md removendo referências ao suporte web
  - [x] 5.2 Atualizar scripts de desenvolvimento na documentação
