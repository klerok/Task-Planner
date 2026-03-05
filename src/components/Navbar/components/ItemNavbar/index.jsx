import { NavLink } from "react-router";
import styles from "./styles/index.module.css";

export const ItemNavbar = ({ title, path, Icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.logo} ${styles.item} ${isActive ? styles.active : ""}`
      }
    >
      {Icon && <Icon/>}
      <span className={styles.item_title}>{title}</span>
    </NavLink>
  );
};
