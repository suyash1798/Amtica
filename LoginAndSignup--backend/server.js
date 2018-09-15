const express = require('express');
const mongoose = require('mongoose');
const auth = require('./controller/auth');
const app = express();

app.use(express.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/LoginSignup', {useNewUrlParser: true})
    .then(()=>{console.log("connecting to database")})
      .catch((err)=>{console.log(err)});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Credentials", "true");
res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT', 'OPTIONS');
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
next();
});

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));


app.post('/register',auth.createUser);
app.post('/login',auth.login);


app.listen(3000,()=>{
   console.log('server listen on ',3000);
});

