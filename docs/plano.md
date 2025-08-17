# Planejamento Completo: Jogo de Sudoku - CosmoSudoku

Este documento consolida todas as decisões tomadas para o projeto, desde a concepção do jogo até o plano de desenvolvimento técnico. O objetivo é criar um jogo de Sudoku com um tema espacial, usando as tecnologias mais adequadas e seguindo um cronograma claro.

## 1. Conceito e Funcionalidades

### Funcionalidades Essenciais (Mínimo Viável)

- Tabuleiro 9x9: A grade padrão de Sudoku, que será o centro da jogabilidade.
- Lógica do Jogo: Regras que garantem que números de 1 a 9 não se repitam em linhas, colunas e blocos 3x3.
- Controles: Seleção de células e inserção de números (ou ícones).
- Validação de Erros: Sistema que alerta o jogador sobre jogadas incorretas.
- Salvar e Continuar: Funcionalidade que salva automaticamente o progresso do jogo.
- Mapa de Fases: Uma jornada por um mapa estelar com níveis de dificuldade progressiva, controlada pelo número de células preenchidas e pela complexidade da lógica de resolução necessária.

### Funcionalidades Extras

- Tema Espacial (CosmoSudoku):
  - Visual: Tabuleiro com fundo de constelação e efeitos visuais temáticos.
  - Sons: Trilha sonora e efeitos sonoros de ficção científica.
  - Personalização: O jogador pode escolher entre usar números tradicionais ou ícones de planetas e estrelas.
- Dicas: Número limitado de dicas por jogo para ajudar o jogador.
- Limite de Erros: O jogo tem um limite de erros que, se atingido, finaliza a fase.
- Desafios Diários: Um novo quebra-cabeça é disponibilizado a cada 24 horas.
- Análise de Jogo: Resumo do desempenho do jogador no final de cada fase, incluindo tempo e número de erros.

## 2. Plano de Desenvolvimento Técnico

### Tecnologias

- Framework: Expo (React Native) para desenvolvimento multiplataforma (iOS e Android).
- Gerenciamento de Estado: Jotai, que usa "átomos" para uma gestão de estado simples e eficiente.
- UI/UX: Cosmic UI, uma biblioteca de componentes com tema espacial, que utiliza Tailwind CSS para máxima flexibilidade e agilidade no desenvolvimento.
- Navegação: React Navigation para gerenciar as telas do jogo.
- Armazenamento: Async Storage para salvar dados do jogo e configurações.
- Linguagem: TypeScript para garantir segurança e qualidade de código.
