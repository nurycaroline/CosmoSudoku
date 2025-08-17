# Gestão de Lista de Tarefas

Diretrizes para gerenciar listas de tarefas em arquivos markdown para acompanhar o progresso na conclusão de um PRD (Documento de Requisitos do Produto).

## Implementação de Tarefas
- **Uma subtarefa de cada vez:** **NÃO** inicie a próxima subtarefa até pedir permissão ao usuário e ele responder "sim" ou "s".
- **Protocolo de conclusão:**
  1. Ao concluir uma **subtarefa**, marque-a imediatamente como concluída, alterando `[ ]` para `[x]`.
  2. Se **todas** as subtarefas sob uma tarefa principal estiverem agora marcadas com `[x]`, siga esta sequência:
    - **Primeiro**: Execute a suíte de testes completa (`pytest`, `npm test`, `bin/rails test`, etc.).
    - **Somente se todos os testes passarem**: Adicione as alterações ao stage (`git add .`).
    - **Limpeza**: Remova quaisquer arquivos e códigos temporários antes de fazer o commit.
    - **Commit**: Use uma mensagem de commit descritiva que:
      - Use o formato de commit convencional (`feat:`, `fix:`, `refactor:`, etc.).
      - Resuma o que foi realizado na tarefa principal.
      - Liste as principais alterações e adições.
      - Faça referência ao arquivo de tarefas com **caminho completo** (ex: `docs/tasks/tasks-01-exemplo.md`).
      - **Formate a mensagem como um comando de linha única usando as flags `-m`**, por exemplo:

        ```
        git commit -m "feat: adiciona lógica de validação de pagamento" -m "- Valida o tipo e a data de validade do cartão" -m "- Adiciona testes unitários para casos de borda" -m "Related to docs/tasks/tasks-01-validacao-pagamento.md"
        ```
  3. Assim que todas as subtarefas forem marcadas como concluídas e as alterações tiverem sido commitadas, marque a **tarefa principal** como concluída.
- Pare após cada subtarefa e aguarde a aprovação do usuário.

## Manutenção da Lista de Tarefas

1. **Atualize a lista de tarefas enquanto trabalha:**
   - Marque tarefas e subtarefas como concluídas (`[x]`) conforme o protocolo acima.
   - Adicione novas tarefas à medida que surgirem.

2. **Mantenha a seção "Arquivos Relevantes":**
   - Liste todos os arquivos criados ou modificados.
   - Forneça a cada arquivo uma descrição de uma linha sobre seu propósito.

## Instruções para a IA

Ao trabalhar com listas de tarefas, a IA deve:

1. Atualizar regularmente o arquivo da lista de tarefas após concluir qualquer trabalho significativo.
2. Seguir o protocolo de conclusão:
   - Marcar cada **subtarefa** concluída com `[x]`.
   - Marcar a **tarefa principal** com `[x]` assim que **todas** as suas subtarefas estiverem `[x]`.
3. Adicionar tarefas recém-descobertas.
4. Manter a seção "Arquivos Relevantes" precisa e atualizada.
5. Antes de iniciar o trabalho, verificar qual é a próxima subtarefa.
6. Após implementar uma subtarefa, atualizar o arquivo e pausar para a aprovação do usuário.