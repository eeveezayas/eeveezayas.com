import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Container, Row } from "react-bootstrap";
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";
import Music from "./music";

const IndexPage: React.FC<PageProps> = () => {
    const data = useStaticQuery(graphql`
        query ProjectPreviewsQuery {
            allProjectsJson {
                edges {
                    node {
                        title
                        slug
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 600
                                    blurredOptions: { width: 100 }
                                    placeholder: BLURRED
                                    transformOptions: { cropFocus: CENTER }
                                    aspectRatio: 1.77
                                )
                            }
                        }
                        alt
                        short_description
                    }
                }
            }
        }
    `);

    const projects = data.allProjectsJson.edges;

    return (
        <Layout pageTitle="Eevee Zayas-Garín">
            <Container className="py-3">
                <StaticImage
                    alt="Portrait of Eevee Zayas-Garin at Carmen Gray's studio in Amsterdam, 2022. Outpainted using Dall-E 2."
                    src={"../images/eevee-ams-outpaint.png"}
                    placeholder="blurred"
                />
                <p className="lead pt-3">
                    I am a design engineer and a musician who also explores the
                    mediums of poetry and photography. I have a special interest
                    in matters of access, dialogic design, sound art and
                    practice-based research into musical interaction.
                </p>
                <p>
                    I am originally from Valencia (Spain) and based in London
                    since 2011. I graduated in BSc Engineering Product Design
                    with First Class Honours from London South Bank University
                    in 2015. I am currently a PhD student at the Media and Arts
                    Technology (MAT) Centre for Doctoral Studies, Queen Mary
                    University of London. As part of the Augmented Instruments
                    Laboratory, my research is concerned with accessibility,
                    lived experience and replicability in digital musical
                    instrument design.
                </p>
                <Button
                    variant="outline-primary"
                    href="mailto:eevee1@posteo.uk"
                >
                    Get in touch
                </Button>
            </Container>
            <Container fluid className="bg-light py-3">
                <Container>
                    <h2>Projects</h2>
                    <Row xs={1} md={2} className="g-4 py-3">
                        {projects.map(({ node: project }: any) => {
                            const title = project.title;
                            const slug = project.slug;
                            const image = project.image;
                            const alt = project.alt;
                            const shortDescription = project.short_description;

                            return (
                                <ProjectPreview
                                    title={title}
                                    slug={slug}
                                    image={image}
                                    alt={alt}
                                    shortDescription={shortDescription}
                                />
                            );
                        })}
                    </Row>
                </Container>
            </Container>
            <Music />
            <Container fluid id="publications" className="bg-light py-3">
                <Container>
                    <h2>Publications</h2>
                    <p>Here is a list of my publications:</p>
                    <ul>
                        <li className="my-3">
                            Zayas-Garin, E., & McPherson, A. (2022, June 16).
                            Dialogic Design of Accessible Digital Musical
                            Instruments: Investigating Performer Experience.
                            <i>
                                Proceedings of the International Conference on
                                New Interfaces for Musical Expression.
                            </i>{" "}
                            NIME 2022.{" "}
                            <a
                                href="https://doi.org/10.21428/92fbeb44.2b8ce9a4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://doi.org/10.21428/92fbeb44.2b8ce9a4
                            </a>
                        </li>
                        <li className="my-3">
                            Reed, C. N., Nordmoen, C., Martelloni, A., Lepri,
                            G., Robson, N., Zayas-Garin, E., Cotton, K., Mice,
                            L., & McPherson, A. (2022, June 16). Exploring
                            Experiences with New Musical Instruments through
                            Micro-phenomenology.{" "}
                            <i>
                                Proceedings of the International Conference on
                                New Interfaces for Musical Expression.
                            </i>{" "}
                            NIME 2022.{" "}
                            <a
                                href="https://doi.org/10.21428/92fbeb44.b304e4b1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://doi.org/10.21428/92fbeb44.b304e4b1
                            </a>
                        </li>
                        <li className="my-3">
                            Zayas-Garin, E., Harrison, J., Jack, R., &
                            McPherson, A. (2021, April 29). DMI Apprenticeship:
                            Sharing and Replicating Musical Artefacts.{" "}
                            <i>
                                Proceedings of the International Conference on
                                New Interfaces for Musical Expression.
                            </i>{" "}
                            NIME 2021.{" "}
                            <a
                                href="https://doi.org/10/gm8tkf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://doi.org/10/gm8tkf
                            </a>
                        </li>
                    </ul>
                </Container>
            </Container>
            <Container fluid id="contact" className="py-3">
                <Container>
                    <h2>Contact</h2>
                    <p>Say hello! 👋</p>
                    <Button
                        variant="outline-primary"
                        href="mailto:eevee1@posteo.uk"
                        target="_blank"
                        rel="noreferrer"
                        className="me-2"
                    >
                        Email
                    </Button>
                    <Button
                        variant="outline-primary"
                        href="twitter.com/zayaseevee"
                        target="_blank"
                        rel="noreferrer"
                        className="me-2"
                    >
                        Twitter
                    </Button>
                    <Button
                        variant="outline-primary"
                        href="https://tech.lgbt/@eevee"
                        target="_blank"
                        rel="noreferrer"
                        className="me-2"
                    >
                        Mastodon
                    </Button>
                </Container>
            </Container>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
