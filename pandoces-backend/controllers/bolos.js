module.exports = app => {
    app.get("/bolos",(req, res)=> {
        res.json('Get dos bolos');
    })
}