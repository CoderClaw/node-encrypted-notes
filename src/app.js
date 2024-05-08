const express = require('express');
const expressLayout = require('express-ejs-layouts');

const home = require('./routes/home.route');

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.static('public'))

//view engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

app.use("/",home);

app.listen(PORT, ()=>{
    console.log(`escuhando en el puerto ${PORT}`)
})