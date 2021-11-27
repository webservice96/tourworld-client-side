import React, { useState } from 'react';
import { Container, Button, Row, Spinner } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Services/Service/Service';
import './ServicePage.css';


const ServicePage = () => {
    const [services, serviceLoading] = useServices();

    if (serviceLoading) {
        return (
            <Container className="py-5 text-center">
                <Spinner animation="grow" />
            </Container>
        )
    }

    return (
        <div className="service-sec py-5" style={{ backgroundColor: '#ECFAFA' }}>
            <Container>
                <h2 className="mb-2 text-center">Planning Your Holiday</h2>
                <p className="mb-5 px-5 text-center">Our family has been dealing with Travel House for a number of years and today I called and dealt with NICK and must say I was dealt with professionally and have my ticket. NICK was excellent and helped me with all the queries and issues I had. Thank you for your wonderful service.</p>
                <Row>
                    {
                        services.map((service) => (
                            <Service key={service.Id} service={service} />
                        ))
                    }
                </Row>

            </Container>
        </div>
    );
};

export default ServicePage;