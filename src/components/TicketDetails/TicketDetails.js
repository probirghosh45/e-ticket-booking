import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './TicketDetails.css'

const TicketDetails = (props) => {
  const { ticketType, price, image } = props.ticket;

  return (
    <Col className="d-flex justify-content-center">
      <Card  className="card__style" >
        <Card.Img src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title as={'h1'} className="card__title">{ticketType}</Card.Title>
           <Button variant="success" size="lg">Buy Now</Button>
           {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
           <Card.Text className="text-center mt-5 pt-4" style={{ height: '22%', fontSize: '3.7rem', fontWeight: 'bold' }} as={'h1'}>&#8377;{price}</Card.Text>
        </Card.ImgOverlay>

      </Card>
    </Col>
  );
};

export default TicketDetails;
