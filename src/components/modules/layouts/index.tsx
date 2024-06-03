import {
  interBold,
  interMedium,
  interRegular,
  interSemiBold,
  kabutHitamRegular,
} from "@/assets/fonts/fonts";
import GlobalProvider from "@/components/contexts/checkoutContext/context";
import LanguageProvider from "@/components/contexts/languageContext";
import Footer from "@/components/rendering/footer";
import Header from "@/components/rendering/header";
import classNames from "classnames";
import React from "react";

export interface LayoutPropType {
  page: any;
  children: any;
  popup?: any;
  router?: any;
}
export default function Layout({
  page,
  children,
  popup,
  router,
}: LayoutPropType) {
  let globalFontVariableClass = classNames(
    interSemiBold.className,
    interRegular.variable,
    interMedium.variable,
    interBold.variable,
    kabutHitamRegular.variable
  );

  return (
    <LanguageProvider>
      <GlobalProvider>
        <main className={globalFontVariableClass}>
          <Header />
          {children}
          <Footer />
        </main>
      </GlobalProvider>
    </LanguageProvider>
  );
}
