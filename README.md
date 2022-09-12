# Motors Shop API

## Descrição
- API para vendas e leilões da automoveis

## Tecnologias utilizadas
<div display="flex">
  <img src="https://img.shields.io/badge/-nodejs-339933?logo=node.js&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-express-000000?logo=express&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-typescrypt-3178C6?logo=typescript&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-typeorm-FE0902?logo=typescript&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-postgresql-4169E1?logo=postgresql&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-jwt-000000?logo=JSON Web Tokens&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/bcrypt-yellow?style=for-the-badge&logo=bcrypt&logoColor=white"/>
  <img src="https://img.shields.io/badge/class%20transformer-purple?style=for-the-badge&logo=class-transformer&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"/>
</div>

## Base URL
- https://motorsshop-api.herokuapp.com/

## Documentação
- <a href="https://motorsshop-api.herokuapp.com/doc/" target="_blank">Visitar documentação<a/>

## Instalação

  Para inciar esta aplicação, é necessário instalar as dependências.Portanto utilize o comando abaixo para instalar tais dependências
  
  ```bash
    yarn install
  ```
  Atenção: é necessário utilizar o yarn pois esse projeto foi iniciado com esse gerenciador de pacotes.

  Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:
  
```bash
   yarn --version
```
  Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:
  
```bash
   npm install --global yarn
```
## Rodando a aplicação
  
  Configure as variáveis de ambiente no seu .env, passando as credenciais corretas para conectar em seu banco local.
  
  Com isso feito, para rodar sua aplicação, basta utilizar o comando:
  
```bash
  yarn dev 
```
  
## Testes
  Essa aplicação possui testes, que serão utilizados para validar se todas as regras de negócio foram aplicadas de maneira correta.
  
  Os testes estão localizados em ```src/__tests__```.
  
  Na subpasta ```integration``` estão os testes de integração.
  
  Na subpasta ```unit``` estão os testes unitários.
  
  Já na subpasta ```mocks``` estão os dados que serão utilizados para os testes.
  
## Rodando os testes
  
  Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.
  
# Rodar todos os testes
  
```bash
  yarn test
```  
# Rodar todos os testes e ter um log ainda mais completo
 
```bash
  yarn test --all
```  
# Rodar os testes de uma pasta específica
  
```bash
  yarn test ./src/__tests__/integration/<subpasta>
  yarn test ./src/__tests__/unit/<subpasta>
``` 
  
