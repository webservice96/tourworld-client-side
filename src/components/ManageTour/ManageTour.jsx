import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useServices from '../../hooks/useServices';

const ManageTour = () => {
    const [services, serviceLoading, setServices] = useServices();
    let tourCount = 1;

    const handleTourDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://tour-world.herokuapp.com/tour/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The tour has been deleted.',
                                'success'
                            );
                            const remainingTours = services.filter(tour => tour._id !== id);
                            setServices(remainingTours);
                        }
                    })
            }
        })


    }

    if (serviceLoading) {
        return (
            <Container className="py-5 text-center">
                <Spinner animation="grow" />
            </Container>
        )
    }

    return (
        <Container className="py-5">
            <h2>All Tours</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Tour Place</th>
                        <th>Cost</th>
                        <th style={{ width: '10%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(tour => (
                            <tr key={tour._id}>
                                <td>{tourCount++}</td>
                                <td>
                                    <img src={tour.tourPhoto} style={{ width: '200px' }} alt="Not found!" />
                                </td>
                                <td>{tour.tourName}</td>
                                <td>${tour.tourCost}</td>
                                <td className="text-center">
                                    <Button onClick={() => handleTourDelete(tour._id)} variant="danger">Remove</Button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default ManageTour;