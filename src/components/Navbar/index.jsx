import { ProManageIcon } from "../../ui/icons/ProManageIcon";
import styles from "./styles/index.module.css";
import { LogOutIcon } from "../../ui/icons/LogOutIcon";
import { ItemNavbar } from "./components/ItemNavbar";
import { Link } from "react-router";

export const Navbar = ({ itemsNavbar }) => {
  return (
    <nav className={styles.container}>
      <Link to='/' className={`${styles.logo} ${styles.main_logo}`}>
        <ProManageIcon />
        <span className={styles.main_logo_title}>Pro Manage</span>
      </Link>
      <ul className={styles.items_navbar}>
        {itemsNavbar.map((item) => (
          <li key={item.id}>
            <ItemNavbar 
            title={item.title} 
            path={item.path} 
            Icon={item.Icon}
            />
          </li>
        ))}
      </ul>
      <button className={`${styles.logo} ${styles.logout_icon}`}>
        <LogOutIcon />
        <span className={styles.logout_title}>Log out</span>
      </button>
    </nav>
  );
};
