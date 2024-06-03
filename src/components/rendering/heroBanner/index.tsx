import React, { useContext, useState } from "react";
import styles from "./heroBanner.module.scss";
import LazyImage from "@/components/modules/lazyImage";
import { CloseIcon, SearchIcon } from "@/assets/images/icons";
import { GlobalContext } from "@/components/contexts/checkoutContext/context";
import { slugify } from "@/utils";
import Link from "next/link";

const HeroBanner = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<any>([]);
  const { popularData } = useContext(GlobalContext);

  const handleInputChange = (e: any) => {
    let searchTerm = e.target.value;
    if (searchTerm.length === 1 && searchTerm[0] === " ") {
      return;
    }

    setSearchQuery(e.target.value);
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredCountries =
      popularData?.countries
        .filter((country: any) =>
          country?.country_name?.toLowerCase().includes(lowerCaseSearchTerm)
        )
        .map((country: any) => ({
          highlighttitle:
            searchTerm.length > 0
              ? country?.country_name.replace(
                  new RegExp(searchTerm, "ig"),
                  (match: any) => `<span class="queryHighlight">${match}</span>`
                )
              : country?.country_name,
          title: country?.country_name,
          imgUrl: country?.country_plan_image,
          planListLink: `/plans/countries/${slugify(
            country?.country_name
          )}?mcc=${country?.mcc}`,
        })) || [];

    const filteredPlans =
      popularData?.regions

        .filter((plan: any) =>
          plan?.name?.toLowerCase()?.includes(lowerCaseSearchTerm)
        )
        .map((plan: any) => ({
          highlighttitle:
            searchTerm.length > 0
              ? plan?.name.replace(
                  new RegExp(searchTerm, "ig"),
                  (match: any) => `<span class="queryHighlight">${match}</span>`
                )
              : plan?.name,
          title: plan?.name,
          imgUrl: plan?.plan_image,
          planListLink: `/plans/regions/${slugify(plan?.name)}?id=${plan?.id}`,
        })) || [];

    let finalArray =
      lowerCaseSearchTerm?.length > 0
        ? [...filteredCountries, ...filteredPlans]
        : [];
    setFilteredOptions(finalArray);
    setShowDropdown(true);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    if (searchQuery?.length < 1) {
      setFilteredOptions([]);
    }
  };


  return (
    <div className={styles.herobanner}>
      <div className={styles.herobanner_image}>
        <img
          src="https://stagecdn.waosim.com/landingpage/home/heroBannerBackground.png"
          alt="herobanner"
        />
      </div>
      <div className={styles.bannermainsection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.bannertext}>
                <h1>
                  Beyond Borders, Beyond Limits <span>WaoSim</span> Empowers
                  Your Network
                </h1>
                <div className={styles.searchinput}>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Data plans for over 150+ countries and regions"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={searchQuery}
                    onFocus={handleDropdownToggle}
                    onBlur={() => {
                      setTimeout(() => setShowDropdown(false), 200);
                    }}
                    onChange={handleInputChange}
                  />

                  <div className={styles.inputButtons}>
                    {!searchQuery ? (
                      <div className={styles.searchIcon}>
                        <SearchIcon fill="white" />
                      </div>
                    ) : (
                      <div
                        className={styles.closeIcon}
                        onClick={() => {
                          setShowDropdown(!showDropdown);
                          setSearchQuery("");
                          setFilteredOptions([]);
                        }}
                      >
                        <CloseIcon fill="#A9A9A9" />
                      </div>
                    )}
                  </div>

                  {showDropdown && filteredOptions?.length > 0 && (
                    <ul className={styles.dropdown}>
                      <div className={styles.dropdownmain}>
                        {filteredOptions?.map((option: any, index: any) => (
                          <Link href={option?.planListLink} key={index}>
                            <li>
                              <div className={styles.countryImage}>
                                <LazyImage
                                  image={{
                                    src: option?.imgUrl,
                                    alt: option?.title,
                                  }}
                                  className={styles.dropdown_image}
                                />
                                {/* <div className={styles.countryImage_icon}>
                                  <img src={esim_icon} alt="esim_icon" />
                                </div> */}
                                <div className={styles.gridSection_countryName}>
                                  <p>{option?.title}</p>
                                </div>
                              </div>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: option?.highlighttitle,
                                }}
                              />
                            </li>
                          </Link>
                        ))}
                      </div>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.right_section_banner}>
                <div className={styles.right_section_banner_image}>
                  <img
                    src="https://stagecdn.waosim.com/landingpage/home/bannerImage.png"
                    alt="banner image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
