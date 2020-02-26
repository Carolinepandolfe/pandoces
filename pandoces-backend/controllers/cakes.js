module.exports = app =>{
    app.get('/bolos', (req,res) =>{
        res.json('Uhuuu')
    })

    app.post('/bolos', (req,res) =>{
        console.log(req.body);
        res.json('')
    })
}