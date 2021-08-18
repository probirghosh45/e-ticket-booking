import React, { useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const TicketInfoDetails = () => {
 
   const {search,setSearch,ticket} = useContext(UserContext)

    return (
        <Container>
            <Card className="my-5" style={{borderRadius:"10px",background: "#eec2c2"}}>
                <Row className="m-3">
                    <Col className="bg-primary text-white" style={{borderRadius:"10px"}}>
                      <Card.Body>
                         <Card.Title>
                          <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
                          {search.pickForm}
                        </Card.Title> 
                        <Card.Title>
                        <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
                          {search.pickTo}
                        </Card.Title> 
                      </Card.Body>
                    </Col>
                </Row>
                <Row  className="m-3" style={{borderRadius:"10px",background: "white"}}>
                    <Col className="my-2 d-flex align-content-center justify-content-center" sm="4" md="3">
                      <Card.Img style={{width:"70px"}} src="https://i.ibb.co/N2NGsWM/ticket.png"></Card.Img>
                    </Col>
                    <Col className="d-flex align-items-center" sm="8" md="9">
                      <Card.Body >
                          <Card.Title className="d-inline">Ticket 1</Card.Title>
                          <Card.Title className="d-inline ps-5">&#2547;{ticket}</Card.Title>
                      </Card.Body>
                    </Col>
                </Row>
                <Row  className="m-3" style={{borderRadius:"10px",background: "white"}}>
                    <Col className="my-2 d-flex align-content-center justify-content-center" sm="4" md="3">
                      <Card.Img style={{width:"70px"}} src="https://i.ibb.co/N2NGsWM/ticket.png"></Card.Img>
                    </Col>
                    <Col className="d-flex align-items-center" sm="8" md="9">
                      <Card.Body >
                          <Card.Title className="d-inline">Ticket 1</Card.Title>
                          <Card.Title className="d-inline ps-5">&#2547;{ticket}</Card.Title>
                      </Card.Body>
                    </Col>
                </Row>
                <Row  className="m-3" style={{borderRadius:"10px",background: "white"}}>
                    <Col className="my-2 d-flex align-content-center justify-content-center" sm="4" md="3">
                      <Card.Img style={{width:"70px"}} src="https://i.ibb.co/N2NGsWM/ticket.png"></Card.Img>
                    </Col>
                    <Col className="d-flex align-items-center" sm="8" md="9">
                      <Card.Body >
                          <Card.Title className="d-inline">Ticket 1</Card.Title>
                          <Card.Title className="d-inline ps-5">&#2547;{ticket}</Card.Title>
                      </Card.Body>
                    </Col>
                </Row>
                <Row className="m-3">
                   <Button onClick={()=>setSearch(false)} 
                   className="button__style block ms-0 mb-0" 
                   style={{fontSize:"20px"}} type="submit" >
                     Search Again
                  </Button>
                </Row>
            </Card>
        </Container>
    );
};

export default TicketInfoDetails;