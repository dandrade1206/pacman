module.exports=function(app){

    app.get('/games/login', function(req,res){
        res.render('login.ejs');
    });

    app.post('/results', function(req,res){
        if(req.body.game == 'pacman'){
            res.redirect('/games/pacman/' + req.body.name);
        }
        if(req.body.game == 'tetris'){
            res.redirect('/games/tetris/' + req.body.name)
        }

    });

    app.get('/games/pacman/:name', function(req,res){
        var name = req.params.name;
        res.render('pacman.ejs', {name: name});
    });

    app.get('/games/tetris/:name', function(req,res){
        var name = req.params.name;
        res.render('tetris.ejs', {name: name});
    });

};