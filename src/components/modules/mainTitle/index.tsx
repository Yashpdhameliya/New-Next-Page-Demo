import React from "react";
import styles from "./mainTitle.module.scss";
const VectorIcon = "/assets/icons/vector.svg";
import classNames from "classnames";

const MainTitle = ({ text }: any) => {
  return (
    <div className={classNames(styles.mainTitleContainer)}>
      <h2
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />

      <div className={styles.botomSpiralLine}>
        <img src={VectorIcon} alt="Brand Logo" />
      </div>
    </div>
  );
};

export default MainTitle;
