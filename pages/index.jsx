import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layoutHome/Layout";
import Home1 from "../components/layoutHome/section/Home1";
import Home2 from "../components/layoutHome/section/Home2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Undangan Digital Online Website</title>
        <link rel="icon" href="/logo/zenalogo.png" />
      </Head>
      <Layout>
        <Home1 />
        <Home2 />
      </Layout>
    </>
  );
}
