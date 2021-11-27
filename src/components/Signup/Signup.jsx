import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Card, Form, Container, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
    useLocation, useHistory
} from "react-router-dom";

const Signup = () => {
    const { user, createUseruSignEmailAndPassword, signWithGoogle, signWithGithub } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUseruSignEmailAndPassword(data.email, data.password);
    };

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    if (user.displayName || user.email) {
        history.push(redirect_uri);
    }

    return (
        <>
            <Container className="py-5">
                <Card className="p-4">
                    <div className="form-header">
                        <h2 className="text-center">Please Signup to full access</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                            <Form.Text className="text-muted">
                                {errors.email && <span>This field is required</span>}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                            <Form.Text className="text-muted">
                                {errors.password && <span>This field is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Signup
                        </Button>
                    </form>
                    <ButtonGroup className="mb-2">
                        <Button onClick={signWithGoogle} variant="info">Signup with google</Button>
                        <Button onClick={signWithGithub} variant="dark">Signup with github</Button>
                    </ButtonGroup>

                    <Link to="/login" className="text-end">You have account already?</Link>
                </Card>
            </Container>
        </>
    );
};

export default Signup;