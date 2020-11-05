import React from 'react';
import { NavLink } from "react-router-dom";
function Header() {
    const activeStyle = { color: 'orange' };

    return (
        <nav>
            {/* {console.log("navbar is running")} */}
            <NavLink to='/find' activeStyle={activeStyle}>Search Movies</NavLink> {" | "}
            <NavLink to='/add' activeStyle={activeStyle}>Add Movies</NavLink>{" | "}
            <NavLink to='/' exact activeStyle={activeStyle}>Show All Movies</NavLink>
        </nav>
    );
}

export default Header;
