import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Container, Row } from "react-bootstrap";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const EeveeFest = () => {
    return (
        <Container
            fluid
            style={{ height: "100vh", position: "relative" }}
            className="px-0"
        >
            <StaticImage
                alt="Porttrait of Eevee Zayas-Garin hiding their face with their hands"
                src={"../images/bg.jpg"}
                placeholder="blurred"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            />
            <Container className="col-auto">
                <Container
                    className="z-3 position-absolute d-flex flex-column align-items-center justify-content-around p-5 my-5"
                    style={{
                        margin: "auto",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        textAlign: "center",
                    }}
                >
                    <Row className="mb-3">
                        <StaticImage
                            alt="EeveeFest logo"
                            src="../images/eeveefest.svg"
                            placeholder="blurred"
                            imgStyle={{ objectFit: "contain" }}
                            style={{
                                maxWidth: "500px",
                                margin: "auto",
                                left: 0,
                                right: 0,
                            }}
                        />
                        <h2
                            className="text-primary"
                            style={{ margin: "auto", maxWidth: "520px" }}
                        >
                            I'm celebrating my 30th birthday on Saturday 11th
                            February
                        </h2>
                    </Row>
                    <Row>
                        <h3 className="text-warning mb-0">
                            Pt. 1 @ Set Social 7pm, SE15 4NP
                        </h3>
                        <p className="lead text-primary fst-italic mb-2">
                            "cheap drinks and pool tables"
                        </p>
                        <Container className="mb-4">
                            <Button
                                href="https://social.setspace.uk/"
                                target="_blank"
                                rel="noreferrer"
                                variant="outline-light"
                                className="px-3"
                            >
                                More info
                            </Button>
                        </Container>
                    </Row>
                    <Row>
                        <h3 className="text-warning mb-0">
                            Pt. 2 @ Ormside Projects 11pm, SE15 1TR
                        </h3>
                        <p className="lead text-primary fst-italic mb-2">
                            "my favourite dj is in town"
                        </p>
                        <Container className="mb-4">
                            <Button
                                href="https://ra.co/events/1647500"
                                target="_blank"
                                rel="noreferrer"
                                variant="outline-light"
                                className="px-4"
                            >
                                RA tickets
                            </Button>
                        </Container>
                    </Row>
                    {/* <Row>
                        <p className="lead text-warning">
                            Please confirm your attendance!!!
                        </p>
                        <Container>
                            <Button
                                href="mailto:eevee1@posteo.uk?subject=EeveeFest RSVP"
                                variant="outline-light"
                                className="px-4"
                            >
                                RSVP (if you haven't already)
                            </Button>
                        </Container>
                    </Row> */}
                </Container>
            </Container>
        </Container>
    );
};

export default EeveeFest;

export const Head = () => <SEO title="EeveeFest Feb 11th" />;
