const express = require('express');
const expressLayout = require('express-ejs-layouts');

const home = require('./routes/home.route');
const login = require('./routes/login.route');
const signup = require('./routes/signup.route');
const about = require('./routes/about.route');

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//view engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

app.use("/",home);
app.use("/",login);
app.use("/",signup);
app.use("/",about);

app.listen(PORT, ()=>{
    console.log(`escuhando en el puerto ${PORT}`)
})