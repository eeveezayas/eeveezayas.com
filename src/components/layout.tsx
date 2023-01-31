import React from "react";
import { Link } from "gatsby";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Twirl as Hamburger } from "hamburger-react";
import "../styles/styles.scss";

const Layout = ({ pageTitle, children }: any) => {
    let header = (
        <Container fluid className="bg-light">
            <Container>
                <Navbar expand="lg" variant="light">
                    <Navbar.Brand className="fs-1 display-1" href="/">
                        {pageTitle}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <Hamburger />
                    </Navbar.Toggle>
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link href="/projects/#projects">
                                Projects
                            </Nav.Link>
                            <Nav.Link href="/#music">Music</Nav.Link>
                            <Nav.Link href="/#publications">
                                Publications
                            </Nav.Link>
                            <Nav.Link href="/#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );

    let footer = (
        <Container>
            <Container className="float-end mb-0 w-auto">
                <Link to="#">
                    <small>Back&nbsp;to&nbsp;top</small>
                </Link>
            </Container>
            <p className="w-75 mb-0 mr-3">
                <small>
                    This site is hosted by a provider that uses clean or
                    renewable energy.
                </small>
            </p>
        </Container>
    );

    return (
        <>
            <header>{header}</header>
            <main>{children}</main>
            <footer className="footer bg-light d-flex align-items-center">
                {footer}
            </footer>
        </>
    );
};

export default Layout;
