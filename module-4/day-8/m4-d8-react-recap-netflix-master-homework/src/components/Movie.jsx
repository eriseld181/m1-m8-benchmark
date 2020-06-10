import React from "react";
import { Col, Image } from "react-bootstrap";

function Movie(props) {
  console.log("anotherProp", props.imageSrc);
  console.log("title", props.title);
  return (
    <Col className="mb-2">
      <Image fluid src={props.imageSrc} alt={props.title} />
    </Col>
  );
}

export default Movie;
