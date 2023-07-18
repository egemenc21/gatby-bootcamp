import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
    <Head title='About'/>

       <h1>AboutPage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
        quaerat.
      </p>
      <Link to="/contact">Contact me.</Link>
    </Layout>
    
  );
};

export default AboutPage;
