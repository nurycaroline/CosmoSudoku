# Regra: Gerando um Documento de Requisitos de Produto (PRD)

## Objetivo

Orientar um assistente de IA na criação de um Documento de Requisitos de Produto (PRD) detalhado em formato Markdown, com base em uma solicitação inicial do usuário. O PRD deve ser claro, acionável e adequado para que um desenvolvedor júnior possa entender e implementar a funcionalidade.

## Processo

1.  **Receber a Solicitação Inicial:** O usuário fornece uma breve descrição ou solicitação para uma nova funcionalidade.
2.  **Fazer Perguntas de Esclarecimento:** Antes de escrever o PRD, a IA *deve* fazer perguntas de esclarecimento para obter detalhes suficientes. O objetivo é entender o "o quê" e o "porquê" da funcionalidade, não necessariamente o "como" (que o desenvolvedor irá descobrir). Certifique-se de fornecer opções em listas de letras/números para que eu possa responder facilmente com minhas seleções.
3.  **Gerar o PRD:** Com base na solicitação inicial e nas respostas do usuário às perguntas de esclarecimento, gere um PRD usando a estrutura descrita abaixo.
4.  **Salvar o PRD:** Salve o documento gerado como `prd-[numero-sequencial]-[nome-da-funcionalidade].md` no diretório `/docs/tasks`.

## Perguntas de Esclarecimento (Exemplos)

A IA deve adaptar suas perguntas com base na solicitação, mas aqui estão algumas áreas comuns a serem exploradas:

*   **Problema/Objetivo:** "Qual problema esta funcionalidade resolve para o usuário?" ou "Qual é o principal objetivo que queremos alcançar com esta funcionalidade?"
*   **Usuário-Alvo:** "Quem é o usuário principal desta funcionalidade?"
*   **Funcionalidade Principal:** "Você pode descrever as principais ações que um usuário deve ser capaz de realizar com esta funcionalidade?"
*   **Histórias de Usuário:** "Você poderia fornecer algumas histórias de usuário? (ex: Como um [tipo de usuário], eu quero [realizar uma ação] para que [benefício].)"
*   **Critérios de Aceitação:** "Como saberemos quando esta funcionalidade for implementada com sucesso? Quais são os principais critérios de sucesso?"
*   **Escopo/Limites:** "Existem coisas específicas que esta funcionalidade *não deve* fazer (não objetivos)?"
*   **Requisitos de Dados:** "Que tipo de dados esta funcionalidade precisa exibir ou manipular?"
*   **Design/UI:** "Existem mockups de design ou diretrizes de UI a serem seguidas?" ou "Você pode descrever a aparência e a sensação desejadas?"
*   **Casos Extremos:** "Existem casos extremos ou condições de erro potenciais que devemos considerar?"

## Estrutura do PRD

O PRD gerado deve incluir as seguintes seções:

1.  **Introdução/Visão Geral:** Descreva brevemente a funcionalidade e o problema que ela resolve. Declare o objetivo.
2.  **Objetivos:** Liste os objetivos específicos e mensuráveis para esta funcionalidade.
3.  **Histórias de Usuário:** Detalhe as narrativas do usuário descrevendo o uso e os benefícios da funcionalidade.
4.  **Requisitos Funcionais:** Liste as funcionalidades específicas que a funcionalidade deve ter. Use uma linguagem clara e concisa (ex: "O sistema deve permitir que os usuários façam upload de uma foto de perfil."). Numere esses requisitos.
5.  **Não Objetivos (Fora do Escopo):** Declare claramente o que esta funcionalidade *não* incluirá para gerenciar o escopo.
6.  **Considerações de Design (Opcional):** Link para mockups, descreva os requisitos de UI/UX ou mencione componentes/estilos relevantes, se aplicável.
7.  **Considerações Técnicas (Opcional):** Mencione quaisquer restrições técnicas conhecidas, dependências ou sugestões (ex: "Deve se integrar com o módulo de Autenticação existente").
8.  **Métricas de Sucesso:** Como o sucesso desta funcionalidade será medido? (ex: "Aumentar o engajamento do usuário em 10%", "Reduzir os tickets de suporte relacionados a X").
9.  **Questões em Aberto:** Liste quaisquer perguntas restantes ou áreas que necessitem de mais esclarecimentos.

## Público-Alvo

Assuma que o leitor principal do PRD é um **desenvolvedor júnior**. Portanto, os requisitos devem ser explícitos, inequívocos e evitar jargões sempre que possível. Forneça detalhes suficientes para que eles entendam o propósito e a lógica central da funcionalidade.

## Saída

*   **Formato:** Markdown (`.md`)
*   **Localização:** `/docs/tasks/`
*   **Nome do Arquivo:** `prd-[numero-sequencial]-[nome-da-funcionalidade].md`

## Instruções Finais

1.  NÃO comece a implementar o PRD
2.  Certifique-se de fazer perguntas de esclarecimento ao usuário
3.  Use as respostas do usuário às perguntas de esclarecimento para melhorar o PRD