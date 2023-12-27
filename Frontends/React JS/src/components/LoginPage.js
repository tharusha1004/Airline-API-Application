import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginPage () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const formsubmit = (myUsername, myPassword) => {

        console.log(myUsername)
        console.log(myPassword)

        axios.post("http://127.0.0.1:8084/v1/admins/login", {"username":myUsername, "password":myPassword})
            .then(
                res => {
                    console.warn(res.data.status_code)
                    if(res.data.status_code==200)
                        window.location.replace("/flights")
                    else   {
                        alert("Check Your Details Again !!!")
                        window.location.reload()
                    }
                }
            )
    }

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control onChange={e=>{setUsername(e.target.value)}} type="username" placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                            </Form.Group>

                            <Link to='/'>
                                <button className='btn btn-success' onClick={e =>formsubmit(username, password)}>
                                    Login
                                </button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPage;