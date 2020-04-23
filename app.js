const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


const port = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function(req, res) { res.render('about'); });
app.get('/projects', function(req, res) { res.render('projects'); });
app.get('/contact', function(req, res) { res.render('contact'); });
app.get('*', function(req, res) {  res.render('error'); });

app.listen(port, function () {
  console.log(`Server running at port ${port}!`);
});
