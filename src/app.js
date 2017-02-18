let express = require('express');
let app = express();
let ejs = require('ejs-locals');
let path = require('path');

let appRouter = require('./routes/');

//Set up view engine.
app.engine('ejs',ejs);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use("/demo", appRouter);

module.exports = app;
