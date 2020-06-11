import React from 'react '
import { Form, Button } from "react-bootstrap";
const MyForm = () => (
  state = {
    email: 'sakjndkjsn'
  }

onChange = (e) => {
  e.currentTarget.id
  e.currentTarget.value
  this.setState({ e.currentTarget.id: e.currentTarget.value })
}

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={this.state.email} type="email" placeholder="Enter email" onChange={this.onChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
  </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
</Button>
</Form>
)
