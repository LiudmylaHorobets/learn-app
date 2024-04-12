import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
