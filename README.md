# Cypress Test Automation Project

Este projeto de automação de testes utiliza o Cypress para testar o processo de cadastro e login em um site de desafio. Ele inclui um conjunto de testes automatizados que verificam diferentes fluxos de trabalho no site, utilizando dados de teste armazenados em um arquivo JSON.

## Tecnologias Envolvidas

- **Cypress**: Uma ferramenta de teste de front-end para aplicações web.
- **Node.js**: Um ambiente de execução JavaScript que permite executar código JavaScript no lado do servidor.
- **NVM (Node Version Manager)**: Uma ferramenta para gerenciar múltiplas versões do Node.js em uma única máquina.
- **Mochawesome**: Um framework de relatórios que gera relatórios em HTML e JSON para testes executados com Mocha.

## Estrutura do Projeto

- `cypress/fixtures/massas.json`: Arquivo JSON contendo os dados de teste.
- `cypress/e2e/desafio-techtalents.cy.js`: Arquivo de teste principal que realiza os testes de cadastro e login.
- `cypress/support/commands.js`: Arquivo onde são definidos comandos personalizados do Cypress.
- `cypress.config.js`: Arquivo de configuração do Cypress.

## Pré-requisitos

- Git
- NVM
- Node.js
- Cypress

## Instalação

### Instalando o Git

Baixe e instale o Git a partir do site oficial: [Git Downloads](https://git-scm.com/downloads)

### Instalando o NVM

NVM (Node Version Manager) permite instalar e gerenciar várias versões do Node.js.

#### Windows

1. Baixe o instalador do NVM para Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
2. Siga as instruções do instalador.

#### MacOS/Linux

1. Abra o terminal.
2. Execute o comando:

   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

3. Adicione as seguintes linhas ao seu arquivo de perfil (~/.bashrc, ~/.zshrc, etc.):

    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


4. Reinicie o terminal ou execute source ~/.bashrc.

##### Instalando Node

1. Após instalar o NVM, instale a versão mais recente do Node.js:

    nvm install node


2. Verifique a instalação:

    node -v
    npm -v

###### Instalando o Cypress e Mochawesome

1. Clone o repositório do projeto:

    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio

2. Instale as dependências do projeto:

    npm install


3. Instale o Cypress:

    npx cypress install

4. Instale o Mochawesome:

    npm install --save-dev mochawesome

###### Executando os Testes

Para rodar os testes automatizados, use o comando:

    npx cypress run

Para abrir a interface do Cypress e rodar os testes no modo interativo, use o comando:

    npx cypress open
###### Configurações Adicionais

Configuração de Reporter
Este projeto usa o mochawesome como reporter para gerar relatórios dos testes. As configurações estão no arquivo cypress.config.js.

Estrutura de Diretórios
. cypress/fixtures: Contém os arquivos de dados de teste.
. cypress/e2e: Contém os arquivos de testes E2E.
. cypress/support: Contém os comandos personalizados e outras configurações de suporte.
. cypress/results: Contém os relatórios gerados pelos testes.
