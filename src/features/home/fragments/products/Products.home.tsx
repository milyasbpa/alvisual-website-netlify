import * as React from "react";

import clsx from "clsx";
import { useHomeDictionaries } from "../../zustand/dictionaries/store";
import ProductValueCardHome from "../../components/product_value_card/ProductValueCard.home";
import ProductCardHome from "../../components/product_card/ProductCard.home";
import Section from "@/core/ui/components/section/Section.component";
import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import { useNavigationStore } from "@/core/zustand/navigation/store";
import { useNavigate } from "react-router-dom";

export interface ProductsHomeProps {}

export default function ProductsHome(_: ProductsHomeProps) {
  const dict = useHomeDictionaries().dict.product;
  const navigate = useNavigate();
  const navigationStore = useNavigationStore();
  const handleClickProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigationStore.setIDNavigation("#products");
    navigate(e.currentTarget.value);
    e.preventDefault();
  };

  // const { isIntersecting, ref } = useIntersectionObserver({
  //   delay: 2000,
  // });

  // React.useEffect(() => {
  //   if (isIntersecting) {
  //     navigationStore.setIDNavigation("#products");
  //   }
  // }, [isIntersecting]);

  return (
    <div id={"products"} className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-center place-content-center gap-y-[1.5rem]",
              "w-full",
              "py-[3rem] md:py-[6rem]"
            )}
          >
            {/* headline */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start gap-y-[1.5rem]"
                )}
              >
                <h4
                  // ref={ref}
                  className={clsx(
                    "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] text-raisin-black font-normal uppercase tracking-[0.3rem]"
                  )}
                >
                  {dict.pre}
                </h4>
                <h2
                  className={clsx(
                    "text-[2.5rem] leading-[3.375rem] md:text-[3rem] md:leading-[4rem] text-eerie-black font-bold"
                  )}
                >
                  {dict.headline}
                </h2>
              </div>

              <p
                className={clsx(
                  "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] font-light text-granite-gray"
                )}
              >
                {dict.subline}
              </p>
            </div>

            {/* values */}
            <div
              className={clsx(
                "grid grid-cols-1 lg:grid-cols-3 place-content-start place-items-start gap-x-[1.25rem] gap-y-[1.25rem]",
                "w-full"
              )}
            >
              {dict.values.map((value) => (
                <ProductValueCardHome
                  key={value.id}
                  image={value.image}
                  name={value.name}
                  description={value.description}
                />
              ))}
            </div>

            {/* products */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start",
                "w-full"
              )}
            >
              {dict.products.map((product, productIndex) => (
                <ProductCardHome
                  key={product.id}
                  name={product.name}
                  launch_type={product.launch_type}
                  launch_type_icon={product.launch_type_icon}
                  headline={product.headline}
                  description={product.description}
                  cta={product.cta}
                  illustration={product.illustration}
                  isReverse={productIndex % 2 === 1}
                  onClick={handleClickProduct}
                />
              ))}
            </div>
          </div>
        </ContentSection>
      </Section>
    </div>
  );
}
