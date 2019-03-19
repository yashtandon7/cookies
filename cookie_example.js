
let express = require('express'); 
let cookieParser = require('cookie-parser'); 
let app = express();
app.use(cookieParser()); 

app.get('/', function(req, res){ 
     res.send('welcome to express app'); 
}); 
  
let users = { 
     name : "Yash", 
     Age : "18"
} 

let user = { 
     name : "Tandon", 
     Age : "21"
} 
  
app.get('/setuser', function(req, res){ 
     res.cookie("YashData", users, {domain:'nodejscookie.herokuapp.com',maxAge: 200000, httpOnly: true});
     res.cookie("TandonData", user, {domain:'nodejscookie.herokuapp.com',maxAge: 200000, httpOnly: true});
     res.send('user data added to cookie'); 
}); 
  
app.get('/getuser', function(req, res){ 
     res.send(req.cookies); 
     console.log('print cookies');
}); 

app.get('/remove', function(req, res){   
     res.clearCookie('TandonData');
     res.clearCookie('YashData');
     res.send('user logout successfully'); 
}); 
  
app.listen(process.env.PORT, function(err){ 
     if(err) 
     throw err; 
     console.log('listening on port'+process.env.PORT); 
}); 
