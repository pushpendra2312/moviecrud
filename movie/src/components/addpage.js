import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import axios from "axios";

function AddMovies() {
  const [movie_name, setmovieName] = useState("");
  const [movie_duration, setmovieDuration] = useState("");
  const [movie_rating, setmovieRating] = useState('');
  const [movie_year, setmovieYear] = useState('');

  function addMovies(e) {
    e.preventDefault();
    const movies = {
      movie_name, movie_duration, movie_rating, movie_year
    }
    console.log(movies);
    axios.post('http://localhost:5002/add', movies)
      .then(res => console.log(res.data));
  }
  return (
    <Form onSubmit={addMovies}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control
          type="text"
          value={movie_name}
          required
          onChange={(e) => {
            setmovieName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="text"
          value={movie_duration}
          required
          onChange={(e) => {
            setmovieDuration(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="text"
          value={movie_rating}
          required
          onChange={(e) => {
            setmovieRating(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Released Year</Form.Label>
        <Form.Control
          type="text"
          value={movie_year}
          required
          onChange={(e) => {
            setmovieYear(e.target.value);
          }}
        />
      </Form.Group>
      <input type="submit" value="Submit" />
    </Form>
  );
}
export default AddMovies;
