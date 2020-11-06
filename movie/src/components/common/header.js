import React from 'react';
import { NavLink } from "react-router-dom";
// import movie from '../../../../backend/models/movies.model';
function Header() {
    const activeStyle = { color: 'orange' };

    // let movie_name = "";
    return (
        <nav>
            {/* {console.log("navbar is running")} */}
            {/* <NavLink to='/find' activeStyle={activeStyle}>Search Movies</NavLink> {" | "} */}
            <NavLink to='/add' activeStyle={activeStyle}>Add Movies</NavLink>{" | "}
            <NavLink to='/' exact activeStyle={activeStyle}>Show All Movies</NavLink>
        </nav>
    );
}

export default Header;
