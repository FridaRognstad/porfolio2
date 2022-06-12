import Nav from "../components/layout/Nav";
import SemesterProject from "../components/cards/SemesterProject";
import Video from "../components/video/Video";
import styles from "../styles/modules/Home.module.css";
import ProjectExam from "../components/cards/ProjectExam";
import JsFrameworks from "../components/cards/JsFrameworks";
import Headings from "../components/headings/Headings";

export default function Home() {
  return (
    <>
      <Video />

      <div className={styles.container}>
        <div className={styles.navContainer}>
          <Headings />
          <Nav />
        </div>

        <div className={styles.cardContainer}>
          <SemesterProject />
          <ProjectExam />
          <JsFrameworks />
        </div>
      </div>
    </>
  );
}
