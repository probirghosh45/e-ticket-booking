import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import fakeData from "../../fakeData/fakeData.json";
import TicketDetails from "../TicketDetails/TicketDetails";
import './Ticket.css'

const Ticket = () => {
  const [ticket, setTicket] = useState([]);
  useEffect(() => setTicket(fakeData), []);

  return (
      <>
        <Container className="mt-5 container__style">
            <Row>
                {ticket.map( ticketQuantity => <TicketDetails key={ticket.id} ticket={ticketQuantity} />)
                }
            </Row>
        </Container>
    </>
  );
};

export default Ticket;
