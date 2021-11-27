import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { tourName, tourdesc, _id, tourPhoto } = service;
    const permaLink = `/tour/${_id}`;

    return (
        <Col sm={12} md={4} className="mb-3">
            <Card className="card-custom">
                <Card.Img className="service-image" variant="top" src={tourPhoto} />
                <Card.Body>
                    <Card.Title>{tourName}</Card.Title>
                    <Card.Text>
                        {tourdesc.slice(0, 100)}
                    </Card.Text>
                    <Link to={permaLink}>
                        <Button variant="info">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;