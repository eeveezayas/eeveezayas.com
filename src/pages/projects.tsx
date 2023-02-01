import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import Project from "../components/project";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query ProjectsQuery {
            allProjectsJson {
                edges {
                    node {
                        title
                        slug
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 1080
                                    blurredOptions: { width: 200 }
                                    placeholder: BLURRED
                                    transformOptions: { cropFocus: CENTER }
                                    aspectRatio: 1.77
                                )
                            }
                        }
                        alt
                        caption
                        link
                        description
                        credits
                        achievements
                        video
                    }
                }
            }
        }
    `);

    const projects = data.allProjectsJson.edges;

    return (
        <Layout pageTitle="Eevee Zayas-Garin">
            <Container id="projects" className="py-3">
                <h1>Projects</h1>
                {projects.map(({ node: project }: any) => {
                    const title = project.title;
                    const slug = project.slug;
                    const image = project.image;
                    const alt = project.alt;
                    const caption = project.caption;
                    const link = project.link;
                    const description = project.description;
                    const credits = project.credits;
                    const achievements = project.achievements;
                    const video = project.video;

                    return (
                        <Project
                            title={title}
                            slug={slug}
                            image={image}
                            alt={alt}
                            caption={caption}
                            link={link}
                            description={description}
                            credits={credits}
                            achievements={achievements}
                            video={video}
                        />
                    );
                })}
            </Container>
        </Layout>
    );
};

export default Projects;

export const Head = () => <SEO title="Projects | Eevee Zayas-Garín" />;
