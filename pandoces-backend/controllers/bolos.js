module.exports = app => {

      app.on('error', (error) =>{
        console.log(error)
    })    

    app.get("/bolos",(req, res)=> {
        res.json('Get dos bolos');
        console.log('oi');
    })

    app.post("/bolos", (req,res) => {
        console.log(req.body);
        res.json('Post dos bolos');
    })
}