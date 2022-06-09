import styles from "../../styles/modules/Card.module.css";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import LinkProp from "../layout/Link";

export default function JsFrameworks() {
  return (
    <div className={styles.jsContainer} id="js">
      <span className={styles.cardBackground}></span>
      <div className={styles.cardContainer}>
        <Heading title="JavaScript Framworks Course Assignment" />
        <Paragraph content="The is simple app I made for a course assignemt when we had about the topic JavaScript Frameworks. The project in build up with Next.js. The app gets data about fruits from Fruityvice using Axios. It also have a login form for admin. The form and validation is built with React Hook Form and Yup." />
        <LinkProp url="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-FridaRognstad.git" />
      </div>
    </div>
  );
}
