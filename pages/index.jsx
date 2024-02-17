import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layoutHome/Layout";
import Home1 from "../components/layoutHome/section/Home1";
import Home2 from "../components/layoutHome/section/Home2";
import Home3 from "../components/layoutHome/section/Home3";
import Home4 from "../components/layoutHome/section/Home4";

export default function Home() {
  return (
    <>
      <Head>
        <title>Undangan Digital Online Website</title>
        <link rel="icon" href="/Logo/zenalogo.png" />
      </Head>
      <Layout>
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
      </Layout>
    </>
  );
}
