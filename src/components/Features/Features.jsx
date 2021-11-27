import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css';

const features = [
    {
        id: 1, title: 'Travel', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>, content: 'Sponsorships are like unicorns or leprechauns, talked about often but they don’t actually exist. There is only dollars and cents, the ...'
    },
    {
        id: 2, title: 'Experience', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>, content: 'My response is usually harsh. Offended at the suggestion that a career that’s taken more than a decade to create could be ...'
    },
    {
        id: 3, title: 'Relax', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>, content: 'I have always made a living to make movies, never the other way around. When I first started I washed in a seafood restaurant ....'
    }
];


const Features = () => {
    let boxNum = 0;
    return (
        <div className="features-sec section-padding">
            <Container>
                <Row>
                    {
                        features.map((feature) => (
                            boxNum++,
                            <Col key={feature.id} sm={12} md={4} className={`feature-box f-box-${boxNum}`} >
                                <div className="">
                                    <div className="feature-icon mb-2">
                                        {feature.icon}
                                    </div>
                                    <h2>{feature.title}</h2>
                                    <p>{feature.content}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Features;