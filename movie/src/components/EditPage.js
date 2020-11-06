import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from 'axios';
// import Header from "./Header";
import { useHistory, useParams } from "react-router-dom";
function EditPage() {
    const history = useHistory();
    const { id } = useParams();
    console.log('id =', id);
    // const [movies, setMovies] = useState([]);
    const [movie_name, setmovieName] = useState("");
    const [movie_duration, setmovieDuration] = useState("");
    const [movie_rating, setmovieRating] = useState('');
    const [movie_year, setmovieYear] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:5002/find/${id}`).then(res => {
            // console.log("h");
            console.log(res.data);
            setmovieName(res.data.movie_name);
            setmovieRating(res.data.movie_rating);
            setmovieYear(res.data.movie_year);
            setmovieDuration(res.data.movie_duration);
            // console.log(res.data.map(movie => { return movie }));
            // setMovies(res.data);
        }).catch(err => { console.error(err) })
    }, [id]);
    function UpdateMovie(e) {
        e.preventDefault();
        const movies = {
            movie_name, movie_duration, movie_rating, movie_year
        }
        axios.put(`http://localhost:5002/${id}`, movies).then(res => console.log(res.data));
        history.push('/');
    }
    return (
        <Form onSubmit={UpdateMovie}>
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

export default EditPage;