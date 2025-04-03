// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');


// const app = express();

// app.use(cookieParser());



// app.get('/', function(req, res) {
//     // //hash password
//     // bcrypt.genSalt(10, function(err, salt) {
//     //     bcrypt.hash('myPassword', salt, function(err, hash) {
//     //        // console.log(hash);
            
//     //     });
//     // });
//     //check password
//     // bcrypt.compare('myPassword', '$2b$10$L8E2WSEDdV6QDC6OOxe3LenAkv78sl2C9WTHvk8.iP6IuHIwUwVW.', function(err, result) {
//     //     console.log(result); // true
//     // }
//     // );

//     //jwt token
//    let token= jwt.sign({email: "nazrul@gmail.com"},"secretkey");
//    res.cookie('token',token)
//    console.log(token);
//     res.send('Hello World!');
 
// })

// //verifytoken
// app.get('/read', function(req, res) {
//     let data = jwt.verify(req.cookies.token, "secretkey");
//     console.log(data);

// });

// app.get('/read', function(req, res) {
//     console.log(req.cookie());
//     res.send('Hello World!');
// });

// app.listen(3000);

//===============================================

const express = require('express');
const cookieParser = require('cookie-parser');
const userMode = require('./models/user');
const app = express();
const Path2D = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path2D.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', async (req, res) => {
    let { username, password, email, age } = req.body;
    let createUser = await userMode.create({
        username,
        password,
        email,
        age
    });
    res.send('User created');
});
app.listen(3000);