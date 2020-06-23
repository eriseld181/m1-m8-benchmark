import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class deezer extends Component {
    state = {
        search: '',
        songs: []
    }
    updateSearch = (event) => {
        this.setState({ search: event.currentTarget.value })
    }

    handleSearch = async () => {
        let resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.state.search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "5adaa39bc1mshd0a69d0d95f1d2ap1b717ajsnb5f60cf77aa0"
            }
        })

        const savesongs = await resp.json();
        this.setState({ songs: savesongs.data })

        //1) fetch the songs from the artist that we have in state.search
        //2) update the state saving the reponse into the songs array
    }


    render() {
        return (

            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" onChange={this.updateSearch}
                                className="mr-sm-2" />
                            <Button variant="outline-success" onClick={this.handleSearch} >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                {this.state.songs.map(song => <Card key={song.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={song.album.cover} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                )}

            </>
        )
    }
}
