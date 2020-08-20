//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses} = require('./pages')

const nunjucks = require('nunjucks')

//Configurando nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Configuração de arquivos
server.use(express.static("public"))


    //Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

    .listen(5500)

//Comando para iniciar o servidor: npm run dev