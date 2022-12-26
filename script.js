let express = require('express');
let app = express();
let port = 1225;

app.set("view-engine", "ejs");
app.get('',function(req,res){
    res.render("index.ejs")
})
app.listen(port);


// const express = require('express');
// const app = express();
// const port = 1234

// app.set('view-engine','ejs');
// app.get('',(req,res)=>{
// res.render('home.ejs');
// })
// app.post('',(req,res)=>{});

// app.get('*',(req,res)=>{
// res.send('404 Error!');
// })


// app.listen(port);