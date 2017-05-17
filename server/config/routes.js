module.exports=function(app){

    app.get('/pacman/login', function(req,res){
        res.render('login.ejs');
    });

    app.post('/results', function(req,res){
        if(req.body.game == 'pacman'){
            res.render('pacman.ejs', {name: req.body.name});
        }
        if(req.body.game == 'tetris'){
            res.render('tetris.ejs', {name: req.body.name});
        }

    });



};