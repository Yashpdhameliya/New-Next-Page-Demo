import React, { useState } from "react";
import styles from "./networkIcon.module.scss";

const NetworkIcon = ({ isActive = false }: any) => {
  return (
    <div className={styles.iconContainer}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.icon} ${isActive ? styles.iconToggled : ""}`}
      >
        <rect
          width="34"
          height="34"
          rx="10"
          fill="#686868"
          className={styles.iconBackground}
        />
        <path
          d="M20 27.75H14C8.57 27.75 6.25 25.43 6.25 20V14C6.25 8.57 8.57 6.25 14 6.25H20C25.43 6.25 27.75 8.57 27.75 14V20C27.75 25.43 25.43 27.75 20 27.75ZM14 7.75C9.39 7.75 7.75 9.39 7.75 14V20C7.75 24.61 9.39 26.25 14 26.25H20C24.61 26.25 26.25 24.61 26.25 20V14C26.25 9.39 24.61 7.75 20 7.75H14Z"
          fill="white"
          className={styles.iconHeart}
        />
        <path
          d="M15.182 22.8998C14.992 22.8998 14.802 22.8298 14.652 22.6798L11.612 19.6398C11.322 19.3498 11.322 18.8698 11.612 18.5798C11.902 18.2898 12.382 18.2898 12.672 18.5798L15.712 21.6198C16.002 21.9098 16.002 22.3898 15.712 22.6798C15.572 22.8298 15.382 22.8998 15.182 22.8998Z"
          fill="white"
          className={styles.iconHeart}
        />
        <path
          d="M15.1816 22.8996C14.7716 22.8996 14.4316 22.5596 14.4316 22.1496V11.8496C14.4316 11.4396 14.7716 11.0996 15.1816 11.0996C15.5916 11.0996 15.9316 11.4396 15.9316 11.8496V22.1596C15.9316 22.5696 15.6016 22.8996 15.1816 22.8996Z"
          fill="white"
          className={styles.iconHeart}
        />
        <path
          d="M21.8617 15.64C21.6717 15.64 21.4817 15.57 21.3317 15.42L18.2917 12.38C18.0017 12.09 18.0017 11.61 18.2917 11.32C18.5817 11.03 19.0617 11.03 19.3517 11.32L22.3917 14.36C22.6817 14.65 22.6817 15.13 22.3917 15.42C22.2417 15.56 22.0517 15.64 21.8617 15.64Z"
          fill="white"
          className={styles.iconHeart}
        />
        <path
          d="M18.8184 22.8996C18.4084 22.8996 18.0684 22.5596 18.0684 22.1496V11.8496C18.0684 11.4396 18.4084 11.0996 18.8184 11.0996C19.2284 11.0996 19.5684 11.4396 19.5684 11.8496V22.1596C19.5684 22.5696 19.2284 22.8996 18.8184 22.8996Z"
          fill="white"
          className={styles.iconHeart}
        />
      </svg>
    </div>
  );
};

export default NetworkIcon;
