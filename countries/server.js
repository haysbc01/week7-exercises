var express   = require('express'),
    colors    = require('colors'),
    PORT      = 3000,
    app       = express(),
    bodyParser = require('body-parser'),
    // Country = require('./models/country.js'),
    countries = require('./models/countries.json');

app.use(express.static('public'), bodyParser.json());

app.get('/', (req,res)=>{
  res.sendFile('index.html', {root: './public/html'});
});

app.get('/countries', (req,res)=>{
  res.send(countries);
})

app.get('/search', (req,res)=>{
  res.send(countries.filter((country)=>{
      return country.name.match(req.query.searchTerm);
  }) )

});

app.post('/travel',(req,res)=>{
  // req.body is the country that we passed up

for(var i = 0; i<countries.length; i++){
  if(countries[i].code === req.body.code) {
    countries[i] == req.body;
    return res.sendStatus(200);
  }
}






})

app.server = app.listen(PORT, ()=>{
  console.log((`Server is running on port ${PORT}!`).america);
});
