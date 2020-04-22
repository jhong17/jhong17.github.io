const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function () {
  console.log(`Server running at port ${port}`);
});
