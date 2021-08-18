import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import './Destination.css'
import GoogleMap from "./Google Map/GoogleMap";
import TicketInfoDetails from "./Ticket Info Details/TicketInfoDetails";
import TicketInfo from "./Ticket Info/TicketInfo";

const Destination = () => {

   const {search} = useContext(UserContext) 

  return (
    <Container >
      <Row>
        <Col sm={12} md={5}>
          {search.isSearched ? <TicketInfoDetails/> : <TicketInfo/> }
        </Col>
        <Col sm={12} md={7}>
           <GoogleMap/>
         </Col>  
      </Row>
     
    </Container>
  );
};

export default Destination;
