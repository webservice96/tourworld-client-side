import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BookAppointment from '../../BookAppointment/BookAppointment';

const SingleService = () => {
    const [singleServices, setSingleService] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { tourId } = useParams();
    useEffect(() => {
        fetch(`https://tour-world.herokuapp.com/tour/${tourId}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data);
                setIsLoading(false);
            });
    }, []);

    const { tourName, tourdesc, tourPhoto, tourCost } = singleServices;


    if (isLoading) {
        return (
            <Container className="py-5">
                <h4>Loading...</h4>
            </Container>
        );
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={8}>
                    <Card>
                        <Card.Img className="single-image" variant="top" src={tourPhoto} />
                        <Card.Body>
                            <Card.Title>{tourName}</Card.Title>
                            {tourdesc}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="singlepage-booking">
                    <BookAppointment tourName={tourName} tourCost={tourCost} />
                </Col>
            </Row>
        </Container>
    );
};

export default SingleService;