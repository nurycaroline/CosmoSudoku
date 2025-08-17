# Regra: Gerando uma Lista de Tarefas a partir de um PRD

## Objetivo

Orientar um assistente de IA na criação de uma lista de tarefas detalhada, passo a passo, em formato Markdown, com base em um Documento de Requisitos de Produto (PRD) existente. A lista de tarefas deve guiar um desenvolvedor durante a implementação.

## Resultado.

- **Formato:** Markdown (`.md`)
- **Localização:** `/docs/tasks/`
- **Nome do Arquivo:** `tasks-[numero-sequencial]-[nome-do-arquivo-prd].md` (ex: `tasks-01-prd-edicao-perfil-usuario.md`)

## Processo.

1.  **Receber Referência do PRD:** O usuário aponta a IA para um arquivo PRD específico.
2.  **Analisar o PRD:** A IA lê e analisa os requisitos funcionais, histórias de usuários e outras seções do PRD especificado.
3.  **Avaliar o Estado Atual:** Revise a base de código existente para entender a infraestrutura, os padrões de arquitetura e as convenções existentes. Além disso, identifique quaisquer componentes ou recursos existentes que já existam e possam ser relevantes para os requisitos do PRD. Em seguida, identifique arquivos, componentes e utilitários relacionados que podem ser aproveitados ou precisam de modificação.
4.  **Seguir Documentação do Expo:** SEMPRE consulte e siga as práticas recomendadas da documentação oficial do Expo (https://docs.expo.dev/) ao gerar tarefas. Isso inclui:
    - Usar as versões mais recentes das APIs e bibliotecas do Expo
    - Seguir os padrões de estrutura de arquivos recomendados (ex: Expo Router para navegação)
    - Aplicar as melhores práticas de configuração e desenvolvimento
    - Utilizar os templates e comandos oficiais do Expo CLI
    - Referenciar a documentação específica quando necessário nas tarefas
5.  **Fase 1: Gerar Tarefas Principais:** Com base na análise do PRD e na avaliação do estado atual, crie o arquivo e gere as tarefas principais de alto nível necessárias para implementar o recurso. Use seu julgamento sobre quantas tarefas de alto nível usar. É provável que sejam cerca de 5. Apresente essas tarefas ao usuário no formato especificado (ainda sem subtarefas). Informe o usuário: "Gerei as tarefas de alto nível com base no PRD. Pronto para gerar as subtarefas? Responda com 'Go' para prosseguir."
6.  **Aguardar Confirmação:** Pause e aguarde o usuário responder com "Go".
7.  **Fase 2: Gerar Subtarefas:** Assim que o usuário confirmar, divida cada tarefa principal em subtarefas menores e acionáveis, necessárias para concluir a tarefa principal. Garanta que as subtarefas sigam logicamente a tarefa principal, cubram os detalhes de implementação implícitos no PRD e considerem os padrões existentes da base de código quando relevante, sem serem limitadas por eles.
8.  **Identificar Arquivos Relevantes:** Com base nas tarefas e no PRD, identifique os arquivos potenciais que precisarão ser criados ou modificados. Liste-os na seção `Arquivos Relevantes`, incluindo os arquivos de teste correspondentes, se aplicável.
9.  **Gerar Saída Final:** Combine as tarefas principais, subtarefas, arquivos relevantes e notas na estrutura final do Markdown.
10. **Salvar Lista de Tarefas:** Salve o documento gerado no diretório `/docs/tasks/` com o nome de arquivo `tasks-[numero_sequencial]-[nome-do-arquivo-prd].md`, onde `[numero_sequencial]` corresponde ao número sequencial do PRD de entrada (ex: se a entrada foi `prd-01-edicao-perfil-usuario.md`, a saída é `tasks-01-prd-edicao-perfil-usuario.md`).

## Formato de Saída

A lista de tarefas gerada _deve_ seguir esta estrutura:

```markdown
## Arquivos Relevantes

- `caminho/para/arquivo/potencial1.ts` - Breve descrição do motivo pelo qual este arquivo é relevante (ex: Contém o componente principal para este recurso).
- `caminho/para/arquivo1.test.ts` - Testes unitários para `arquivo1.ts`.
- `caminho/para/outro/arquivo.tsx` - Breve descrição (ex: Manipulador de rota de API para envio de dados).
- `caminho/para/outro/arquivo.test.tsx` - Testes unitários para `outro/arquivo.tsx`.
- `lib/utils/helpers.ts` - Breve descrição (ex: Funções utilitárias necessárias para cálculos).
- `lib/utils/helpers.test.ts` - Testes unitários para `helpers.ts`.

### Notas.

- Os testes unitários devem ser colocados normalmente ao lado dos arquivos de código que estão testando (ex: `MeuComponente.tsx` e `MeuComponente.test.tsx` no mesmo diretório).
- Use `npx jest [caminho/opcional/para/arquivo/de/teste]` para executar os testes. Executar sem um caminho executa todos os testes encontrados pela configuração do Jest.

## Tarefas.

- [ ] 1.0 Título da Tarefa Principal
  - [ ] 1.1 [Descrição da subtarefa 1.1]
  - [ ] 1.2 [Descrição da subtarefa 1.2]
- [ ] 2.0 Título da Tarefa Principal
  - [ ] 2.1 [Descrição da subtarefa 2.1]
- [ ] 3.0 Título da Tarefa Principal (pode não exigir subtarefas se for puramente estrutural ou de configuração)
```

## Modelo de Interação.

O processo exige explicitamente uma pausa após a geração das tarefas principais para obter a confirmação do usuário ("Go") antes de prosseguir para a geração das subtarefas detalhadas. Isso garante que o plano de alto nível esteja alinhado com as expectativas do usuário antes de mergulhar nos detalhes.

## Público-Alvo.

Assuma que o leitor principal da lista de tarefas é um **desenvolvedor júnior** que implementará o recurso com conhecimento do contexto da base de código existente.

## Diretrizes Específicas do Expo

Ao gerar tarefas para projetos Expo, certifique-se de:

- **Sempre referenciar a documentação oficial:** Inclua links para https://docs.expo.dev/ quando relevante
- **Usar comandos atualizados:** Prefira `npx expo` em vez de `expo` global
- **Seguir estruturas recomendadas:** Use Expo Router para navegação, estrutura de pastas oficial
- **Incluir dependências corretas:** Especifique versões compatíveis com o SDK do Expo
- **Considerar plataformas:** Mencione diferenças entre iOS e Android quando aplicável
- **Aplicar melhores práticas:** Configuração de TypeScript, ESLint, e outras ferramentas recomendadas