const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

BlogPost.create ({
    title: 'The Mythbuster`s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty them everything'
   }, (error, blogpost) => {
       console.log (error,blogpost)
})
/*
BlogPost.create ({
    title: 'The Mythbuster`s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty them everything'
   }, (error, blogpost) => {
       console.log (error,blogpost)
})

BlogPost.find({}, (error, blogspot) =>{
    console.log(error,blogspot)
 })
 BlogPost.find({
    title: 'The Mythbuster`s Guide to Saving Money on Energy Bills'
},(error,blogspot) => {
    console.log(error,blogspot)

})

BlogPost.find({
    title: /The/}, (error,blogspot) => {
    console.log(error,blogspot)
})
var id= "62830689beef84d41d8622da"
BlogPost.findById(id, (error, blogspot) => {
    console.log(error,blogspot)
})



var id= "62830689beef84d41d8622da"
BlogPost.findByIdAndUpdate(id, {
    tiltle:'Updated title'
},(error,blogspot) => {
    console.log(error,blogspot)
})

var id= "62830689beef84d41d8622da"
BlogPost.findByIdAndDelete(id,(error,blogspot)=>{
    console.log(error,blogspot)
})
*/