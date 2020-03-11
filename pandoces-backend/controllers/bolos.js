module.exports = app => {
    app.get("/bolos",(req, res)=> {
        res.json('Get dos bolos');
    })

    app.post("/bolos", (req,res) => {
        console.log(req.body);
        res.json('Post dos bolos');
    })
}