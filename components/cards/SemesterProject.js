import styles from "../../styles/modules/Card.module.css";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import LinkProp from "../layout/Link";

import PropTypes from "prop-types";

export default function SemesterProject() {
  return (
    <div className={styles.semesterContainer} id="semester">
      <div className={styles.cardContainer}>
        <span className={styles.cardBackground}></span>
        <Heading title="Semester Project 2" />
        <Paragraph content="This is the descripton" />
        <LinkProp url="https://github.com/Noroff-FEU-Assignments/project-exam-2-FridaRognstad.git" />
      </div>
    </div>
  );
}
