import React from 'react';
// import Datafetching from './DataFetching';
import DataFetching from './DataFetching';
function ShowAllMovies() {
    return (
        <>
            <h1>
                {/* {console.log("In show")} */}
                Display All Movies
            </h1>
            <DataFetching />
        </>
    );
}


export default ShowAllMovies;