import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import PostBox from "../components/PostBox";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Clone Reddit 2.0</title>
      </Head>

      {/* PostBox */}
      <PostBox />

      {/* Feed */}

      {/* Sidebar */}
    </div>
  );
};

export default Home;
