require('colors');
var express    = require('express'),
    morgan     = require('morgan')('dev'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    googleTranslate = require('google-translate')('AIzaSyCh20cPfRu3RL3vklciNfkc9KHOpCzZulY'),
    Routes     = require('./routes'),
//     translate = require('public/js/translate_controller.js'),
    PORT = 3000;

var app = express();

//middlewear
app.use(
  morgan,
  bodyParser.urlencoded({extended : true}),
  bodyParser.json(),
  express.static('public')
);



app.get("/", (req, res) =>{
  res.sendFile("home.html", {root : "./public/html"});
});

app.post('/translate', (req,res)=>{
  googleTranslate.translate(req.body.word, req.body.from, req.body.to,(err,trans)=>{
    res.send(trans);
    console.log('it translated')
  })
})

app.post('/quiz', (req,res)=>{
  googleTranslate.translate(req.body.word, req.body.from, req.body.to,(err,transQuiz)=>{
    res.send(transQuiz);
    console.log(err)
  })
})











app.listen(PORT, () =>{
  console.log("Server up and running on port 3000!" .rainbow);
});
