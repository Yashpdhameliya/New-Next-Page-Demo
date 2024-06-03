import React, { useContext, useEffect } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bg_img}>
       <h1>Footer</h1>
      </div>
    </footer>
  );
}
