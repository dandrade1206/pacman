module.exports=function(app){

    app.get('/pacman/login', function(req,res){
        res.render('login.ejs');
    });

    app.post('/results', function(req,res){
        res.render('pacman.ejs', {name: req.body.name});

    });

};