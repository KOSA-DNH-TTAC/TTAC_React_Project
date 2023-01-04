import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';

function YBNavi() {
    return (
        <>
            <img className='img' src='https://starfield.co.kr/cdn/starfield_02/tnt/20191001/IM20191001103745685603.png' />
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/YB"><img src="http://tnnews.co.kr/wp-content/uploads/2019/08/%EC%8B%A0%EC%84%B8%EA%B3%84%ED%91%B8%EB%93%9C-%EB%85%B8%EB%B8%8C%EB%9E%9C%EB%93%9C-%EB%B2%84%EA%B1%B0-%EB%A1%9C%EA%B3%A0.jpg"
                        className='img' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Nobrand">No Brand</Nav.Link>
                            <Nav.Link href="/Menu">Menu</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default YBNavi;