# Salutho - Desafio de Estágio para Desenvolvedor de Software

## Visão Geral

Este desafio consiste em desenvolver uma aplicação em React que interage com uma API Django para calcular o menor número inteiro divisível por todos os números dentro de um intervalo específico. Você deverá demonstrar competência tanto em desenvolvimento frontend com React quanto em backend com Django.

### Funcionalidades

- **Frontend:**

  - [x] A aplicação deve ter um formulário com dois campos de entrada para que o usuário possa inserir os números que definem o intervalo (x a y).
  - [x] Os números inseridos devem ser validados para garantir que:
    - [x] Ambos os números são inteiros positivos.
    - [x] O valor de x deve ser menor que y.
    - [x] O intervalo não deve ser menor ou igual a zero.
  - [x] Após a inserção e validação dos números, o frontend deve fazer uma requisição à API Django para obter o resultado do cálculo.
  - [x] A resposta deve ser exibida na mesma página.

- **Backend (API Django):**
  - [x] Desenvolver uma rota que receba dois números (x e y) via solicitação HTTP.
  - [x] A API deve calcular o menor número inteiro que é divisível por todos os números do intervalo x a y.
  - [x] Retornar o resultado para o frontend.

### Tecnologias

- **Frontend:** React
- **Backend:** Django
- **Estilização:** Escolha livre entre CSS puro, pré-processadores (como SASS ou LESS) ou bibliotecas de componentes estilizados (como styled-components).

## Build e Execução

### Pré-requisitos

Antes de iniciar o build do projeto, você precisa ter os seguintes softwares instalados em sua máquina:

- Python: ^3.12.7
- Node.js: ^20.18.0
- npm: ^10.8.2
- make: ^4.4.1

### Comandos para Build

Para construir o projeto, execute:

```
make build
```

Este comando irá:

- Limpar o build anterior, se este existir.
- Criar um ambiente virtual para o backend com suas dependências instaladas.
- Instalar as dependências do backend.
- Construir o frontend.

### Execução do Projeto

Após construir o projeto, você pode executar os servidores do backend e do frontend usando o comando:

```
make run
```

Isso irá iniciar tanto o servidor Django (backend) quanto o servidor React (frontend).

### Acesso à Aplicação

Após iniciar os servidores, você poderá acessar o frontend através do navegador e o backend via
requisições HTTP nos endereços:

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
