import styles from "../../styles/modules/Card.module.css";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import LinkProp from "../layout/Link";

import PropTypes from "prop-types";

export default function ProjectExam() {
  return (
    <div className={styles.examContainer} id="exam">
      <div className={styles.cardContainer}>
        <span className={styles.cardBackground}></span>
        <Heading title="Project Exam 2" />
        <Paragraph content="This was my app for the Project Exam 2. The site is made for a fictional trourist agemcy in Bergen. In this site there the users can book different establishments in Bergen and contact the agency. The admin can also log in and ad establishments, see bookings and messages from the contact form." />
        <LinkProp url="https://github.com/Noroff-FEU-Assignments/project-exam-2-FridaRognstad.git" />
      </div>
    </div>
  );
}
