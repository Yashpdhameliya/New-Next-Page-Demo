import React from "react";
import styles from "./whyWaoSim.module.scss";
import MainTitle from "@/components/modules/mainTitle";
import LazyImage from "@/components/modules/lazyImage";
import Link from "next/link";
const smoothConnectivity = "/assets/icons/smoothConnectivity.png";
const budget_friendly = "/assets/icons/budget_friendly.png";
const ideal_plans = "/assets/icons/ideal_plans.png";
const exclusive_discount = "/assets/icons/exclusive_discount.png";
const pocketWiFiRentals = "/assets/pocketWiFiRentals.png";
const special_plans = "/assets/special_plans.png";
const just_connection = "/assets/just_connection.png";
const qrCode = "/assets/qrCode.png";

const WhyWaoSim = () => {
  const cardArray = [
    {
      src: smoothConnectivity,
      alt: "Smooth Connectivity ",
      title: "Smooth Connectivity",
      description:
        "Unlock instant internet access in <br> 150+ countries with our cutting-<br>edge eSIM solution",
    },
    {
      src: budget_friendly,
      alt: "Smooth Connectivity ",
      title: "Budget Friendly ",
      description:
        "Uncover exceptional value with<br>our pocket-friendly prices. We<br>stand out with competitive rates ",
    },
    {
      src: ideal_plans,
      alt: "Smooth Connectivity ",
      title: "Ideal Plans",
      description:
        "Leave your international travel<br>plans to us. We've curated the<br>ideal plan, just for you.",
    },
    {
      src: exclusive_discount,
      alt: "Smooth Connectivity ",
      title: "Exclusive Discounts",
      description:
        "Discover and Enjoy exclusive<br>discounts and travel rewards on<br>Data Plans worldwide with<br>WaoClub’s loyalty program.",
    },
  ];

  const planArray = [
    {
      src: pocketWiFiRentals,
      title: "Say Goodbye to<br>Pocket WiFi Rentals",
    },
    {
      src: special_plans,
      title: "Affordable and<br>Special Plans",
    },
    {
      src: just_connection,
      title: "No SIM Card,<br>Just Connection",
    },
  ];

  return (
    // <LazyLoad id={"WhyWaoSim"}>
    <div className={styles.whyWaoSimMainSection}>
      <div className={styles.whyWaoSimMain}>
        <div className="container">
          <MainTitle text="Why <span>WaoSim</span>" />

          <div className={styles.card_section_container}>
            <div className="row">
              {cardArray.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  key={`cardArray - ${index}`}
                >
                  <div className={styles.card_style}>
                    <img src={item.src} alt="Smooth Connectivity " />
                    <h3>{item.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.scanQrCodeSection}>
            <div className="row">
              <div className="col-md-4">
                <div className={styles.threeGridCard}>
                  {planArray?.map((item, index) => (
                    <div
                      className={styles.threeGridCard_card}
                      key={`planArray - ${index}`}
                    >
                      <div className={styles.threeGridCard_card_image}>
                        <img src={item?.src} alt={item?.title} />
                      </div>

                      <h4
                        dangerouslySetInnerHTML={{ __html: item?.title }}
                      ></h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.threeImageBanner_section}>
                  <img
                    src="https://stagecdn.waosim.com/landingpage/home/threeImageBanner.png"
                    alt="threeImageBanner"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.qrCodeLinkSection}>
                  <div className={styles.qrCodeLinkSection_topSection}>
                    <p>Scan it with the camera to download the app.</p>

                    <div className={styles.qrCodeLinkSection_image}>
                      <img src={qrCode} alt="qrCode" />
                    </div>
                  </div>
                  <div className={styles.qrCodeLinkSection_bottomSection}>
                    <Link href="/">
                      <LazyImage
                        image={{
                          src: "/assets/app_Store_light.png",
                          alt: "app store",
                        }}
                        className={styles.social_app_button_image}
                        disableSkeleton={true}
                      />
                    </Link>
                    <Link href="/">
                      <LazyImage
                        image={{
                          src: "/assets/google_Play_light.png",
                          alt: "google play",
                        }}
                        className={styles.social_app_button_image}
                        disableSkeleton={true}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </LazyLoad>
  );
};

export default WhyWaoSim;
