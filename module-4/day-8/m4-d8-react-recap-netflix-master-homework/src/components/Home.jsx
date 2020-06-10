import React, { Component } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import Gallery from "./Gallery";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayGallery: true,
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
  }

  render() {
    // console.log("render method");
    return (
      <Container fluid className="px-4">
        <Row className="justify-content-between mb-4">
          <Col className="d-flex align-items-center">
            <h2 className="mb-0">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="btn btn-sm dropdown-toggle rounded-0 ml-3"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <div className="d-none d-md-block">
            <i className="fa fa-th-large icons mr-2"></i>
            <i className="fa fa-th icons mr-4"></i>
          </div>
        </Row>

        {/* <Gallery title={title} imageSrc={"/assets/image.jpg"}>

            <h4>{props.title}</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">

                <Movies title={props.title} imageSrc={props.imageSrc}>
                    <Image src={props.imageSrc} alt={props.title}></Image>
                </Movies>
                
            </Row>

        <Gallery /> */}

        {this.state.displayGallery && (
          <div>
            {/* This Gallery will not receive props.title inside, only props.imageSrc */}
            <Gallery imageSrc="/assets/6.png" />

            <Gallery title="Trending" imageSrc="/assets/8.png" />
            <Gallery title="Horror" imageSrc="/assets/7.png" />
          </div>
        )}
      </Container>
    );
  }
}

export default Home;
