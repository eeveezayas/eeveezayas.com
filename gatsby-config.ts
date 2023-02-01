import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Eevee Zayas-Garin`,
        description: `Eevee Zayas-Garin's personal website`,
        twitterUsername: `@zayaseevee`,
        image: `/eevee-ams-outpaint.png`,
        siteUrl: `https://eeveezayas.com`,
        keywords: `eevee, zayas, garin, zayas-garin, design, accessibility, lived experience, replicability, music, musical interaction, musical instrument, publications, contact, projects, sound, art, poetry, photography, PhD, MAT, QMUL, augmented instruments lab, astrolabio, spiritual advisor, yolo, valencia, london, nep7uno, kazumi`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: `Eevee Zayas-Garin`,
                short_name: `Eevee`,
                start_url: `/`,
                theme_color: `#d65c70`,
                display: `standalone`,
                icon: `static/icon.svg`,
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: "./src/data/",
            },
            __key: "data",
        },
        "gatsby-transformer-json",
    ],
};

export default config;
