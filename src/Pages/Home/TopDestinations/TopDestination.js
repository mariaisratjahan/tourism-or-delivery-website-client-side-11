import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const TopDestination = () => {
    return (
        <div className="py-5 px-4 my-5">
        <h2 className="text-danger py-5">Top Destinations</h2>
        <Row xs={1} md={3} className="g-4">
  
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-image-20-415x365.jpg" />
                    <Card.Body>
                    <Card.Title>The Spanish Riviera</Card.Title>
                    <Card.Text className="bg-danger">
                       $1120
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-image-17-415x365.jpg" />
                    <Card.Body>
                    <Card.Title>Italian dream tour</Card.Title>
                    <Card.Text className="bg-danger">
                       $795
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-image-21-415x365.jpg" />
                    <Card.Body>
                    <Card.Title>Thailand with Cambodia</Card.Title>
                    <Card.Text className="bg-danger">
                       $1450
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

            </Row>
        </div>
    );
};

export default TopDestination;