import React, { useContext } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import './TicketInfo.css'



const TicketInfo = () => {

    const {register,handleSubmit,watch,formState: { errors },} = useForm();
    

    const {search,setSearch,ticket,setTicket} = useContext(UserContext)

    const onSubmit = (data) => {
        console.log(data);
        data.isSearched=true;
        setSearch(data);
    }
    return (

        <Container>
            <Card className="mt-5 ticket__info__style" style={{ borderRadius: "10px", backgroundColor:"#eec2c2" }}>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label as={'h4'}>Pick From</Form.Label>
                        <Form.Control {...register("pickForm", { required: true })} type="text" placeholder="Current Location Name" name="pickForm" defaultValue={search.pickForm} />
                        {errors.pickForm?.type === 'required' && "Your current location name is  required!"}
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label as={'h4'}>Pick To</Form.Label>
                        <Form.Control {...register("pickTo",{ required: true })}  placeholder="Destination Location Name" name="pickTo" defaultValue={search.PickTo} />
                        {errors.pickTo?.type === 'required' && "Your destination location name is  required!"}
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label as={'h4'}>Date</Form.Label>
                        <Form.Control {...register("date",{ required: true })} name="date"  type="date" />
                        {errors.date?.type === 'required' && " Select the date!"}
                    </Form.Group>
                    <Button variant="primary" className="button__style block ms-0" type="submit" >Search</Button>
                </Form>
            </Card.Body>
            </Card>
        
      </Container>
    );
};

export default TicketInfo;