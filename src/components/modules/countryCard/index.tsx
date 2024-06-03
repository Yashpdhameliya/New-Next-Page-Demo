import React from "react";
import styles from "./countryCard.module.scss";
import LazyImage from "../lazyImage";
import LazyLoad from "../lazyLoad";
const esim_background = "/assets/esim_background.png";
const countryCardEsimIcon = "/assets/icons/countryCardEsimIcon.png";

const CountryCard = ({
  countryName,
  countryImage,
  countryFlag,
  isLoading,
}: any) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardContainer}
        style={
          countryImage && !isLoading
            ? {
                backgroundImage: `url(${countryImage})`,
              }
            : {}
        }
      >
        {isLoading ? (
          <LazyImage
            image={{
              src: countryImage,
              alt: "countryImage",
            }}
            className={styles.cardCountryImage}
          />
        ) : null}

        {countryFlag && !isLoading && (
          <div className={styles.cardCountryFlag}>
            <img src={countryFlag} alt="countryFlag" />
          </div>
        )}

        {!isLoading && (
          <div className={styles.cardBlackBackgroundImage}>
            <img src={esim_background} alt="esim_background" />
          </div>
        )}

        {countryName && !isLoading && (
          <div className={styles.cardCountryName}>
            <p> {countryName}</p>
          </div>
        )}

        {!isLoading && (
          <div className={styles.cardEsimSection}>
            <img src={countryCardEsimIcon} alt="countryCardEsimIcon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
