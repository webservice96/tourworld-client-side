import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerGB from '../../assets/img/footer-bg.png';

import './Footer.css';
const Footer = () => {
    return (
        <footer className="site-footer" style={{ backgroundImage: `url(${footerGB})` }}>
            <Container>
                <Row>
                    <Col sm={12} md={4} className="pe-5">
                        <h2 className="text-muted">TourWorld</h2>
                        <p className="text-muted">We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5 className="mb-3 text-muted">Contact Details</h5>
                        <ul className="footer-contact ms-4">
                            <li className="text-muted">Jl. Raya Kuta No.70, Kuta</li>
                            <li className="text-muted">support@domain.com</li>
                            <li className="text-muted">8 AM - 5 PM , Monday - Saturday</li>
                            <li className="text-muted">(+021) 2336 278</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5 className="text-muted mb-3">Other Pages</h5>
                        <ul className="footer-contact ms-4">
                            <li><Link className="text-muted" to="/">Home</Link></li>
                            <li><Link className="text-muted" to="/tours">Tours</Link></li>
                            <li><Link className="text-muted" to="/login">Login</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;