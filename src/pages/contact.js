import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
const ContactPage = () => {
  return (
    <Layout>
    <Head title='Contact'/>
      <h1>ContactPage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
        quaerat.
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          {" "}
          google
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
