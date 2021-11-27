import React, { useEffect, useState } from 'react';
import { Col, Button, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const BookingUpdate = () => {
    const { updateId } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.put(`https://tour-world.herokuapp.com/booking/${updateId}`, data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Booking has been updated!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };
    const [singleBooking, setSingleBooking] = useState({});
    useEffect(() => {
        axios.get(`https://tour-world.herokuapp.com/${updateId}`)
            .then(res => {
                setSingleBooking(res.data);
            })
    }, [])

    const {
        tourplace,
        name,
        email,
        destination,
        duration,
        address,
        startingDate,
        endingDate,
        person,
        status
    } = singleBooking;

    const destinations = [
        {
            'label': 'Destination',
            'value': ''
        },
        {
            'label': 'Africa Adventure',
            'value': 'africa-adventure'
        },
        {
            'label': 'Africa Wild',
            'value': 'africa-wild'
        },
        {
            'label': 'America',
            'value': 'america'
        },
        {
            'label': 'Asia',
            'value': 'asia'
        },
        {
            'label': 'Scandinavia',
            'value': 'scandinavia'
        },
        {
            'label': 'Western Europe',
            'value': 'western-europe'
        }
    ];

    const durations = [
        {
            'label': 'Duration',
            'value': ''
        },
        {
            'label': '1 Day Tour',
            'value': '1'
        },
        {
            'label': '2-4 Days Tour',
            'value': '2'
        },
        {
            'label': '5-7 Days Tour',
            'value': '5'
        },
        {
            'label': '7+ Days Tour',
            'value': '7'
        }
    ];

    const persons = [
        {
            'label': 'Person',
            'value': ''
        },
        {
            'label': '1 Person',
            'value': '1'
        },
        {
            'label': '2 Person',
            'value': '2'
        },
        {
            'label': '5 Person',
            'value': '5'
        },
        {
            'label': '7 Person',
            'value': '7'
        },
        {
            'label': '10 Person',
            'value': '10'
        }
    ];

    const statuses = [
        {
            'label': 'Pending',
            'value': 'pending'
        },
        {
            'label': 'Canceled',
            'value': 'canceled'
        },
        {
            'label': 'Approved',
            'value': 'approved'
        }
    ];


    return (
        <Container className="py-5">
            <div className="shadow-sm p-3 mb-5 bg-body rounded card">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Tour Place</Form.Label>
                            <Form.Control defaultValue={tourplace} {...register("utourplace")} readOnly />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control defaultValue={name} placeholder="Name" {...register("uname")} readOnly />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control defaultValue={email} placeholder="email..." {...register("uemail")} readOnly />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Status</Form.Label>
                            <Form.Select {...register("status")}>
                                {
                                    statuses.map(singleStatus => (
                                        <option selected={singleStatus.value === status ? 'selected' : ''} value={singleStatus.value}>{singleStatus.label}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formDestination">
                            <Form.Label>Destination</Form.Label>
                            <Form.Select {...register("destination")} disabled>
                                {
                                    destinations.map(singleDestination => (
                                        <option selected={singleDestination.value === destination ? 'selected' : ''} value={singleDestination.value}>{singleDestination.label}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formDuration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Select {...register("duration")} disabled>
                                {
                                    durations.map(singleDuration => (
                                        <option selected={singleDuration.value === duration ? 'selected' : ''} value={singleDuration.value}>{singleDuration.label}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control defaultValue={address} placeholder="Address...." {...register("address")} readOnly />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formStarting">
                            <Form.Label>Starting</Form.Label>
                            <Form.Control type="date" defaultValue={startingDate} {...register("startingDate")} readOnly />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Ending</Form.Label>
                            <Form.Control type="date" defaultValue={endingDate} {...register("endingDate")} readOnly />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Person</Form.Label>
                            <Form.Select {...register("person")} disabled>
                                {
                                    persons.map(singlePerson => (
                                        <option selected={singlePerson.value === person ? 'selected' : ''} value={singlePerson.value}>{singlePerson.label}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Update Book
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default BookingUpdate;