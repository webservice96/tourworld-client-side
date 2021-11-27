import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <Container className="py-5 text-center">
            <h1>That page doesn't exist!</h1>
            <p>Sorry, the page you were looking for could not be found!!</p>
            <Link to="/">
                <Button variant="info">Goto Home Page</Button>
            </Link>
        </Container>
    );
};

export default Page404;