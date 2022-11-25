let mongoose= require('mongoose');

//create movie model

let movieModel=mongoose.Schema({  // creating schema to connect database values--->
    name: String,
    year: Number,
    genre: String, 
    rating: Number,
    age: String,
    price: Number,

},
    {
    // look for collections books  
    collections:"movies"
    }
);
module.exports= mongoose.model('Movie',movieModel);

