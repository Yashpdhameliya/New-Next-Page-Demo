import React from "react";
import styles from "./googlePlayAppStore.module.scss";
import Link from "next/link";
const googlePlayStore = "/assets/icons/googlePlayStore.svg";
const appStore = "/assets/icons/appStore.svg";


const GooglePlayAppStore = () => {
  return (
    <div className={styles.googlePlayAppStore}>
      <Link href="/">
        <div className={styles.googlePlayAppStore_image}>
          <img src={appStore} alt="app store" />
        </div>
      </Link>
      <Link href="/">
        <div className={styles.googlePlayAppStore_image}>
          <img src={googlePlayStore} alt="google play" />
        </div>
      </Link>
    </div>
  );
};

export default GooglePlayAppStore;
