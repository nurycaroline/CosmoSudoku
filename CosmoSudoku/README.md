# 🌌 CosmoSudoku

Um jogo de Sudoku com tema espacial desenvolvido com React Native e Expo Router.

## 🚀 Tecnologias

- **Framework:** Expo (React Native)
- **Linguagem:** TypeScript
- **Navegação:** Expo Router (roteamento baseado em arquivos)
- **Gerenciamento de Estado:** Jotai (planejado)
- **UI/UX:** Cosmic UI com Tailwind CSS (planejado)
- **Armazenamento:** Async Storage (planejado)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão LTS - recomendado v18 ou superior)
- **npm** ou **yarn**
- **Expo CLI** (será instalado automaticamente via npx)

### Para desenvolvimento mobile:

- **iOS:** Xcode e iOS Simulator (macOS)
- **Android:** Android Studio e Android Emulator
- **Dispositivo físico:** App Expo Go

## ⚡ Instalação e Setup

1. **Clone o repositório:**

   ```bash
   git clone <repository-url>
   cd CosmoSudoku
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

## 🎮 Executando o Projeto

### Desenvolvimento Local

```bash
# Iniciar servidor Expo
npm start

# Executar no iOS Simulator
npm run ios

# Executar no Android Emulator
npm run android

```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm start          # Inicia o servidor Expo
npm run ios        # Executa no iOS
npm run android    # Executa no Android

# Qualidade de Código
npm run lint       # Verifica problemas de código
npm run lint:fix   # Corrige problemas automaticamente
npm run format     # Formata código com Prettier
npm run format:check # Verifica formatação

# Testes
npm test           # Executa testes (Jest)
```

## 📁 Estrutura do Projeto

```
CosmoSudoku/
├── app/                    # Roteamento Expo Router
│   ├── _layout.tsx        # Layout raiz
│   ├── (tabs)/            # Navegação em abas
│   │   ├── _layout.tsx    # Layout das abas
│   │   ├── index.tsx      # Tela Home
│   │   └── two.tsx        # Tela Jogo
│   ├── +not-found.tsx     # Página 404
│   └── modal.tsx          # Modal de configurações
├── components/            # Componentes reutilizáveis
├── constants/             # Constantes da aplicação
│   ├── Colors.ts         # Paleta de cores espaciais
│   └── index.ts
├── utils/                 # Utilitários e helpers
│   └── index.ts
├── types/                 # Tipos TypeScript
│   └── index.ts
├── assets/               # Recursos estáticos
│   ├── fonts/
│   └── images/
├── .vscode/              # Configurações do VS Code
├── eslint.config.js      # Configuração ESLint v9
├── .prettierrc           # Configuração Prettier
└── tsconfig.json         # Configuração TypeScript
```

## 🎨 Tema Espacial

O CosmoSudoku utiliza uma paleta de cores espaciais:

- **Primary:** `#0a0a23` (Azul escuro espacial)
- **Secondary:** `#1a1a3a` (Azul médio)
- **Accent:** `#4a9eff` (Azul claro - estrelas)
- **Text:** `#ffffff` (Texto principal)
- **Text Secondary:** `#cccccc` (Texto secundário)

## 🔧 Configurações de Desenvolvimento

### VS Code (Recomendado)

O projeto inclui configurações otimizadas para VS Code:

- Formatação automática ao salvar
- ESLint fix automático
- Configurações TypeScript otimizadas
- File nesting para melhor organização

### Absolute Imports

Use absolute imports para melhor organização:

```typescript
import { Colors } from '@/constants';
import { GameState } from '@/types';
import { MyComponent } from '@/components';
```

## 🧪 Qualidade de Código

- **ESLint v9** com configuração moderna
- **Prettier** para formatação consistente
- **TypeScript** com strict mode
- **Configurações otimizadas** para React Native

## 📱 Plataformas Suportadas

- ✅ **iOS** (iPhone/iPad)
- ✅ **Android** (Phone/Tablet)

## 🎯 Próximos Passos

Este projeto está na fase de inicialização. Próximas funcionalidades a implementar:

1. **Lógica do Sudoku** - Geração e validação de tabuleiros
2. **Interface do Jogo** - Tabuleiro 9x9 interativo
3. **Gerenciamento de Estado** - Implementação com Jotai
4. **Mapa Estelar** - Sistema de níveis progressivos
5. **Tema Espacial Completo** - Assets visuais e sonoros

## 📄 Licença

[Adicionar licença apropriada]

## 🤝 Contribuição

[Adicionar guidelines de contribuição]

---

**Desenvolvido com ❤️ e ☄️ para uma experiência de Sudoku intergaláctica!**
