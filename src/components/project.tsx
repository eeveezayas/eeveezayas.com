import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button, Container } from "react-bootstrap";

const Project = ({
    title,
    slug,
    image,
    alt,
    caption,
    link,
    description,
    credits,
    achievements,
    video,
}: any) => {
    return (
        <Container id={slug} className="px-0">
            <hr className="my-4" />
            <h2 className="text-info mb-3">{title}</h2>
            <GatsbyImage
                image={getImage(image) as IGatsbyImageData}
                alt={alt}
            />
            <p>
                <small className="text-muted">{caption}</small>
            </p>
            <p>
                <a href={link} target="_blank" rel="noreferrer">
                    {title}
                </a>{" "}
                {description}
            </p>
            <p>{credits}</p>
            <p className="fw-light fst-italic">{achievements}</p>
            <Button
                variant="outline-primary"
                target="_blank"
                rel="noreferrer"
                href={video}
            >
                Watch video
            </Button>
        </Container>
    );
};

export default Project;
