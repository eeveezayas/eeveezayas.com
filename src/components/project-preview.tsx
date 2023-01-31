import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Card, Col } from "react-bootstrap";

const ProjectPreview = ({ title, slug, image, alt, shortDescription }: any) => {
    return (
        <Col>
            <Card>
                <GatsbyImage
                    image={getImage(image) as IGatsbyImageData}
                    alt={alt}
                    className="card-img-top"
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{shortDescription}</p>
                    </Card.Text>
                    <a
                        className="stretched-link"
                        href={/projects/ + "#" + slug}
                    >
                        Go to project
                    </a>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProjectPreview;
