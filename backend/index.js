//const { response } = require("express");
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const movie = require("./models/movies.model");
const app = express();
const port = 5002;
//to check if db and server connection has benn established or not
sequelize
  .authenticate()
  .then(function (err) {
    console.log("DB Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });
app.use(cors());
app.use(express.json());
//get all movies
app.get("/", (request, response) => {
  movie.findAll().then((result) => response.json(result));

});

//find movie
app.get("/find/:id", (req, res) =>
  movie.findByPk(req.params.id).then((result) => res.json(result))
);
//add a movie
app.post('/add', (req, res) => {
  let movie_obj = {
    movie_name: req.body.movie_name,
    movie_duration: req.body.movie_duration,
    movie_rating: req.body.movie_rating,
    movie_year: req.body.movie_year
  }
  console.log("Movie object", movie_obj);
  movie.create(movie_obj).then((result) => res.json(result));
});

//update a movie 
app.put('/:id', (req, res) => {
  // let movie_obj = {}
  movie.update({
    movie_name: req.body.movie_name,
    movie_duration: req.body.movie_duration,
    movie_rating: req.body.movie_rating,
    movie_year: req.body.movie_year
  },
    {
      where: {
        id: req.params.id
      }
    }).then((result) => {
      res.send("Updated Successfully");
    })
});

//delete a movie
app.delete('/delete/:id', (req, res) => {
  movie.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => { res.send("Deleted Successfully"); });
});

app.listen(port, () => {
  console.log(`Server started successfully ${port}`);
});
