npm init -y (já aceita tudo)
npm install nodemon -D (altera em tempo real a aplicação, cria o node_modules e o nosso package-lock.json)
npm install cors (controla quem acessa sua aplicação)
npm install dotenv (cria arquivos de configuração que fica desacoplado no servidor(.env))
npm install express (cria aplicação rest com node)
npm install openai (a biblioteca da IDE de inteligencia artificial)
npmjs.com (tem utilidades para ferramenta)

camadas:
- Controllers: controlar quem acessa as requests e responses

- Rotas: controla quem vai o apontamento de endereços para os controllers

- Model: é a forma de entrada/saida de dados do servidor

- Config: serve para colocar config em outras aplicações (terceiros)

- Config Não embarcadas (.env): isola os dados sensiveis