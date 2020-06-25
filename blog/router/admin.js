const express = require('express')
const router = express.Router();
const mongoose = require("mongoose")



router.get('/',(req,res)=>{
    res.render("admin/Tcc.handlebars")
//


})
router.get('/posts',(req,res)=>{
    res.send("pagina de posts ")

})
router.get('/categoria',(req,res)=>{
    res.render("admin/categorias.handlebars")

})
router.get('/categorias/add',(req,res)=>{
    res.render("admin/addcategorias ")

})
// router da pagina inicial
router.get('/c/add',(req,res)=>{
    res.render("admin/cc.handlebars")

})




// router do quem somos 
router.get('/c/quemsomos.handlebars/add',(req,res)=>{
    res.render("admin/quemsomos.handlebars")

})
router.get('/c3/quemsomos.handlebars/add',(req,res)=>{
    res.render("admin/quemsomos.handlebars")

})


// router das curiosidade
router.get('/c3/curiosidades.handlebars',(req,res)=>{
    res.render("admin/curiosidades.handlebars")

})

router.get('/c3/curiosidades.handlebars/add',(req,res)=>{
    res.render("admin/curiosidades.handlebars")

})
// router do cadastro
router.get('/c4/admin/cadastro.handlebars',(req,res)=>{
    res.render("admin/cadastro.handlebars")

})

router.get('/c4/ccadastro.handlebar/add',(req,res)=>{
    res.render("admin/cadastro.handlebars")

})
// router do login
router.get('/c5/admin/login.handlebars',(req,res)=>{
    res.render("admin/login.handlebars")
//app.js








router.get('/c4/admin/cadastro.handlebars',(req,res)=>{
    res.render("admin/cadastro.handlebars")


    
      var erros = []


      if(!req.body.nome || typeof req.body.nome== undefined || req.body.nome == null){
        erros.push({texto:"Nome inválido!"})
      }


      if(!req.body.email || typeof req.body.email== undefined || req.body.email == null){
        erros.push({texto:"Email inválido!"})
      }
      if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({texto:"Senha inválida!"})
      }
      if(!req.body.senha.length < 4 ){
        erros.push({texto:"Senha muito curta!"})
      }
      if(!req.body.senha != req.body.senha2){
        erros.push({texto:"Senhas não coincidem!"})
      }
    
      if(erros.length > 0){
        res.render("usuarios/registro", {erros: erros})
      }
      else{}


    })




})

router.get('/c5/admin/login.handlebars/add',(req,res)=>{
    res.render("admin/login.handlebars")

})
//cadastro    
router.post("/cadastro/nova",(req,res)=>{
    const novaCadastro = {
        nome: req.body.nome,
        slug:req.body.slug
    }
    new Cadastro(novaCadastro).save().then(() => {
        Console.log("cadastro salvo")

    }).catch((err) => {
        Console.log("erro")
    })
  
})






module.exports= router 