import { useEffect } from "react";
import clsx from "clsx";
import Navbar from "../../components/navbar/Navbar.component";
import { useLocaleStore } from "@/core/zustand/locale/store";
import Footer from "../../components/footer/Footer.component";
import { getCompanyDictionaries } from "@/core/dictionaries/company";
import { getContactDictionaries } from "@/core/dictionaries/contact";
import { getMenuDictionaries } from "@/core/dictionaries/menu";
import { useNavigationStore } from "@/core/zustand/navigation/store";

import useScrollToAnchor from "../../hooks/useScrollToAnchor";
import { useLocation, useNavigate } from "react-router-dom";

export interface PublicLayoutProps {
  children?: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const locale = useLocaleStore().locale;
  const menu = getMenuDictionaries(locale).alvisual;
  const company = getCompanyDictionaries(locale).alvisual;
  const contact = getContactDictionaries(locale).alvisual;
  const navigationStore = useNavigationStore();
  const navigate = useNavigate();
  const location = useLocation();

  const defaultLink = "/";

  useEffect(() => {
    if (typeof window !== undefined) {
      // NOTES: remove previous logic
      localStorage.removeItem("navigation_id");
    }
  }, []);

  const scrollToAnchor = useScrollToAnchor(42);
  useEffect(() => {
    if (!!navigationStore.id.length) {
      navigationStore.setIDNavigation(navigationStore.id as any);
      navigationStore.setInspectionIDNavigation(navigationStore.id as any);
      scrollToAnchor(navigationStore.id);
    }
  }, [navigationStore.id]);

  useEffect(() => {
    if (location.pathname === "/" && !navigationStore.id.length) {
      navigationStore.setInspectionIDNavigation("#hero");
    }
    if (location.pathname === "/teams") {
      navigationStore.setInspectionIDNavigation("#about-us");
    }
    if (location.pathname.includes("/products")) {
      navigationStore.setInspectionIDNavigation("#products");
    }
    if (location.pathname === "/download") {
      navigationStore.setInspectionIDNavigation("#support");
    }
  }, []);

  const handleClickNavbar = (data: {
    id: string;
    name: string;
    link: string;
    type: string;
    tag: string;
  }) => {
    if (data.link.includes("/")) {
      navigationStore.setIDNavigation(data.tag as any);
      navigationStore.setInspectionIDNavigation("#support");
      navigate(data.link);
      return;
    }
    if (location.pathname === "/" && data.link.includes("#")) {
      navigationStore.setIDNavigation(data.link as any);
      navigationStore.setInspectionIDNavigation(data.link as any);
    }
    if (location.pathname !== "/" && data.link.includes("#")) {
      navigationStore.setIDNavigation(data.link as any);
      navigationStore.setInspectionIDNavigation(data.link as any);
      navigate(defaultLink);
    }
  };
  const handleClickFooter = (data: {
    id: string;
    name: string;
    link: string;
    type: string;
    tag: string;
  }) => {
    if (data.link.includes("/")) {
      navigationStore.setIDNavigation(data.tag as any);
      navigationStore.setInspectionIDNavigation("#support");
      navigate(data.link);
      return;
    }
    if (location.pathname === "/" && data.link.includes("#")) {
      navigationStore.setIDNavigation(data.link as any);
      navigationStore.setInspectionIDNavigation(data.link as any);
    }
    if (location.pathname !== "/" && data.link.includes("#")) {
      navigationStore.setIDNavigation(data.link as any);
      navigationStore.setInspectionIDNavigation(data.link as any);
      navigate(defaultLink);
    }
  };

  return (
    <main className={clsx("w-full")}>
      <Navbar
        activeTargetID={navigationStore.inspectionID}
        list={menu.list}
        onClick={handleClickNavbar}
      />
      {children}
      <Footer
        company={company}
        link={{
          ...menu,
          activeTargetID: navigationStore.inspectionID,
          onClick: handleClickFooter,
        }}
        contact={contact}
        credits={company.credits}
      />
    </main>
  );
}
