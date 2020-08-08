//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "899989898",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1120]
    },
    {
        name: "Marcelo Tadini",
        avatar: "https://avatars1.githubusercontent.com/u/57718626?s=400&u=ddffa661d917bb9445326c75bb7b8916405412c1&v=4",
        whatsapp: "999052802",
        bio: "Entusiasta das melhores tecnologias de física avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Física",
        cost: "30",
        weekday: [1],
        time_from: [720],
        time_to: [1120]
    }
]

const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}


//Funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        //Add objetos a lista de profs
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}


//Servidor
const express = require('express')
const server = express()
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

