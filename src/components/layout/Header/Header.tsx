import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <div className={`${styles.topHeader}`}>
        <div className={`${styles.topHeaderBar} w-full overflow-hidden`}>
          <Link to="/">
            <div className="logo bg-cover min-h-[56px] min-w-[56px] bg-[url('/Ubiquiti_logo.svg')] transition-all hover:bg-[url('/Ubiquiti_logo-hover.svg')] focus:bg-[url('/Ubiquiti_logo-active.svg')]" />
          </Link>
          <div className={styles.pageTitle}>
            <h1>Devices</h1>
          </div>
          <div className={styles.topInfo}>
            <span>Author / Oskars Rozitis</span>
          </div>
        </div>
      </div>
    </>
  );
};
