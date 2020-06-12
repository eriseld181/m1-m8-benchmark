import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
class NavBar extends Component {

    render() {
        return (

            <div className="container-fluid">
                < Row>
                    <Col lg={2} className="menu" className=" black-bg">
                        <div>
                            <img src="../photos/spotify.png" width="120px" height="40px" />
                            <ol className="menuOl">
                                <li><i className="fa fa-home pr-2"></i><a style={{ textDecoration: "none; color: whitesmoke;" }}
                                    href="./html/trending.html">Home</a></li>
                                <li><a href="./search.html" style={{ textDecoration: " none; color: whitesmoke;" }}><i
                                    className="fa fa-search pr-2"></i>Search</a></li>
                                <li className="border-left"><i className="fa fa-bookmark pr-2"></i>Your Library</li>
                            </ol>
                        </div>
                        <div className="menu2">
                            <p><i className=" ml-2 fa fa-download pr-2"></i>Install App</p>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <img src="./photos/avatar.png" height="25px" width="30px" className="pr-2" />
                                <p><b>Eriseld Kosta</b></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        )

    }
}
export default NavBar