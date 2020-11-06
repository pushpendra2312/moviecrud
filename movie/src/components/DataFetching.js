import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
function DataFetching() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = movies.filter((movie) => {
        return movie.movie_name.includes(searchTerm);
    });
    useEffect(() => {
        axios.get('http://localhost:5002/').then(res => {
            // console.log("h");
            console.log(res.data.map(movie => { return movie }));
            setMovies(res.data);
        }).catch(err => { console.error(err) })
    }, []);



    function DeleteFunction(ele) {
        console.log("clicked delete button");
        console.log(ele.id);
        axios.delete(`http://localhost:5002/delete/${ele.id}`).then(res => {
            console.log(res);
        })
        axios.get('http://localhost:5002/').then(res => {
            // console.log("h");
            console.log(res.data.map(movie => { return movie }));
            setMovies(res.data);
        }).catch(err => { console.error(err) })
    }
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    // value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
            </div>
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
                        {searchMovies.map((ele, index) => {
                            // console.log(typeof (ele));
                            return (
                                console.log(ele),
                                <tr key={index} ele={ele.id}>
                                    <td>{ele.movie_name}</td>
                                    <td>{ele.movie_duration}</td>
                                    <td>{ele.movie_rating}</td>
                                    <td>{ele.movie_year}</td>
                                    <button onClick={() => DeleteFunction(ele)} >Delete</button>
                                </tr>
                            );
                        }
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default DataFetching;