import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroBG from '../../assets/img/banner-bg.png';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero-sec section-padding" style={{ backgroundImage: `url(${heroBG})` }}>
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="banner-text">
                                <h1>Plan Your Best Holiday With Us & Enjoy
                                </h1>
                                <p>No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ei vis ridens moderatius reformidans cu vim doctus accumsan ignota.</p>
                                <Link to="/tours"><Button className="health-btn-dark">See All Tour</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Hero;