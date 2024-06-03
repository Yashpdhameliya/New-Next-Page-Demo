import React, { useContext, useEffect } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import LocaleSelector from "@/components/modules/localeSelector";
import { GlobalContext } from "@/components/contexts/checkoutContext/context";
import { getAllCountryRegion } from "@/utils/api/countryRegion";
import { slugify } from "@/utils";

export default function Footer() {
  const { popularData, setPopularData } = useContext(GlobalContext);

  const popularCountries = popularData?.countries?.filter(
    (country: any) => country?.is_popular === 1
  );
  const popularRegions = popularData?.regions?.filter(
    (region: any) => region?.is_popular === 1
  );

  async function fetchData() {
    try {
      const { isError, response } = await getAllCountryRegion();
      setPopularData(response?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!popularData) {
      fetchData();
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bg_img}>
        <div className="container">
          <div className={styles.footer_inner_section}>
            <div className={styles.footer_column_1}>
              <div className={styles.brand_logo_main}>
                <Link href="/">
                  <img src="/assets/brand_logo.svg" alt="Brand Logo" />
                </Link>
              </div>
              <div className={styles.footer_description}>
                <p>
                  WaoSim: Your Gateway to Affordable Global Connectivity!
                  <br />
                  Escape the agony of high roaming bills with access to 150+{" "}
                  <br />
                  eSIMs at unbeatable prices.
                </p>
              </div>
              <div className={styles.footer_follow_us}>
                <h1>Follow Us</h1>
              </div>
              <div className={styles.social_link}>
                <ul>
                  <li>
                    <Link href="/">
                      <img
                        src="/assets/icons/facbook_icon.svg"
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img
                        src="/assets/icons/instagram_icon.svg"
                        alt="instagram"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img src="/assets/icons/twitter_icon.svg" alt="twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
              <LocaleSelector isFooterModule />
            </div>
            <div className={styles.footer_column_2}>
              <div className={styles.footer_heading}>
                <h2>Popular Countries</h2>
              </div>
              <div className={styles.footer_link}>
                {popularCountries?.map((country: any, countryIndex: number) => {
                  return (
                    <Link
                      href={`/plans/countries/${slugify(
                        country?.country_name
                      )}?mcc=${country?.mcc}`}
                      key={`country-${countryIndex}`}
                    >
                      <p>{country?.country_name}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className={styles.footer_column_3}>
              <div className={styles.footer_heading}>
                <h2>Regions</h2>
              </div>
              <div className={styles.footer_link}>
                {popularRegions?.map((region: any, regionIndex: number) => {
                  return (
                    <Link
                      href={`/plans/regions/${slugify(region?.name)}?id=${
                        region?.id
                      }`}
                      key={`region-${regionIndex}`}
                    >
                      <p>{region?.name}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className={styles.footer_column_4}>
              <div className={styles.about_us_footer_link}>
                <div className={styles.footer_heading}>
                  <h2>About Us</h2>
                </div>
                <div className={styles.footer_link}>
                  <Link href={"/"}>
                    <p>About WaoSim</p>
                  </Link>
                  <Link href={"/"}>
                    <p>FAQ</p>
                  </Link>
                  <Link href={"/privacy-policy"}>
                    <p>Privacy Policy</p>
                  </Link>
                  <Link href={"/terms-and-conditions"}>
                    <p>Conditions</p>
                  </Link>
                  <Link href={"/"}>
                    <p>Company</p>
                  </Link>
                  <Link href={"/"}>
                    <p>Transactions</p>
                  </Link>
                </div>
              </div>
              <div className={styles.more_info}>
                <div className={styles.footer_heading}>
                  <h2>More Info</h2>
                </div>
                <div className={styles.footer_link}>
                  <Link href={"/"}>
                    <p>Help Center</p>
                  </Link>
                  <Link href={"/"}>
                    <p>Contact Us</p>
                  </Link>
                </div>
              </div>
              <div className={styles.we_accept}>
                <div className={styles.footer_heading}>
                  <h2>We Accept</h2>
                </div>
                <div className={styles.footer_payment_card}>
                  <div className={styles.payment_card}>
                    <img src="/assets/icons/visa_card.svg" alt="Visa Card" />
                  </div>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/mastercard_card.svg"
                      alt="Master Card"
                    />
                  </div>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/mastercard_card.svg"
                      alt="Master Card"
                    />
                  </div>
                  <div className={styles.payment_card}>
                    <img src="/assets/icons/JCB_card.svg" alt="JCB Card" />
                  </div>
                </div>
                <div className={styles.footer_payment_card}>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/american_card.svg"
                      alt="american Card"
                    />
                  </div>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/union_pay_card.svg"
                      alt="union_pay Card"
                    />
                  </div>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/alipay_card.svg"
                      alt="alipay Card"
                    />
                  </div>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/amazon_pay_card.svg"
                      alt="amazon_pay Card"
                    />
                  </div>
                </div>
                <div className={styles.footer_payment_card}>
                  <div className={styles.payment_card}>
                    <img src="/assets/icons/pay_card.svg" alt="pay Card" />
                  </div>
                  <div className={styles.payment_card}>
                    <img src="/assets/icons/g_pay_card.svg" alt="g_pay Card" />
                  </div>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/paypay_card.svg"
                      alt="paypay Card"
                    />
                  </div>
                  <div className={styles.payment_card}>
                    <img
                      src="/assets/icons/paypal_card.svg"
                      alt="paypal Card"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_copy_right}>
            <p>©2024 WaoSim</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
