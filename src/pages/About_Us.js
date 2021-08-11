import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import './AboutStyle.css'

const About_Us = (props) => {
  return (
    <Container>
        <Row>
            <Col>
            <div className="image_Aboutus"></div>
            </Col>
            <Col>
            <div className="content">
                <h3>“Sometimes I think my head is so big because it is so full of dreams” It’s not enough to be friendly. You have to be a friend.”</h3>
                <p>The best way to measure how much you've grown isn't by inches or the number of laps you can now run around the track, 
                or even your grade point average-- though those things are important, to be sure. It's what you've done with your time, 
                how you've chosen to spend your days, and whom you've touched this year. That, to me, is the greatest measure of success. 
                We carry with us, as human beings, not just the capacity to be kind, but the very choice of kindness.It's what you've done with your time,
                 how you've chosen to spend your days, and whom you've touched this year. That, to me, is the greatest measure of success.” </p>
            </div>
            </Col>
        </Row>
    </Container>
  );
};

export default About_Us;