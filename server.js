var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send("Hello Jenkins")
});

app. get('/hello',function(req,res){
    var msg = "Hello " +  req.query.name || "Anonymous"
});
app.listen(process.env.PORT || 8084);
module.exports = app;