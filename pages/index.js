import Head from "next/head";
import Image from "next/image";
import Nav from "../components/layout/nav";
import Video from "../components/video/video";
import styles from "../styles/modules/Home.module.css";

export default function Home() {
  return (
    <>
      <Video />

      <div className={styles.navContainer}>
        <Nav />
      </div>
    </>
  );
}
