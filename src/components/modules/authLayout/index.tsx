import React from "react";
import styles from "./authLayout.module.scss";
const loginSignupImage = "/assets/login_signup_form_img.png";
const backBackground = "/assets/nesw_articals_bg.png";

const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <div className={styles.childrenSection}>
        <div className={styles.signupMainSection}>
          <div className={styles.signupMainGrid}>
            <div className={styles.signupLeftMain}>{children}</div>
            <div className={styles.signupRightMain}>
              <div className={styles.textMain}>
                <h1>
                  Welcome to <span>WaoSim</span>
                </h1>
                <p>
                  Beyond Borders, Beyond Limits <span> WaoSim </span>
                  Empowers Your Network
                </p>
              </div>
              <div className={styles.formImage}>
                <img src={loginSignupImage} alt="Login Signup Image" />
              </div>
            </div>
          </div>
          <div className={styles.backBackgroundImage}>
            <img src={backBackground} alt="Backgroung Image" />
          </div>
          <div className={styles.footer_color}></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
