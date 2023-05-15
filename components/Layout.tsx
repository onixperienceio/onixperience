import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ONIX</title>
        <meta name="description" content="ONIX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;