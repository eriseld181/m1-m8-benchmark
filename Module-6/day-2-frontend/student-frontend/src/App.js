import React from 'react';
import { Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form'
function App() {
  return (
    <div className="App">
      <Row>
        <Col></Col>
        <Col className="mt-5">
          <Form />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default App;
