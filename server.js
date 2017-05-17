var express = require('express');
var app = express();
var bp = require('body-parser');
var path=require('path');
var port=8000;
// var session=require('session');
// var FileSotre = require('session-file-store')(session);
//
// app.use(session({
//     name: 'gameSession',
//     secret: 'aSecret',
//     saveUninitialized: true,
//     resave: true,
//     store: new FileStore()
// }));

app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname + '/clients')));
app.set('views', path.join(__dirname + '/clients/templates'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);
app.listen(port,function(){
    console.log('server running');
});

