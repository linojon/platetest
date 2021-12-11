import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TextEditor from "../src/components/TextEditor";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Test Plate</h1>

        <div
          className={styles.grid}
          style={{ width: "100%", border: "2px solid blue" }}
        >
          <TextEditor />
        </div>
      </main>
    </div>
  );
};

export default Home;
