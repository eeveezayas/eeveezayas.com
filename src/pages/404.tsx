import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Button } from "react-bootstrap";
import { SEO } from "../components/seo";

const pageStyles = {
    padding: "144px",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 32,
    maxWidth: 320,
};

const paragraphStyles = {
    marginBottom: 48,
    maxWidth: 400,
    fontSize: 32,
};

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>Page not found</h1>
            <p style={paragraphStyles}>
                Sorry 😔—we couldn’t find what you were looking for.
            </p>
            <Button href="/" variant="outline-primary">
                Go home
            </Button>
        </main>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="404 | Eevee Zayas-Garín" />;
