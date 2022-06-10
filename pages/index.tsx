import { ChevronDownIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Postbox from "../components/Postbox";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit Clone by Shahin F</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Postbox />

      <Feed />
    </div>
  );
};

export default Home;
