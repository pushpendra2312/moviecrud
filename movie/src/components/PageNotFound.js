import React from 'react';
import { Link } from 'react-router-dom';

function PagenotFound() {
    return (
        <>
            <h1>Page Not Found</h1>
            <Link to="/">
                Back to Home
            </Link>
        </>
    );

}


export default PagenotFound;