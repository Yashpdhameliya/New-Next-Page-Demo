import React, { useContext, useEffect } from "react";
import styles from "./localeSelector.module.scss";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import {
  LANGUAGE_DICT,
  LanguageContext,
} from "@/components/contexts/languageContext";
import classNames from "classnames";
const usaFlagImagePath = "/assets/flag/USA.png";
const japanFlagImagePath = "/assets/flag/japan.png";

const LocaleSelector = ({ isFooterModule }: any) => {
  const {
    language,
    setLanguage,
    currency,
    setCurrency,
    allLocales,
    allCurrency,
  } = useContext(LanguageContext);
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    // let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = language;
    document.documentElement.setAttribute("lang", lang);
    // document.documentElement.setAttribute("dir", dir);
  }, [router.locale]);

  const handleLanguageChange = (value: any) => {
    setLanguage && setLanguage(value);
    setCurrency && setCurrency(value === "jp" ? "JPY" : "USD");
    // router.push(`${value}${asPath}`, asPath, { locale: value });
  };

  const handleCurrencyChange = (value: any) => {
    setCurrency && setCurrency(value);
    // router.push(`${value}${asPath}`, asPath, { locale: value });
  };

  return (
    <>
      <div className={styles.countrySelectWithFlag}>
        <Dropdown
          className={classNames(
            styles.customDropdown,
            isFooterModule && styles.languageSwicher
          )}
        >
          <Dropdown.Toggle
            id="dropdown-basic"
            className={styles.customDropdownToggle}
          >
            <div
              className={classNames(
                styles.card_round_item,
                isFooterModule && styles.footerRound
              )}
            >
              <div className={styles.card_round_item_skeleton}>
                <img
                  src={
                    language === "jp" ? japanFlagImagePath : usaFlagImagePath
                  }
                  alt="dropdown_icon"
                />
              </div>
            </div>
            <span
              className={classNames(
                isFooterModule ? styles.footerDesign : styles.countryText
              )}
            >
              {" "}
              {language in LANGUAGE_DICT
                ? LANGUAGE_DICT[language as keyof typeof LANGUAGE_DICT]
                : language}
            </span>

            <img
              src={
                isFooterModule
                  ? "/assets/icons/dropdown_icon_white.svg"
                  : "/assets/icons/dropdown_icon.svg"
              }
              alt="dropdown_icon"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu
            className={classNames(
              styles.customDropdownMenu,
              isFooterModule && styles.customDropdownMenuFooter
            )}
          >
            {" "}
            {allLocales
              ?.filter((item) => item !== language)
              ?.map((localValue: any, index: number) => {
                return (
                  <Dropdown.Item
                    onClick={() => handleLanguageChange(localValue)}
                    key={`allLocales-${index}`}
                  >
                    <img
                      src={
                        language !== "jp"
                          ? japanFlagImagePath
                          : usaFlagImagePath
                      }
                      alt="Brand Logo"
                    />
                    <span>
                      {localValue in LANGUAGE_DICT
                        ? LANGUAGE_DICT[
                            localValue as keyof typeof LANGUAGE_DICT
                          ]
                        : localValue}{" "}
                    </span>
                  </Dropdown.Item>
                );
              })}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {!isFooterModule ? (
        <Dropdown className={styles.customDropdown}>
          <Dropdown.Toggle className={styles.customDropdownToggle}>
            {currency in LANGUAGE_DICT
              ? LANGUAGE_DICT[currency as keyof typeof LANGUAGE_DICT]
              : currency}
            <img src={"/assets/icons/dropdown_icon.svg"} alt="dropdown_icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu
            className={classNames(
              styles.customDropdownMenu,
              styles.currencyDropDownMenu
            )}
          >
            {allCurrency
              ?.filter((item) => item !== currency)
              ?.map((localValue: any, index: number) => {
                return (
                  <Dropdown.Item
                    onClick={() => handleCurrencyChange(localValue)}
                    key={`allCurrency-${index}`}
                  >
                    <div>
                      {" "}
                      <span>
                        {localValue in LANGUAGE_DICT
                          ? LANGUAGE_DICT[
                              localValue as keyof typeof LANGUAGE_DICT
                            ]
                          : localValue}
                      </span>
                    </div>
                  </Dropdown.Item>
                );
              })}
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
    </>
  );
};

export default LocaleSelector;
