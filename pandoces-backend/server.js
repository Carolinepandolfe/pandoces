const customExpress = require('./config/customExpress')
const app = customExpress();
const port = 3000;

app.on(port, () =>{
    console.log(`Rodando na Porta ${port}`)
})

