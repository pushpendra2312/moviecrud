import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
function Datafetching() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5002/').then(res => {
            // console.log("h");
            console.log(res.data.map(movie => { return movie }));
            setMovies(res.data);
        }).catch(err => { console.error(err) })
    }, []);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Rating</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(movies)}
                    {movies.map((ele, index) => {
                        // console.log(typeof (ele));
                        return (
                            console.log(ele),
                            <tr key={index} ele={ele.id}>
                                <td>{ele.movie_name}</td>
                                <td>{ele.movie_duration}</td>
                                <td>{ele.movie_rating}</td>
                                <td>{ele.movie_year}</td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default Datafetching;
                                // useEffect(() => {
                                //     axios.get('http://localhost:5002').then(res => {
                                //         // console.log(res.data.map(movie => { return movie }));
                                //         setMovies(res.data);
                                //     }).catch(err => { console.error(err) })
                                // }, []);
                                // return (