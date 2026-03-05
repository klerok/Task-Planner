import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar";
import styles from "./styles/index.module.css";
import { Header } from "../../components/Header";
import { itemsNavbar } from "../../components/Navbar/constants/itemsNavbar.js";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        <Outlet />
        123
      </main>
      <div className={styles.navbar}>
        <Navbar itemsNavbar={itemsNavbar} />
      </div>
    </div>
  );
};
