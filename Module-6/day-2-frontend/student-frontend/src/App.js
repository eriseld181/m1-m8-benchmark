import React from 'react';
import { Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form'
import Students from "./components/ShowStudents"
function App() {
  return (
    <div className="App">
      <Row>
        <Col></Col>
        <Col className="mt-5">
          <h4 className="mb-5">Please insert student information</h4>
          <Form />
          <Students />

        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default App;
