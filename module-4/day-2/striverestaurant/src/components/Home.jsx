import React,{Component} from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import items from "../data/menu.json";

class Home extends Component{
    render(){
        return(
            <Container>
               {/* <div className="col"></div>
               <div className="col"></div>
               <div className="col"></div>
               <div className="col"></div> */
               <Row  className="justify-content-center mt-3">
                   <Col xs= {6}>
                   <h1>Welcome to StriveRestaurant</h1>
                   <p className="lead">The best dishies you can find on the web</p>
                   <hr className="mt-2"/>
                   <p>Come and visit us, we only cook Pasta!</p>
                  <Carousel>
                      {items.map(item =>{
                          return(
                            <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={item.image}
                              alt={item.name}
                            />
                          
                            <Carousel.Caption>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                            </Carousel.Caption>
                          </Carousel.Item> 
                          )
                      }
                       
                        )}
                  </Carousel>

                   </Col>
                 </Row>
                   }
            </Container>
        )
    }
    }

export default Home; 




//another way except class extends container 
// class Home extends React.Component{
//     render(){
//         return(
//             <>
//                 <div className="col"></div>
//             </>
//         )
//     }
// }