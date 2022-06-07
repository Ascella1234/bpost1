const express = require('express')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const homeController=require('./controllers/home')
const storePostController=require('./controllers/storePost')
const getPostController=require('./controllers/getPost')
const validateMiddleWare = require("./middleware/validateMiddleware")//;
const newUserController=require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController=require('./controllers/loginUser')
const newPostController = require('./controllers/newPost')
const newPost = require('./controllers/newPost')
const expressSession = require('express-session')//;
const authMiddleware=require('./middleware/authMiddleware')//;
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')
mongoose.connect('mongodb+srv://AP:3262@cluster0.c2j5i.mongodb.net/test',{useUnifiedTopology: true, useNewUrlParser: true});


app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
   saveUninitialized: true,
}))

global.loggedIn = null;

app.use("*", (req, res, next)=>{
    loggedIn = req.session.userId;
    next()
});

app.use(fileUpload())

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(4000,() => {
    console.log('App listening on port 4000')
})


// app.get('/', async (req,res)=>{
//     const blogposts = await BlogPost.find({})
//     res.render('index',{
//         blogposts
//     });
// })



 //app.get('/posts/new'.newPostController)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// app.post('/posts/store', (req,res)=>{
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname,'public/img',image.name), async(error)=>{
//     await BlogPost.create({
//         ...req.body,
//         image:'/img/'+image.name
//     })
//     console.log(req.body)
//     res.redirect('/')
//     })
// })


  


app.use('/posts/store',  validateMiddleWare)
app.get('/',homeController)
app.get('/post/:id',getPostController)
app.post('/posts/store', authMiddleware, storePostController)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)//;
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)
app.get('/posts/new', authMiddleware, newPostController)
app.get('/auth/logout',logoutController)

let port = process.env.PORT;
if(port==null || port==""){
    port = 4000;
}

app.listen(port, ()=>{
    console.log('App listening...')
})