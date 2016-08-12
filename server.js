var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send("Hello Jenkins")
});

app.get('/message',function(req,res){
    var msg = "Hello " +  (req.query.name || "Anonymous");
    res.send(msg);
});
app.listen(process.env.PORT || 8084);
module.exports = app;