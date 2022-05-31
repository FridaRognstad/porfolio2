import Link from "next/link";
import styles from "../../styles/modules/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a>Project Exam 2</a>
        </li>
        <li>
          <a>Semester Project 2</a>
        </li>
        <li>
          <a>Js Frameworks CA</a>
        </li>
      </ul>
    </nav>
  );
}
