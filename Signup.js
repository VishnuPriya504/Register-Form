import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export default function Signup() {

    const [formData, setFormData] = useState({ name: "", email: "", password: "" })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleClick = async (e) => {
        e.preventDefault();

        const { name, email, password } = formData;

        const user = await fetch("http://localhost:5000/register", ({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        }))
        const data = await user.json();
        console.log(data);
    }

    return (
        <div>

            <div className="container" style={{ width: "450px", marginTop: "60px" }}>
                <h5>Signup</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={formData.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} value={formData.email} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleClick}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
