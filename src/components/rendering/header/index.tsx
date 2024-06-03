import React from "react";
import LazyLoad from "@/components/modules/lazyLoad";
import DesktopHeader from "@/components/modules/desktopHeader";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const nonTransparentRoutes = [
    "/plans",
    "/auth",
    "/terms-and-conditions",
    "/waoclub",
  ];

  const isTransparentBackground = !nonTransparentRoutes.some((route) =>
    router.pathname.includes(route)
  );

  return (
    <>
      {/* {isDesktop ? */}
      <DesktopHeader isTransparentBackground={isTransparentBackground} />
    </>
  );
};

export default Header;
