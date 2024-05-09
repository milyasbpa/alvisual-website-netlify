import PublicLayout from "@/core/ui/layout/public/Public.layout";
import { getHomeFeatureDictionaries } from "@/features/home/constants/dictionaries";
import AboutUsHome from "@/features/home/fragments/about_us/AboutUs.home";
import ContactUsHome from "@/features/home/fragments/contact_us/ContactUs.home";
import HeroHome from "@/features/home/fragments/hero/Hero.home";
import PartnersHome from "@/features/home/fragments/partners/Partners.home";
import ProductsHome from "@/features/home/fragments/products/Products.home";
import HomeFeatureDictionariesStoreInitializer from "@/features/home/zustand/dictionaries/initializer";
import { useHomeDictionaries } from "@/features/home/zustand/dictionaries/store";
import { Helmet } from "react-helmet-async";
import Metadata from "@/core/utils/metadata/metadata.json";

export default function HomePage() {
  const dict = getHomeFeatureDictionaries("en");
  useHomeDictionaries.setState({ dict: dict });
  return (
    <>
      <Helmet>
        <title>{Metadata.home.title}</title>
        <meta name="description" content={Metadata.home.description} />
        <link rel="canonical" href="/" />
      </Helmet>
      <PublicLayout>
        <HomeFeatureDictionariesStoreInitializer dict={dict} />
        <HeroHome />
        <AboutUsHome />
        <ProductsHome />
        <PartnersHome />
        <ContactUsHome />
      </PublicLayout>
    </>
  );
}
