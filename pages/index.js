import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        {/* <Pricing /> */}
        <Contact />
      </Layout>
    </>
  );
}
