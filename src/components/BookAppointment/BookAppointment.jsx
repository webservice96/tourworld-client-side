import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const BookAppointment = ({ tourName, tourCost }) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        data.userId = user.uid;
        axios.post('https://tour-world.herokuapp.com/newbooking', data)
            .then(response => {
                if (response.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Booking has been accepted!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                reset();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <Container className="py-5">
            <div className="shadow-sm p-3 mb-5 bg-body rounded">
                <h2>
                    {
                        tourName && tourCost ? (
                            <>
                                Cost: ${tourCost}
                            </>
                        ) : (
                            'Book a tour'
                        )
                    }
                </h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Tour Place</Form.Label>
                            <Form.Control defaultValue={tourName} {...register("tourplace", { required: true })} readOnly />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control defaultValue={user.displayName} placeholder="Name" {...register("name", { required: true })} />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control defaultValue={user.email} placeholder="email..." {...register("email", { required: true })} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Destination</Form.Label>
                            <Form.Select defaultValue="destination" {...register("destination")}>
                                <option value="">Destination</option>
                                <option value="africa-adventure">Africa Adventure</option>
                                <option value="africa-wild">Africa Wild</option>
                                <option value="america">America</option>
                                <option value="asia">Asia</option>
                                <option value="scandinavia">Scandinavia</option>
                                <option value="western-europe">Western Europe</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Duration</Form.Label>
                            <Form.Select defaultValue="destination" {...register("duration")}>
                                <option value="">Duration</option>
                                <option value="1">1 Day Tour</option>
                                <option value="2">2-4 Days Tour</option>
                                <option value="5">5-7 Days Tour</option>
                                <option value="7">7+ Days Tour</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address...." {...register("address")} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Starting</Form.Label>
                            <Form.Control type="date" {...register("startingDate", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Ending</Form.Label>
                            <Form.Control type="date" {...register("endingDate", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Person</Form.Label>
                            <Form.Select defaultValue="Person" {...register("person")}>
                                <option value="">Person</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Person</option>
                                <option value="5">5 Person</option>
                                <option value="7">7 Person</option>
                                <option value="10">10 Person</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Book Now
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default BookAppointment;