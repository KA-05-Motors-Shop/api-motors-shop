# Motors Shop API

## Descrição
- API para vendas e leilões da automoveis

## Tecnologias utilizadas
- NodeJs
- Express
- Typescript
- TypeORM
- PostgreSQL
- Jest
- JWT
- Bcrypt
- Yup
- Class-Transformer
- Swagger

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
  
  
