
## 3. Checklist de Implementação

Este checklist guiará a equipe de desenvolvimento através das etapas do projeto.

### Fase 1: Configuração e Funcionalidades Essenciais (MVP)

[ ] Configurar o projeto Expo com expo init e selecionar o template de TypeScript.
[ ] Instalar as dependências necessárias: jotai, @react-navigation/native, react-native-screens, react-native-safe-area-context, @react-native-async-storage/async-storage.
[ ] Instalar a Cosmic UI e suas dependências: cosmic-ui, tailwindcss-react-native, postcss.
[ ] Configurar o React Navigation com um StackNavigator inicial.
[ ] Criar a pasta src/ e as subpastas components, screens, atoms, utils, assets.
[ ] Desenvolver o componente Celula.
[ ] Desenvolver o componente Tabuleiro que renderiza 81 componentes de Celula.
[ ] Criar a lógica central do Sudoku em src/utils/sudoku.ts:
[ ] Função para gerar um tabuleiro de Sudoku válido (nível fácil).
[ ] Função para validar se uma jogada é correta (linha, coluna, bloco).
[ ] Usar o Jotai para criar átomos que armazenam o estado do tabuleiro e a lógica do jogo.
[ ] Criar a tela GameScreen que utiliza o componente Tabuleiro.
[ ] Implementar a funcionalidade de salvar e carregar o estado do jogo usando Async Storage.
[ ] Desenvolver a tela MapaEstelarScreen para o mapa de fases.

### Fase 2: Implementação das Funcionalidades Extras

[ ] Adicionar a tela SettingsScreen para as configurações do jogo.
[ ] Na SettingsScreen, implementar a funcionalidade de alternar entre números e ícones de planetas.
[ ] Ajustar o MapaEstelarScreen para que a dificuldade aumente a cada 2 níveis.
[ ] Adicionar a lógica de dicas limitadas ao GameScreen.
[ ] Adicionar a lógica de limite de erros ao GameScreen.
[ ] Criar a funcionalidade de Desafios Diários.
[ ] Implementar a tela AnalysisScreen que mostra os resultados do jogo após a conclusão de um nível.

### Fase 3: Refinamento e Publicação

[ ] Integrar os assets de áudio (trilha sonora e efeitos).
[ ] Integrar os assets visuais (ícones de planetas, backgrounds, etc.).
[ ] Melhorar a interface do usuário (UI) e a experiência do usuário (UX) em todas as telas, utilizando a Cosmic UI.
[ ] Otimizar o desempenho do aplicativo.
[ ] Criar o ícone do aplicativo e a splash screen.
[ ] Gerar um build do aplicativo com o Expo (eas build) para Android e iOS.
[ ] Publicar o aplicativo na Google Play Store e na Apple App Store.