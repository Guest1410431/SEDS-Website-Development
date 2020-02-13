var express = require('express');

var session;
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use('/assets', express.static(__dirname + "/public"));

app.get('/', function(request, response) {
    response.render('index');
});
app.get('/about_us', function(request, response) {
    response.render('about_us');
});
app.get('/contact_us', function(request, response) {
    response.render('contact_us');
});
app.get('/projects', function(request, response) {
    response.render('projects');
});
app.get('/join', function(request, response) {
    response.render('join');
});
app.get('/donate', function(request, response) {
    response.render('donate');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
