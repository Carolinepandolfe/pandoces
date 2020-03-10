const express = require('express');
const port = 3000;
const consign =  require('consign');
const app = express();


consign()
    .include('controllers')
    .into(app)
    
app.listen(port, () =>{
    console.log(`Rodando na Porta ${port}`)
})

