import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";

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
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Eevee Zayas-Garin</title>;
