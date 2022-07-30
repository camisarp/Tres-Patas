<h1 align="center">

<h1 align="center"> Projeto Final {Reprograma} - Três Patas :paw_prints:

## Todas em Tech(TeT) do curso de Desenvolvedora Backend | Turma On16 da [{Reprograma}](https://www.reprograma.com.br/) 

<br>
<br>

<p align="center">
<img src= "https://user-images.githubusercontent.com/84551213/181835677-9110dff6-8fd8-400c-80f7-a160e0177a36.gif" width="60%" height="50%"/>
</p>


 Este projeto é uma API com CRUD completo que contém um banco de dados, Autenticação e Login.

<br>
<br>

<!--ts-->

- [Todas em Tech(TeT) do curso de Desenvolvedora Backend | Turma On16 da {Reprograma}](#todas-em-techtet-do-curso-de-desenvolvedora-backend--turma-on16-da-reprograma)
- [:cat2: Objetivo :guide_dog:](#cat2-objetivo-guide_dog)
- [📁 Arquitetura do Projeto](#-arquitetura-do-projeto)
- [:woman_technologist: Tecnologias e Dependências Utilizadas](#woman_technologist-tecnologias-e-dependências-utilizadas)
- [:construction_worker_woman: Instalação](#construction_worker_woman-instalação)
- [:alembic: Interface Gráfica Para Realizar os Testes](#alembic-interface-gráfica-para-realizar-os-testes)
- [:unlock: Preparando o Ambiente Para Autenticação](#unlock-preparando-o-ambiente-para-autenticação)
- [:closed_lock_with_key: Testando Rotas de Login e Rotas Com ou Sem Proteção](#closed_lock_with_key-testando-rotas-de-login-e-rotas-com-ou-sem-proteção)
- [:test_tube: Teste Jest](#test_tube-teste-jest)
- [:clinking_glasses: Agradecimentos](#clinking_glasses-agradecimentos)
- [:mage_woman: Autora](#mage_woman-autora)


<!--ts-->

<br>
<br>

## :cat2: Objetivo :guide_dog:

<br>

O projeto tem como objetivo a adoção de pets com deficiências e/ou doenças preexistentes. Sabendo como é difícil a adoção esses seres de luz, ainda mas com suas limitações, isso fazem com que os adotantes pensem que é muito complicado cuidar, e achar veterinários e especialistas, até onde conseguir itens e remédios que podem ajudar a fazer a vida do pet especial “normal”. 
A intenção é incentivar a adoção responsável e mostrar os caminhos de ajuda, que não estamos sozinhos, que podemos dar todo amor e cuidado a esses pequenos seres, assim como eles o fazem sem pedir nada em troca.

<br>
<br>


## 📁 Arquitetura do Projeto

<br>

Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. 

```
 📁Tres-Patas
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 ongsOrTemporaryHomesController.js
   |  |    |- 📄 petsController.js
   |  |    |- 📄 petShopsOrSpecialtyHousesController.js
   |  |    |- 📄 movieController.js
   |  |    |- 📄 usersController.js
   |  |    |- 📄 vetOrSpecialistsController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 middleware
   |  |    |- 📄 authentication.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 ongsOrTemporaryHomesModel.js
   |  |    |- 📄 petShopsOrSpecialtyHousesModel.js
   |  |    |- 📄 petsModel.js
   |  |    |- 📄 usersModel.js
   |  |    |- 📄 vetOrSpecialistsModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 index.js
   |  |    |- 📄 ongsOrTemporaryHomesRoutes.js
   |  |    |- 📄 petShopsOrSpecialtyHousesRoutes.js
   |  |    |- 📄 petsRoutes.js
   |  |    |- 📄 usersRoutes.js
   |  |    |- 📄 vetOrSpecialistsRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |  |--📁 test
   |  |   |- 📄 ongsOrTemporaryHomes.test.js
   |  |   |- 📄 pets.test.js
   |  |   |- 📄 petShopsOrSpecialtyHouses.test.js
   |  |   |- 📄 users.test.js
   |  |   |- 📄 vetOrSpecialists.test.js
   |  |
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 .eslintrc.json
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```

<br>
<br>


## :woman_technologist: Tecnologias e Dependências Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `jest`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação.|
| `heroku`| hospeda a documentação.|

<br>
Link para a documentação:

📝 [Swagger](https://tres-patas.herokuapp.com/my-documentation-route/)

📝 [Heroku](https://tres-patas.herokuapp.com/)

<br>
<br>

<h1 align="center">

<p align="center">
<img src= "https://user-images.githubusercontent.com/84551213/181843086-1ba2dfa9-5ad1-4387-a1f6-b9b46c08490a.gif" width="500px" height="150"/>
</p>

## :construction_worker_woman: Instalação

<br>

```ps
# Clonar o repositório
$ git clone https://github.com/camisarp/Tres-Patas

# Entrar na pasta do repositório
$ cd Tres-Patas

# Instalar as dependências
$ npm install

# Executar o servidor para que você possa rodar o projeto localmente
$ npm start
```
<br>
<br>


## :alembic: Interface Gráfica Para Realizar os Testes

<br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Post, Get, Patch e Delete através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br>

▫️ POST - Rota de criação de ONG ou Lares Temporários
<br>

<img src= "https://user-images.githubusercontent.com/84551213/181865627-8a8fae6c-24bc-4c56-b8cd-6d4fe3ece577.png" width="70%" height="40%"/>
</p>

<br>

▫️ GET - Rota que retorna todos os Pets para adoção
<br>

<img src= "https://user-images.githubusercontent.com/84551213/181865622-ca0a19a0-0b1f-46d4-9595-af64a7d257f7.png" width="70%" height="40%"/>
</p>

<br>

▫️ PATCH - Rota que altera alguma propriedade de PetShops ou Casas Especializadas 
<br>

<img src= "https://user-images.githubusercontent.com/84551213/181865624-33e866e1-1061-4e07-8d59-b8ade333b45c.png" width="70%" height="40%"/>
</p>

<br>

▫️ DELETE - Rota que deleta um Veterinário ou Especialista por id
<br>

<img src= "https://user-images.githubusercontent.com/84551213/181865621-174314bd-dc0f-4cc2-9859-bc1d0173bf44.png" width="70%" height="40%"/>
</p>

<br>
<br>


## :unlock: Preparando o Ambiente Para Autenticação

<br>

⚠️ Criar arquivo .env (adicionar no .gitignore) e usar o arquivo .env.example como modelo, colocando assim os seus dados.

Seguir a ordem de instalações no terminal:

- Inicialize o comando de instalação `npm i express cors` para instalar o cors.
- Inicialize o comando de instalação `npm i --save-dev dotenv` para instalar dontenv.
- Inicialize com o comando `npm start` para que você possa executar os testes.

<br>
<br>


## :closed_lock_with_key: Testando Rotas de Login e Rotas Com ou Sem Proteção

<br>

 📢 Todas as rotas existentes neste projeto:

- Users

| Verbo  |   EndPoint                             |        Descrição da Rota                                             | Status | Auth |
| ------ | -------------------------------------- | ---------------------------------------------------------------------| ------ |----- |
| POST   | /registration                          | Adicionar um novo usuário                                            |   201  |  ✔️  |
| GET    | /search                                | Listar todos os usuários                                             |   200  |  ❌  |
| POST   | /login                                 | Devolve o token de um usuário                                        |   200  |  ✔️  |
| DELETE | /delete/:id                            | Remove um usuário                                                    |   200  |  ✔️  |
<br>

- Pets

| Verbo  |   EndPoint                              | Descrição da Rota                                                   | Status | Auth |
| ------ | --------------------------------------- | --------------------------------------------------------------------| ------ |----- |
| GET    | /pets                                   | Listar todos os pets e pesquisar por espeficicações cadastrados     |   200  |  ❌  |
| GET    | /pets/:id                               | Mostra o cadastro do pets por ID                                    |   200  |  ❌  |
| POST   | /pet/registration                       | Registra um novo pets                                               |   201  |  ✔️  |
| PATCH  | /pet/update/:id                         | Altera alguma informação sobre o pets                               |   201  |  ✔️  |
| DELETE | /pet/delete/:id                         | Remove o cadastro de um pets                                        |   200  |  ✔️  |
<br>

- ONG Or temporary Homes  

| Verbo  |   EndPoint                               | Descrição da Rota                                                   | Status | Auth |
| ------ | ---------------------------------------- | --------------------------------------------------------------------| ------ |----- |
| GET    | /ongsOrTemporaryHomes                    | Listar todos as ONGs e Lares temporarios e pesquisar por espeficicações cadastrados     |   200  |  ❌  |
| GET    | /ongsOrTemporaryHome/:id                 | Mostra o cadastro da ONGs e Lares temporarios por ID                                   |   200  |  ❌  |
| GET    | /ongsOrTemporaryHomes/address            | Mostra o cadastro da ONGs e Lares temporarios por bairro                                   |   200  |  ❌  |
| POST   | /ongsOrTemporaryHomes/registration       | Registra uma nova ONGs e Lares temporarios                                              |   201  |  ✔️  |
| PATCH  | /ongsOrTemporaryHome/update/:id          | Altera alguma informação sobre a ONGs e Lares temporarios                              |   201  |  ✔️  |
| DELETE | /ongsOrTemporaryHome/delete/:id          | Remove o cadastro de uma ONGs e Lares temporarios                                       |   200  |  ✔️  |
<br>

- Pet Shops Or Specialty Houses

| Verbo  |   EndPoint                               | Descrição da Rota                                                   | Status | Auth |
| ------ | ---------------------------------------- | --------------------------------------------------------------------| ------ |----- |
| GET    | /petShopsOrSpecialtyHouses               | Listar todos os PetShop e Casas Especializadas e pesquisar por espeficicações cadastrados     |   200  |  ❌  |
| GET    | /petShopsOrSpecialtyHouse/:id            | Mostra o cadastro do PetShop e Casas Especializadas por ID                                   |   200  |  ❌  |
| GET    | /petShopsOrSpecialtyHouses/address       | Mostra o cadastro do PetShop e Casas Especializadas por bairro                                   |   200  |  ❌  |
| POST   | /petShopsOrSpecialtyHouse/registration   | Registra um novo PetShop e Casas Especializadas                                              |   201  |  ✔️  |
| PATCH  | /petShopsOrSpecialtyHouse/update/:id     | Altera alguma informação sobre o PetShop e Casas Especializadas                              |   201  |  ✔️  |
| DELETE | /petShopsOrSpecialtyHouse/delete/:id     | Remove o cadastro de um PetShop e Casas Especializadas                                       |   200  |  ✔️  |
<br>

- Veterinarian or Specialists

| Verbo  |   EndPoint                               | Descrição da Rota                                                   | Status | Auth |
| ------ | ---------------------------------------- | --------------------------------------------------------------------| ------ |----- |
| GET    | /vetOrSpecialists                        | Listar todos os veterinarios e especialistas e pesquisar por espeficicações cadastrados     |   200  |  ❌  |
| GET    | /vetOrSpecialist/:id                     | Mostra o cadastro do veterinarios e especialistas por ID                                   |   200  |  ❌  |
| GET    | /vetOrSpecialists/address                | Mostra o cadastro do veterinarios e especialistas por bairro                                   |   200  |  ❌  |
| POST   | /vetOrSpecialist/registration            | Registra um novo veterinarios e especialistas                                              |   201  |  ✔️  |
| PATCH  | /vetOrSpecialist/update/:id              | Altera alguma informação sobre o veterinarios e especialistas                             |   201  |  ✔️  |
| DELETE | /vetOrSpecialist/delete/:id              | Remove o cadastro de um veterinarios e especialistas                                      |   200  |  ✔️  |
<br>

 *PROTEÇÃO* Para testar via Postman precisa fazer o login.

<br>
<br>


## :test_tube: Teste Jest

</br>

📌 Instalar o Jest dentro da pasta Tres-Patas

- Inicialize o comando de instalação `npm install --save-exact jest@28.1.0 --save-dev` para instalar o Jest.
- Incluir o no package_json -> `"test:watch": "jest --watchAll"`.
- Inicialize com o comando `npm run test:watch` para testar.

<br>
<br>

## :clinking_glasses: Agradecimentos

</br>

Agradecimento as Professoras [Mayhhara F Lilian](https://www.linkedin.com/in/mayhhara-morais-78040a200/) e a [Beatriz Ramerindo](https://www.linkedin.com/in/beatriz-ramerindo/) por toda atenção, paciência e orientações fantásticas, melhores Profas da vida!  A “prima” Jani, que facilitou muito a vida da gente, e fez a ON16 se formar família, e a Ju, que aguentou a gente, perturbadas mais felizes. Amamos vocês! 💜 <br>
Agradecer também a minha namorada maravilhosa que me apoia em quase tudo na vida e nos estudos, menos quando vou comprar meus "cacarecos" :smiling_face_with_three_hearts:. <br>
E não poderia faltar, agradeço todos os dias não ter entrado na Reprograma antes, só na 3ª tentativa, minha SORTE! Sou muito feliz por ter feito amigas fantásticas, lindas, doidas e faladeiras! Amo vocês OFF ON16! :heart_on_fire:
<br>
<br>


<p align="center">
<img src= "https://user-images.githubusercontent.com/84551213/181865191-733e65a1-4210-42d2-b32e-8a9a7aa005ac.gif" width="50%" height="30%"/>
</p>


## :mage_woman: Autora

<br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/84551213/181837816-99598bea-75fc-4ce9-893e-f90383f972d7.png" width="200px;" alt="Foto de Perfil de Camila Ribeiro"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/camila-ribeiro-pinto/" target="_blank"><img src="https://img.shields.io/badge/-Camila_Ribeiro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/camila-ribeiro-pinto/" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>
