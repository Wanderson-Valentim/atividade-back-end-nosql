# API de Gerenciamento de Alimentos

Esta API foi desenvolvida como parte de uma atividade com o propósito de aprimorar habilidades na manipulação de dados em um banco de dados NoSQL e prática com o framework Express.

## Rotas

1. **Listar todos os alimentos (GET):**
   - Rota: `/api/foods`
   - Descrição: Retorna uma lista de todos os alimentos no banco de dados.
   - Campos de Resposta:
     - id: ID único do alimento
     - name: Nome do alimento
     - category: Categoria do alimento
     - quantity: Quantidade disponível
     - expirationDate: Data de validade
     - price: Preço do alimento

2. **Buscar um alimento específico (GET):**
   - Rota: `/api/foods/:id`
   - Descrição: Retorna os detalhes de um alimento com base no ID fornecido.
   - Campos de Resposta:
     - id: ID único do alimento
     - name: Nome do alimento
     - category: Categoria do alimento
     - quantity: Quantidade disponível
     - expirationDate: Data de validade
     - price: Preço do alimento

3. **Criar um novo alimento (POST):**
   - Rota: `/api/foods`
   - Descrição: Cria um novo alimento com base nos dados fornecidos.
   - Campos de Requisição:
     - name: Nome do alimento (String)
     - category: Categoria do alimento (String)
     - quantity: Quantidade disponível (Number)
     - expirationDate: Data de validade (Date)
     - price: Preço do alimento (Number)

4. **Atualizar um alimento existente (PUT):**
   - Rota: `/api/foods/:id`
   - Descrição: Atualiza os dados de um alimento existente com base no ID fornecido.
   - Campos de Requisição (opcionais):
     - name: Novo nome do alimento (String)
     - category: Nova categoria do alimento (String)
     - quantity: Nova quantidade disponível (Number)
     - expirationDate: Nova data de validade (Date)
     - price: Novo preço do alimento (Number)

5. **Excluir um alimento (DELETE):**
   - Rota: `/api/foods/:id`
   - Descrição: Remove um alimento com base no ID fornecido.

## Instruções

- As configurações, como a URL do banco de dados, devem ser definidas no arquivo `.env`, com base no `.env.example`.

## Execução

1. Clone este repositório.
2. Instale as dependências utilizando `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`, baseado no arquivo `.env.example`.
4. Execute o servidor utilizando `npm start`.
5. Teste as rotas utilizando ferramentas apropriadas.
