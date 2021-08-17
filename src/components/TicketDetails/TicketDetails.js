import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './TicketDetails.css'

const TicketDetails = (props) => {
  const { ticketType, price, image } = props.ticket;

  return (
    <Col className="d-flex justify-content-center">
      <Card bg="transparent"  className="card__style" >
        <Card.Img src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title as={'h1'} className="pb-2 card__title">{ticketType}</Card.Title>
           <Button 
           className="button__style" size="lg"    
           style={{borderRadius: '30px'}}>
           Buy Now</Button>
           
           <Card.Text as={'h1'} className="text-center mt-5 card__text__style">&#2547;{price}</Card.Text>
        </Card.ImgOverlay>

      </Card>
    </Col>
  );
};

export default TicketDetails;
