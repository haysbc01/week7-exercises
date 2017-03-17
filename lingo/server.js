var express         = require('express'),
    bodyParser      = require('body-parser'),
    colors          = require('colors'),
    PORT            = 4000,
    googleTranslate = require('google-translate')('AIzaSyCh20cPfRu3RL3vklciNfkc9KHOpCzZulY'),
    app             = express();


app.get('/', (req,res)=>{
  res.sendfile('index.html');
});

app.server = app.listen(PORT, ()=>{
  console.log((`Server is running on port ${PORT}!`).america);
});
