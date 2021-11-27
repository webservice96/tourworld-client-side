import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const NewTour = () => {
    const [palephoto, setPalephoto] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://tour-world.herokuapp.com/newplace', data)
            .then(response => {
                if (response.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Tour Place Successfully Added!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                setPalephoto('');
                reset();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <Form className="py-5" onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <Card className="shadow-sm p-3 mb-5 bg-body rounded">
                    <h2>Add a Tour</h2>
                    <Row>
                        <Col md={7}>
                            <div className="mb-2">
                                <Form.Label>Tour Name</Form.Label>
                                <Form.Control type="text" {...register("tourName", { required: true })} placeholder="Tour name...." />
                            </div>

                            <div className="mb-2">
                                <Form.Label>Tour Description</Form.Label>
                                <Form.Control as="textarea" {...register("tourdesc", { required: true })} rows={3} placeholder="Description...." />
                            </div>

                            <div className="mb-2">
                                <Form.Label>Tour Places</Form.Label>
                                <Form.Select {...register("tourPlace")}>
                                    <option value="">Select tour places</option>
                                    <option value="Paris, France - The City of Lights">Paris, France - The City of Lights</option>
                                    <option value="Machu Picchu, Peru">Machu Picchu, Peru</option>
                                    <option value="The Grand Canyon">The Grand Canyon</option>
                                    <option value="New Zealand - The Land Where Adventures Wait">New Zealand - The Land Where Adventures Wait</option>
                                    <option value="Colosseum, Rome">Colosseum, Rome</option>
                                    <option value="Bora Bora, French-Polynesia - A colossal cosmos encircled by a mystique lagoon">Bora Bora, French-Polynesia - A colossal cosmos encircled by a mystique lagoon</option>
                                    <option value="London, England - London: The heritage of England">London, England - London: The heritage of England</option>
                                    <option value="Great Barrier Reef, Australia - Nature's Biggest Marvel">Great Barrier Reef, Australia - Nature's Biggest Marvel</option>
                                    <option value="Iceland - For the offbeat traveller">Iceland - For the offbeat traveller</option>
                                    <option value="Maldives, Maldives - A Tropical Haven">Maldives, Maldives - A Tropical Haven</option>
                                    <option value="Pamukalle, Turkey - Pamukalle-The City of Minerals">Pamukalle, Turkey - Pamukalle-The City of Minerals</option>
                                    <option value="Phuket, Thailand - Where Summer Beach Fashion Truly Comes Alive">Phuket, Thailand - Where Summer Beach Fashion Truly Comes Alive</option>
                                </Form.Select>
                            </div>

                            <div className="mb-2">
                                <Form.Label>Place Photo</Form.Label>
                                <Form.Control {...register("tourPhoto", { required: true })} onChange={(e) => setPalephoto(e.target.value)} type="text" placeholder="Photo url...." />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="mb-2">
                                <Form.Label>Tour Cost</Form.Label>
                                <Form.Control type="text" {...register("tourCost", { required: true })} placeholder="Cost....$00" />
                            </div>
                            <div className="place-photo">
                                <Form.Label>Photo Preview</Form.Label>
                                <Image src={palephoto} style={{ width: '100%' }} rounded />
                            </div>
                        </Col>
                    </Row>
                    <Button className="mt-4" type="submit">Add new Place</Button>
                </Card>
            </Container>
        </Form>
    );
};

export default NewTour;