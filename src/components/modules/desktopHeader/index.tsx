import React, { useEffect, useRef, useState } from "react";
import styles from "./desktopHeader.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import LocaleSelector from "../localeSelector";
const MobileMenuIcon = "/assets/icons/mobileMenu.svg";

let navigation = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Plans",
    url: "/plans",
  },
  {
    title: "WaoClub",
    url: "/waoclub",
  },
  {
    title: "Device",
    url: "/device",
  },
  {
    title: "How it works",
    url: "/works",
  },
  {
    title: "Operator / APN",
    url: "/operator",
  },
  {
    title: "Installation",
    url: "/installation",
  },
  {
    title: "News",
    url: "/news",
  },
  // {
  //   title: "Contact Us",
  //   url: "/contact-us",
  // },
];

const DesktopHeader = ({
  isTransparentBackground = true,
}: {
  isTransparentBackground?: boolean;
}) => {
  const searchDrawerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const scrollThreshold = 10;
  const router = useRouter();
  const { pathname } = router;

  const openNav = () => {
    setIsSideNavOpen(true);
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        styles.desktopNavigation,
        isSticky
          ? styles.headerSticky
          : isTransparentBackground
          ? styles.headerFixed
          : styles.headerPlain
      )}
      ref={searchDrawerRef}
    >
      <div className={classNames(styles.desktopHeaderContainer)}>
        <div className={styles.brand_logo_main}>
          <Link href="/">
            <img src="/assets/brand_logo.svg" alt="Brand Logo" />
          </Link>
        </div>

        <>
          <div className={styles.desktopNavigationMenu}>
            {navigation?.map(({ title, url }: any, currentIndex: number) => (
              <Link
                key={`navigation-${currentIndex}`}
                className={classNames(
                  styles.tablink,
                  `/${pathname?.split("/")[1]}` === url && styles.active
                )}
                href={url.length > 0 ? url : "/"}
              >
                {title}
              </Link>
            ))}
          </div>
          <div className={styles.userSelectContainer}>
            <Link
              href="/auth/login"
              className={classNames(
                styles.login_sing_up,
                pathname.includes("auth") && styles.active
              )}
            >
              Log in / Sign up
            </Link>
            <div className={styles.userDataSection}>
              <LocaleSelector />
            </div>
            <div className={styles.mobielMenuIcon} onClick={openNav}>
              <img src={MobileMenuIcon} alt="Brand Logo" />
            </div>
          </div>
        </>
      </div>

      <div className={`${styles.sidenav} ${isSideNavOpen ? styles.open : ""}`}>
        <div className={styles.sidenavCloseContainer}>
          <img src="/assets/brand_logo.svg" alt="Brand Logo" />
          <span className={styles.closebtn} onClick={closeNav}>
            Close
          </span>
        </div>
        <div className={styles.firstMenuContainer}>
          {navigation?.map(
            ({ title, openNewTab, url }: any, currentIndex: number) => (
              <div
                key={`${title}-${currentIndex}`}
                className={styles.menuLinks}
              >
                <p className={styles.listName}>{title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
