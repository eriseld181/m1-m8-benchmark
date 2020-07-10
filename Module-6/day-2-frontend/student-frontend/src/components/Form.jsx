import React, { Component } from 'react'
import { Col, Form, Button, ImputGroup } from 'react-bootstrap'
export default class form extends Component {


    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Enter Student Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Enter Student Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" />
                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Enter Student Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Student Surname</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicbirthday">
                    <Form.Label>Enter Student Birthday</Form.Label>
                    <Form.Control type="date" placeholder="Enter birthday" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        )
    }
}
