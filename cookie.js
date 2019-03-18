var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();
app.use(cookieParser());


app.get('/', function(req, res){
   res.cookie('username', 'yash');
   res.cookie('password','tandon');
   res.send('cookies');
   if(req.cookies.username === 'yash' && req.cookies.password === 'tandon'){
        console.log("Successfully Logged in.....");
   } 
   else{
        console.log("Incorrect Credentials");
   }
});

app.listen(process.env.PORT, function(){
  console.log("Express server listening");
});
