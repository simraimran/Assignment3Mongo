let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with movie model 
// display certain model

let Movie = require('../models/movie');

/*Read Operation */
/* Get route for the movie list*/

router.get('/',(req,res,next)=>{
    Movie.find((err,movielist)=>{
        if (err)
        {
            return console.error(err);
        }
        else
        //console.log(movielist);
        {
           res.render('movie/list',{
            title:'Movies', 
            Movielist:movielist
        })
        }

    });

});


/*--add*/
router.get('/add',(req,res,next)=>{
    res.render('movie/add', {title:'Add Movie'})

});


/*--add*/
router.post('/add',(req,res,next)=>{
    let newMovie= Movie ({
        "name":req.body.name,
        "year": req.body.year,
        "genre": req.body.genre,
        "rating": req.body.rating,
        "age": req.body.age,
        "price": req.body.price

    });
    Movie.create(newMovie,(err,Movie) =>{
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/movie-list');
        }
        })
});

/*--edit*/
router.get('/edit/:id',(req,res,next)=>{
    let id = req.params.id;
    Movie.findById(id,(err,movieToEdit)=>{
     if(err)
     {
        console.log(err);
        res.end(err);
     }
     else{
        res.render('movie/edit',{title:'Edit Movie', movie:movieToEdit})
     }
    });

});

/*--edit*/
router.post('/edit/:id',(req,res,next)=>{
    let id= req.params.id;
    let updateMovie= Movie({
        "_id":id,
        "name":req.body.name,
        "year": req.body.year,
        "genre": req.body.genre,
        "rating": req.body.rating,
        "age": req.body.age,
        "price": req.body.price

      

    });
    Movie.updateOne({_id:id},updateMovie,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/movie-list');
        }
    });

});

/*--delete*/
router.get('/delete/:id',(req,res,next)=>{
    let id= req.params.id;
    Movie.deleteOne({_id:id},(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/movie-list');
        }
    })

});



module.exports=router; 