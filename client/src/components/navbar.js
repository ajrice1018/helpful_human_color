import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";


const SearchBar = () => {
    return(
    <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img
            alt=""
            src="/logo-symbol.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        </Navbar.Brand>
        <Nav.Item>
            <Form inline>
                <FormControl type="text" placeholder="Search"  />
            </Form>
        </Nav.Item>
    </Navbar>
            
        
    )
}

export default SearchBar;