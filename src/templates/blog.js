import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/head";
export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`;
const Blog = (props) => {
  const options = {
    renderNode: {
      ["embedded-asset-block"]: (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
  };
  // console.log(JSON.parse(props.data.contentfulBlogPost.body.raw));
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  );
};

export default Blog;
