import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../../App';

const GoogleMap = () => {
 
    const {search} = useContext(UserContext);

    return (
        <Container className="pt-5">
            <iframe
             className="w-100"
             title="Google Map"
             src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDMdlO3qKX7wG6u0KUkTJuVH9IUA57oAm4&origin=Bangladesh+${search.pickForm || "Dhaka" }&destination=Bangladesh+${search.pickTo || "Barishal"}&avoid=tolls|highways`}
             width="800"
             height="650"
             style={{ border: 0, borderRadius: "10px" }}
             allowFullScreen=""
             loading="lazy"
             >

            </iframe>
        </Container>
    );
};

export default GoogleMap;