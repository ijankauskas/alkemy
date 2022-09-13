const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const logger = require('morgan');
const methodOverride =  require('method-override');

const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');



app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'It is a secret',
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddleware);


const auth = require('./routes/auth');
const characters = require('./routes/characters');
const movies = require('./routes/movies');


app.use('/auth', auth);
app.use('/characters', characters);
app.use('/movies', movies);




app.listen(3000, ()=>{
    console.log('servidor corriendo')
})