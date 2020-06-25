//carregando modulo 
const express = require('express')
const handlebars=require('express-handlebars')
const bodyparse = require('body-parser')
const app = express()
const admin = require("./router/admin")
const path = require("path")
const mongoose = require("mongoose")
app.use(express.static(path.join(__dirname,'public')));





// config
// body-paser
app.use(bodyparse.urlencoded({extended:true}))
app.use(bodyparse.json())

//handlebars
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('viwe engine','handlebars')

//mongoose

mongoose.connect('mongodb://localhost/aprendendo', {useNewUrlParser: true}).then(() =>{
            console.log("Conectado com sucesso!")
        }).catch((err) =>{
            mongoose.Promise = global.Promise;
            console.log("Erro ao conectar: " + err)
        })

//em breve 
// public 
app.unsubscribe(express.static(path.join(__dirname,"public")))


//rotas
app.use('/admin',admin)






//outros
const PORT= 8082
app.listen(PORT,()=>{
 
})