# Atividade Prática: Conectando o Front-end Vue.js com um Back-end Strapi

## Introdução

Bem-vindo ao projeto **MyMenu**! Este é um front-end de uma aplicação de delivery de comida, construído com Vue.js e Vite. Atualmente, a aplicação é parcialmente funcional e utiliza dados estáticos (mock data) para exibir o cardápio e simular o registro de usuários.

## Objetivo do Exercício

O objetivo desta atividade é transformar o MyMenu em uma aplicação dinâmica e funcional, conectando-o a um back-end feito com [Strapi.io](https://strapi.io/). Você irá implementar a busca de dados de um serviço real, o cadastro de usuários e a lógica de permissão para funcionalidades específicas.

## Pré-requisitos

Antes de começar, você precisa ter um back-end Strapi configurado e rodando localmente. Certifique-se de que sua instância do Strapi atenda aos seguintes requisitos:

1.  **Strapi rodando em `http://localhost:1337`**.
2.  Uma **Collection Type** chamada `Product` (ou `Produto`) com os seguintes campos:
    *   `name` (Text)
    *   `description` (Text)
    *   `price` (Number, float)
    *   `image` (Media, single image)
3.  As permissões de `find` e `findOne` para a Collection `Product` devem estar liberadas para usuários públicos (`Public`).
4.  As permissões de `register` nas configurações de `Users & Permissions` devem estar habilitadas para usuários públicos.

---

## Tarefas

A seguir estão as tarefas que você precisa completar. O estado inicial do código para cada tarefa já está no projeto.

### Tarefa 1: Implementar o Cadastro de Usuário

O formulário de cadastro em `/cadastro` (`RegisterView.vue`) atualmente apenas simula um registro. Você irá conectá-lo ao endpoint de registro do Strapi.

Faça uma requisição `POST` para o endpoint `/api/auth/local/register` do Strapi. O Strapi espera um `username`, `email` e `password`. Você pode usar o campo `name` do formulário como `username`. Em caso de sucesso, o Strapi retornará um `jwt` e o objeto do usuário. Utilize esses dados para autenticar o usuário na aplicação imediatamente após o cadastro.

### Tarefa 2: Implementar o Login de Usuário

Assim como o cadastro, a tela de login (`LoginView.vue`) não tem funcionalidade. Sua tarefa é implementá-la.

### Tarefa 3: Proteger o Carrinho de Compras

Para garantir que apenas usuários logados possam adicionar itens ao carrinho, você precisa adicionar uma verificação de autenticação.

### Tarefa 4: Finalizar a Página do Carrinho (`CartView.vue`)

A página do carrinho está usando dados estáticos. Vamos fazê-la funcionar de verdade.

1.  **Exiba os dados reais**: Substitua a lista de itens estática pelos dados vindos decorrentes da ações do usuário..
2.  **Implemente as ações**: Implement as funcionalidades dos botões "Remover" e "Limpar Carrinho"
3.  **Lógica de carrinho vazio**: Implemente a lógica para mostrar uma mensagem amigável quando o carrinho estiver vazio.

### Tarefa 5: Tornar a Barra de Navegação (`NavBar.vue`) Dinâmica

A barra de navegação precisa refletir o estado de autenticação e o conteúdo do carrinho.

1.  **Exibição condicional**:
    *   O link de "Login" somente se o usuário **não** estiver autenticado.
    *   O nome do usuário (`user.username`) e o link "Sair" somente se o usuário **estiver** autenticado.
    *   A quantidade de itens no carrinho (`totalItems`) ao lado do link "Carrinho".
2.  **Implemente o Logout**: Faça com que o link "Sair" chame a realize o `logout` .

---

Ao final destas tarefas, você terá uma aplicação Vue.js totalmente conectada a um back-end, com funcionalidades essenciais e uma arquitetura mais robusta. Bom trabalho!