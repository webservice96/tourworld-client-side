import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageBooking = () => {
    const { user } = useAuth();
    const [myOrders, setMyorders] = useState([]);
    let orderCount = 1;
    useEffect(() => {
        axios.get(`https://tour-world.herokuapp.com/allbooking/`)
            .then(function (response) {
                setMyorders(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);


    /**
     * handleDeleteBooking
     * @param {*} id 
     */
    const handleDeleteBooking = (id) => {
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
                axios.delete(`https://tour-world.herokuapp.com/booking/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The Order has been deleted.',
                                'success'
                            );
                            const remainingBooking = myOrders.filter(myOrder => myOrder._id !== id);
                            setMyorders(remainingBooking);
                        }
                    })
            }
        })
    }

    return (
        <Container className="py-5">
            <h2 className="mb-3">All Booking</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tour Place</th>
                        <th>Status</th>
                        <th style={{ width: '20%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((myOrder) => (
                            <tr key={myOrder._id}>
                                <td>{orderCount++}</td>
                                <td>{myOrder.tourplace}</td>
                                <td>{myOrder.status}</td>
                                <td>
                                    <Link to={`/updatebooking/${myOrder._id}`}>
                                        <Button onClick='' variant="info" className="me-3">Update</Button>
                                    </Link>
                                    <Button onClick={() => handleDeleteBooking(myOrder._id)} variant="danger">Cancel</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageBooking;