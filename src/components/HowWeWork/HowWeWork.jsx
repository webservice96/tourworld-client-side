import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import workLgImage from '../../assets/img/tour-about.png';
import './HowWeWork.css';

const HowWeWork = () => {
    return (
        <Container className="section-padding">
            <Row className="align-self-center">
                <Col sm={12} md={7} className="pe-5">
                    <div className="how-we-work-left ">
                        <div className="work-header">
                            <h2 className="fs-1 mb-3">Why Book With TourWorld</h2>
                            <p className="text-muted">Book flights to any country in the world. Search and compare the best value deals for popular airports.</p>
                        </div>
                        <div className="work-boxes pt-4">
                            {/* single work box start */}
                            <div className="work-box d-flex mb-2">
                                <div className="work-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div className="work-text ms-4">
                                    <h2 className="fs-4">Hassle-free Booking</h2>
                                    <p className="text-muted">Whether you are searching for flights, hotel rooms, resorts, holiday packages or transfer option, you can find it all here under one umbrella, all at your disposal, just a few clicks away.</p>
                                </div>
                            </div>
                            {/* single work box start */}
                            <div className="work-box d-flex mb-2">
                                <div className="work-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="work-text ms-4">
                                    <h2 className="fs-4">Trusted Travel Agents in London</h2>
                                    <p className="text-muted">The process for booking your vacation is seamless, with timely confirmations and swift follow-ups. With us, your data is kept secure, and trade associations like ABTA and ATOL protect your funds.</p>
                                </div>
                            </div>
                            {/* single work box start */}
                            <div className="work-box d-flex mb-2">
                                <div className="work-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="work-text ms-4">
                                    <h2 className="fs-4">Expert Travel Advice</h2>
                                    <p className="text-muted">Over time we have built expertise and proficiency that is unmatched in the UK tourism market. Our experts would be by your side throughout your trip, only a phone call away.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col sm={12} md={5}>
                    <div className="how-we-work-right">
                        <Image src={workLgImage} rounded />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HowWeWork;